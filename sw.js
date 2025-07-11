// Service Worker for Transportation Code Study Tool
// Provides offline functionality and caching for better mobile performance

const CACHE_NAME = 'tc-study-tool-v1.0.0';
const STATIC_CACHE = 'tc-static-v1.0.0';
const DYNAMIC_CACHE = 'tc-dynamic-v1.0.0';

// Files to cache for offline use
const STATIC_FILES = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/data.js',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('[SW] Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static files:', error);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch Strategy: Cache First for static files, Network First for dynamic content
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!request.url.startsWith('http')) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // If we have a cached version, return it for static files
        if (cachedResponse && isStaticFile(request.url)) {
          return cachedResponse;
        }
        
        // For dynamic content or non-cached files, try network first
        return fetch(request)
          .then((networkResponse) => {
            // If network fetch succeeds, cache the response
            if (networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone);
                });
            }
            
            return networkResponse;
          })
          .catch((error) => {
            console.log('[SW] Network fetch failed, trying cache:', error);
            
            // If network fails, try to serve from cache
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // If no cache available, return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            throw error;
          });
      })
  );
});

// Helper function to determine if a file is static
function isStaticFile(url) {
  const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2'];
  const staticHosts = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net'];
  
  const urlObj = new URL(url);
  
  // Check if it's from a CDN
  if (staticHosts.some(host => urlObj.hostname.includes(host))) {
    return true;
  }
  
  // Check file extension
  return staticExtensions.some(ext => urlObj.pathname.endsWith(ext));
}

// Handle background sync for offline data
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'sync-study-data') {
    event.waitUntil(syncStudyData());
  }
});

// Sync study data when back online
async function syncStudyData() {
  try {
    console.log('[SW] Syncing study data...');
    
    // Get any pending data from IndexedDB
    const pendingData = await getPendingData();
    
    if (pendingData && pendingData.length > 0) {
      // Send pending data to server when back online
      for (const data of pendingData) {
        try {
          await fetch('/api/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          
          // Remove from pending after successful sync
          await removePendingData(data.id);
        } catch (error) {
          console.error('[SW] Failed to sync data item:', error);
        }
      }
    }
    
    console.log('[SW] Study data sync completed');
  } catch (error) {
    console.error('[SW] Study data sync failed:', error);
  }
}

// Helper functions for IndexedDB operations
async function getPendingData() {
  // Implementation would depend on your data storage strategy
  return [];
}

async function removePendingData(id) {
  // Implementation would depend on your data storage strategy
  console.log('[SW] Removing pending data:', id);
}

// Handle messages from the main app
self.addEventListener('message', (event) => {
  console.log('[SW] Received message:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_STUDY_DATA') {
    // Cache user's study progress
    caches.open(DYNAMIC_CACHE)
      .then((cache) => {
        const response = new Response(JSON.stringify(event.data.data));
        return cache.put('/study-progress', response);
      });
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  console.log('[SW] Periodic sync triggered:', event.tag);
  
  if (event.tag === 'update-study-stats') {
    event.waitUntil(updateStudyStats());
  }
});

async function updateStudyStats() {
  try {
    console.log('[SW] Updating study statistics in background...');
    // Perform any background statistics updates
  } catch (error) {
    console.error('[SW] Failed to update study stats:', error);
  }
}
