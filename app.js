// Transportation Code Study Tool - Main Application
class TransportationCodeApp {
    constructor() {
        console.log('🏗️ Creating TransportationCodeApp instance...');
        this.currentFlashcard = 0;
        this.filteredFlashcards = [];
        this.currentTab = 'flashcards';
        this.studySession = {
            startTime: null,
            cardsStudied: new Set(),
            difficulty: {},
            totalTime: 0
        };
        this.practiceTest = {
            questions: [],
            currentQuestion: 0,
            answers: {},
            startTime: null,
            flagged: new Set()
        };
        
        // Responsive design support (no mobile-specific features)
        this.isSmallScreen = window.innerWidth <= 768;
        
        // Safely load data from localStorage with error handling
        try {
            this.notes = JSON.parse(localStorage.getItem('transportationNotes') || '[]');
        } catch (e) {
            console.warn('Failed to load notes from localStorage:', e);
            this.notes = [];
        }
        
        try {
            this.statistics = JSON.parse(localStorage.getItem('transportationStats') || '{}');
        } catch (e) {
            console.warn('Failed to load statistics from localStorage:', e);
            this.statistics = {};
        }
        
        console.log('🏗️ Constructor completed, calling init...');
        this.init();
    }

    init() {
        console.log('🔧 Running init method...');
        
        // Debug: Check flashcard count immediately
        console.log('📊 DEBUG: Initial flashcard count check:');
        console.log('- studyData available:', typeof studyData !== 'undefined');
        console.log('- studyData.flashcards length:', studyData?.flashcards?.length || 'undefined');
        console.log('- penalCodeData available:', typeof penalCodeData !== 'undefined');
        console.log('- tcoleStudyData available:', typeof tcoleStudyData !== 'undefined');
        
        // Validate that studyData is available
        if (typeof studyData === 'undefined' || !studyData.flashcards || !studyData.practiceQuestions) {
            console.error('Study data not loaded properly');
            this.showDataLoadError();
            return;
        }
        
        console.log('📚 Study data validated successfully');
        
        try {
            console.log('🎛️ Setting up event listeners...');
            this.setupEventListeners();
            
            console.log('📇 Loading flashcards...');
            this.loadFlashcards();
            
            console.log('🧪 Populating practice test categories...');
            this.populatePracticeTestCategories();
            
            console.log('🔍 Initializing search filters...');
            this.initializeSearchFilters();
            
            console.log('📊 Updating statistics...');
            this.updateStatistics();
            
            console.log('📝 Rendering notes...');
            this.renderNotes();
            
            console.log('⚙️ Loading and applying settings...');
            this.loadAndApplySettings();
            
            console.log('📈 Charts will be created when statistics tab is accessed');
            // Don't create charts immediately - wait for statistics tab to be accessed
            
            // Handle window resize for responsive design
            window.addEventListener('resize', () => this.handleViewportChange());
            
            console.log('🧪 Running performance test...');
            // Run performance test in development
            setTimeout(() => this.performanceTest(), 1000);
            
            console.log('✅ Init completed successfully!');
        } catch (error) {
            console.error('❌ Error during init:', error);
        }
    }

    showDataLoadError() {
        const container = document.querySelector('.main-content');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #dc3545;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h2>Data Loading Error</h2>
                    <p>The study data could not be loaded. Please refresh the page or check your connection.</p>
                    <button onclick="location.reload()" class="primary-btn">Refresh Page</button>
                </div>
            `;
        }
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabElement = e.target.closest('.nav-tab');
                if (tabElement && tabElement.dataset.tab) {
                    this.switchTab(tabElement.dataset.tab);
                }
            });
        });

        // Flashcard controls
        document.getElementById('startStudyBtn').addEventListener('click', () => this.startStudySession());
        document.getElementById('flipBtn').addEventListener('click', () => this.flipCard());
        document.getElementById('flipBackBtn').addEventListener('click', () => this.flipCard());
        document.getElementById('prevCard').addEventListener('click', () => this.previousCard());
        document.getElementById('nextCard').addEventListener('click', () => this.nextCard());
        document.getElementById('shuffleBtn').addEventListener('click', () => this.shuffleCards());
        document.getElementById('resetProgressBtn').addEventListener('click', () => this.resetProgress());

        // Difficulty buttons
        document.getElementById('easyBtn').addEventListener('click', () => this.markDifficulty('easy'));
        document.getElementById('mediumBtn').addEventListener('click', () => this.markDifficulty('medium'));
        document.getElementById('hardBtn').addEventListener('click', () => this.markDifficulty('hard'));

        // Filter controls
        document.getElementById('mainCategorySelect').addEventListener('change', () => this.updateSubCategories());
        document.getElementById('categorySelect').addEventListener('change', () => this.applyFilters());
        document.getElementById('difficultySelect').addEventListener('change', () => this.applyFilters());
        document.getElementById('testMainCategory').addEventListener('change', () => this.populatePracticeTestCategories());
        document.getElementById('testCategory').addEventListener('change', () => this.applyTestFilters());
        
        // Browse by course functionality
        this.setupBrowseByCourseEvents();

        // Search functionality
        document.getElementById('searchBtn').addEventListener('click', () => this.performSearch());
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });
        
        // Search filter functionality
        document.getElementById('searchMainCategory').addEventListener('change', () => this.updateSearchSubCategories());
        document.getElementById('searchCategory').addEventListener('change', () => this.performFilteredSearch());

        // Statistics functionality
        document.getElementById('loadSampleDataBtn').addEventListener('click', () => this.addSampleStatistics());

        // Practice Test functionality - MISSING EVENT LISTENERS ADDED
        document.getElementById('startTestBtn').addEventListener('click', () => this.startPracticeTest());
        document.getElementById('nextQuestion').addEventListener('click', () => this.nextTestQuestion());
        document.getElementById('prevQuestion').addEventListener('click', () => this.previousTestQuestion());
        document.getElementById('flagQuestion').addEventListener('click', () => this.flagQuestion());
        document.getElementById('retakeTestBtn').addEventListener('click', () => this.retakeTest());

        // Category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => this.browseCategory(e.currentTarget.dataset.category));
        });

        // Notes functionality
        document.getElementById('addNoteBtn').addEventListener('click', () => this.showNoteModal());
        document.getElementById('saveNoteBtn').addEventListener('click', () => this.saveNote());
        document.getElementById('cancelNoteBtn').addEventListener('click', () => this.hideNoteModal());
        document.getElementById('closeNoteModal').addEventListener('click', () => this.hideNoteModal());

        // Settings functionality
        document.getElementById('settingsBtn').addEventListener('click', () => this.showSettingsModal());
        document.getElementById('closeSettingsModal').addEventListener('click', () => this.hideSettingsModal());
        document.getElementById('cancelSettingsBtn').addEventListener('click', () => this.hideSettingsModal());
        document.getElementById('saveSettingsBtn').addEventListener('click', () => this.saveSettings());
        
        // Settings tabs
        document.querySelectorAll('.settings-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchSettingsTab(e.target.dataset.tab));
        });

        // Settings controls
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());
        document.getElementById('importDataBtn').addEventListener('click', () => this.importData());
        document.getElementById('importDataFile').addEventListener('change', (e) => this.handleImportFile(e));
        document.getElementById('resetAllDataBtn').addEventListener('click', () => this.resetAllData());

        // Content loading functionality
        document.getElementById('loadContentBtn').addEventListener('click', () => this.showContentModal());
        document.getElementById('closeContentModal').addEventListener('click', () => this.hideContentModal());
        document.getElementById('cancelContentBtn').addEventListener('click', () => this.hideContentModal());
        
        // Individual content file loaders
        document.querySelectorAll('.load-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.loadContentFromFile(e.target.dataset.file, e.target.dataset.path));
        });

        // Modal backdrop click
        document.getElementById('noteModal').addEventListener('click', (e) => {
            if (e.target.id === 'noteModal') this.hideNoteModal();
        });
        document.getElementById('settingsModal').addEventListener('click', (e) => {
            if (e.target.id === 'settingsModal') this.hideSettingsModal();
        });
        document.getElementById('contentModal').addEventListener('click', (e) => {
            if (e.target.id === 'contentModal') this.hideContentModal();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        
        // Handle page visibility changes to prevent chart issues
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Page is hidden, clear any pending chart updates
                if (this.chartUpdateTimeout) {
                    clearTimeout(this.chartUpdateTimeout);
                    this.chartUpdateTimeout = null;
                }
            } else if (this.currentTab === 'statistics') {
                // Page is visible and we're on statistics tab, refresh charts
                setTimeout(() => this.updateCharts(), 100);
            }
        });
    }

    switchTab(tabName) {
        console.log('🔄 Switching to tab:', tabName);
        
        // Save current study session if leaving flashcards tab
        if (this.currentTab === 'flashcards' && tabName !== 'flashcards' && this.studySession.cardsStudied.size > 0) {
            this.saveFlashcardSession();
        }
        
        // Clear any pending chart updates
        if (this.chartUpdateTimeout) {
            clearTimeout(this.chartUpdateTimeout);
            this.chartUpdateTimeout = null;
        }
        
        this.currentTab = tabName;
        
        // Remove active class from all tabs and content
        document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        const tabButton = document.querySelector(`[data-tab="${tabName}"]`);
        const tabContent = document.getElementById(tabName);
        
        if (!tabButton) {
            console.error(`Tab button not found for: ${tabName}`);
            return;
        }
        
        if (!tabContent) {
            console.error(`Tab content not found for: ${tabName}`);
            return;
        }
        
        tabButton.classList.add('active');
        tabContent.classList.add('active');

        // Refresh charts if statistics tab is selected
        if (tabName === 'statistics') {
            console.log('📊 Switching to statistics tab, setting up charts...');
            // Give the tab time to become visible before creating charts
            setTimeout(() => {
                this.updateCharts();
            }, 300);
        }
    }

    showTab(tabName) {
        this.switchTab(tabName);
    }

    loadFlashcards() {
        console.log('📇 Loading flashcards...');
        console.log('📊 studyData.flashcards length before copy:', studyData?.flashcards?.length || 'undefined');
        
        // Debug: Check for property-offenses flashcards
        if (studyData && studyData.flashcards) {
            const propertyFlashcards = studyData.flashcards.filter(card => 
                card.mainCategory === 'property-offenses' || 
                card.id?.toString().startsWith('po-flash')
            );
            console.log('📊 Property & Trespassing Offenses flashcards found:', propertyFlashcards.length);
            if (propertyFlashcards.length > 0) {
                console.log('📊 Sample property flashcard:', propertyFlashcards[0]);
            }
        }
        
        this.filteredFlashcards = [...studyData.flashcards];
        
        console.log('📊 filteredFlashcards length after copy:', this.filteredFlashcards.length);
        
        this.studySession.startTime = Date.now();
        
        // Initialize category filters
        this.updateSubCategories();
    }

    applyFilters() {
        const mainCategory = document.getElementById('mainCategorySelect')?.value || 'all';
        const category = document.getElementById('categorySelect')?.value || 'all';
        const difficulty = document.getElementById('difficultySelect')?.value || 'all';

        if (!studyData || !studyData.flashcards) {
            console.warn('StudyData not available for filtering');
            this.filteredFlashcards = [];
            this.updateFlashcardDisplay();
            this.updateFilterStatus();
            return;
        }

        this.filteredFlashcards = studyData.flashcards.filter(card => {
            // Check main category match
            const mainCategoryMatch = mainCategory === 'all' || this.getMainCategoryForCard(card) === mainCategory;
            const categoryMatch = category === 'all' || card.category === category;
            const difficultyMatch = difficulty === 'all' || card.difficulty === difficulty;
            return mainCategoryMatch && categoryMatch && difficultyMatch;
        });

        this.currentFlashcard = 0;
        this.updateFlashcardDisplay();
        this.updateFilterStatus();
    }

    updateFilterStatus() {
        const statusElement = document.getElementById('filterStatus');
        if (!statusElement) return;

        const total = studyData && studyData.flashcards ? studyData.flashcards.length : 0;
        const filtered = this.filteredFlashcards.length;
        
        if (filtered === total) {
            statusElement.textContent = `Showing all ${total} cards`;
            statusElement.style.background = 'rgba(40, 167, 69, 0.1)';
            statusElement.style.color = '#28a745';
        } else {
            statusElement.textContent = `Showing ${filtered} of ${total} cards`;
            statusElement.style.background = 'rgba(42, 82, 152, 0.1)';
            statusElement.style.color = '#2a5298';
        }
    }

    updateSubCategories() {
        const mainCategory = document.getElementById('mainCategorySelect').value;
        const categorySelect = document.getElementById('categorySelect');
        
        // Clear existing options
        categorySelect.innerHTML = '<option value="all">All Topics</option>';
        
        if (mainCategory === 'all') {
            // Show all categories from all main categories
            this.populateAllCategories(categorySelect);
        } else {
            // Show only categories from selected main category
            this.populateSubCategoriesForMain(categorySelect, mainCategory);
        }
        
        // Apply filters after updating categories
        this.applyFilters();
    }

    populatePracticeTestCategories() {
        const mainCategory = document.getElementById('testMainCategory').value;
        const categorySelect = document.getElementById('testCategory');
        
        // Clear existing options
        categorySelect.innerHTML = '<option value="all">All Focus Areas</option>';
        
        if (mainCategory === 'all') {
            // Show all categories from all main categories
            this.populateAllPracticeTestCategories(categorySelect);
        } else {
            // Show only categories from selected main category
            this.populatePracticeTestSubCategoriesForMain(categorySelect, mainCategory);
        }
    }

    populateAllCategories(selectElement) {
        // Add all categories from studyData
        const allCategories = new Set();
        if (studyData && studyData.flashcards) {
            studyData.flashcards.forEach(card => {
                if (card.category && !allCategories.has(card.category)) {
                    allCategories.add(card.category);
                    const categoryName = studyData.categories && studyData.categories[card.category] 
                        ? studyData.categories[card.category].name 
                        : this.formatCategoryName(card.category);
                    const option = document.createElement('option');
                    option.value = card.category;
                    option.textContent = categoryName;
                    selectElement.appendChild(option);
                }
            });
        }
    }

    populateSubCategoriesForMain(selectElement, mainCategory) {
        // Use enhanced data structure if available
        if (typeof tcoleStudyData !== 'undefined' && 
            tcoleStudyData.mainCategories && 
            tcoleStudyData.mainCategories[mainCategory] &&
            tcoleStudyData.mainCategories[mainCategory].subCategories) {
            const subCategories = tcoleStudyData.mainCategories[mainCategory].subCategories;
            Object.keys(subCategories).forEach(key => {
                const subCategory = subCategories[key];
                const option = document.createElement('option');
                option.value = key;
                option.textContent = subCategory.name;
                selectElement.appendChild(option);
            });
        } else {
            // Filter categories to only show those that belong to the selected main category
            const categoriesForMainCategory = new Set();
            studyData.flashcards.forEach(card => {
                if (card.category && this.getMainCategoryForCard(card) === mainCategory) {
                    categoriesForMainCategory.add(card.category);
                }
            });
            
            // Add only the filtered categories
            categoriesForMainCategory.forEach(categoryKey => {
                const categoryName = studyData.categories[categoryKey]?.name || this.formatCategoryName(categoryKey);
                const option = document.createElement('option');
                option.value = categoryKey;
                option.textContent = categoryName;
                selectElement.appendChild(option);
            });
        }
    }

    populateAllPracticeTestCategories(selectElement) {
        // Add all categories from practice test data
        const allCategories = new Set();
        if (studyData && studyData.practiceQuestions) {
            studyData.practiceQuestions.forEach(question => {
                if (question.category && !allCategories.has(question.category)) {
                    allCategories.add(question.category);
                    const categoryName = studyData.categories && studyData.categories[question.category]
                        ? studyData.categories[question.category].name
                        : this.formatCategoryName(question.category);
                    const option = document.createElement('option');
                    option.value = question.category;
                    option.textContent = categoryName;
                    selectElement.appendChild(option);
                }
            });
        }
    }

    populatePracticeTestSubCategoriesForMain(selectElement, mainCategory) {
        // Filter categories to only show those that belong to the selected main category
        const categoriesForMainCategory = new Set();
        if (studyData && studyData.practiceQuestions) {
            studyData.practiceQuestions.forEach(question => {
                if (question.category && this.getMainCategoryForQuestion(question) === mainCategory) {
                    categoriesForMainCategory.add(question.category);
                }
            });
        }
        
        // Add only the filtered categories
        categoriesForMainCategory.forEach(categoryKey => {
            const categoryName = studyData.categories && studyData.categories[categoryKey]
                ? studyData.categories[categoryKey].name
                : this.formatCategoryName(categoryKey);
            const option = document.createElement('option');
            option.value = categoryKey;
            option.textContent = categoryName;
            selectElement.appendChild(option);
        });
    }

    applyTestFilters() {
        // This method can be used to apply additional filtering logic for practice tests
        // For now, it doesn't need to do anything specific since the test setup
        // already handles filtering when starting a test, but we need this method
        // to exist so the event listener doesn't throw an error
        console.log('Test filters applied - categories updated');
        
        // Optionally, you could add logic here to update UI indicators
        // showing how many questions are available with current filters
        const testMainCategory = document.getElementById('testMainCategory')?.value || 'all';
        const testCategory = document.getElementById('testCategory')?.value || 'all';
        
        // Count available questions based on current filters
        let availableQuestions = studyData?.practiceQuestions || [];
        
        if (testMainCategory !== 'all') {
            availableQuestions = availableQuestions.filter(q => 
                this.getMainCategoryForQuestion(q) === testMainCategory
            );
        }
        
        if (testCategory !== 'all') {
            availableQuestions = availableQuestions.filter(q => 
                q.category === testCategory
            );
        }
        
        // Update UI to show available question count
        const testLengthSelect = document.getElementById('testLength');
        if (testLengthSelect && availableQuestions.length > 0) {
            // Update max value of test length based on available questions
            const maxQuestions = Math.min(50, availableQuestions.length);
            const currentValue = parseInt(testLengthSelect.value);
            
            // Clear existing options
            testLengthSelect.innerHTML = '';
            
            // Add new options up to available questions
            const lengths = [5, 10, 15, 20, 25, 30, 40, 50].filter(len => len <= maxQuestions);
            lengths.forEach(length => {
                const option = document.createElement('option');
                option.value = length;
                option.textContent = `${length} Questions`;
                testLengthSelect.appendChild(option);
            });
            
            // Restore previous value if still valid, otherwise select the closest
            if (currentValue <= maxQuestions) {
                testLengthSelect.value = currentValue;
            } else {
                testLengthSelect.value = lengths[lengths.length - 1];
            }
        }
        
        // Update status indicator if it exists
        const statusElement = document.getElementById('testFilterStatus');
        if (statusElement) {
            statusElement.textContent = `${availableQuestions.length} questions available`;
        }
    }

    getMainCategoryForCard(card) {
        // First check if card has a direct mainCategory field
        if (card.mainCategory) {
            return card.mainCategory;
        }
        
        // Map card categories to main categories
        const categoryMapping = {
            // Penal Code categories
            'penal-code': 'penal-code',
            'assault-offenses': 'penal-code',
            'theft-offenses': 'penal-code',
            'animal-cruelty': 'penal-code',
            'property-crimes': 'penal-code',
            'firearms-laws': 'penal-code',
            'criminal-types': 'penal-code',
            'drug-offenses': 'penal-code',
            'dwi-offenses': 'penal-code',
            
            // Property & Trespassing Offenses categories
            'criminal-types': 'property-offenses',
            'property-definitions': 'property-offenses',
            'pecuniary-loss': 'property-offenses',
            'offense-levels': 'property-offenses',
            'criminal-mischief': 'property-offenses',
            'graffiti': 'property-offenses',
            'reckless-damage': 'property-offenses',
            'railroad-property': 'property-offenses',
            'arson': 'property-offenses',
            'animal-cruelty': 'property-offenses',
            'police-service-animals': 'property-offenses',
            'property-scenarios': 'property-offenses',
            'property-damage': 'property-offenses',
            
            // Criminal Procedure categories
            'search-seizure': 'criminal-procedure',
            'arrest-procedures': 'criminal-procedure',
            'evidence-rules': 'criminal-procedure',
            'vehicle-traffic-stops': 'criminal-procedure',
            // Field Operations categories
            'community-policing': 'field-operations',
            'field-interviews': 'field-operations',
            'constitutional-procedures': 'field-operations',
            'decision-making': 'field-operations',
            'exigent-circumstances': 'field-operations',
            // Weapons Offenses categories
            'weapon-definitions': 'weapons-offenses',
            'unlawful-carrying': 'weapons-offenses',
            'prohibited-places': 'weapons-offenses',
            'unlawful-possession': 'weapons-offenses',
            'exemptions-defenses': 'weapons-offenses',
            // General Topics categories
            'report-writing': 'general-topics',
            'patrol-procedures': 'general-topics',
            'ethics-professionalism': 'general-topics'
        };
        
        return categoryMapping[card.category] || 'transportation-code';
    }

    getMainCategoryForQuestion(question) {
        // First check if question has a direct mainCategory field
        if (question.mainCategory) {
            return question.mainCategory;
        }
        
        // Map question categories to main categories (same mapping as cards)
        const categoryMapping = {
            // Penal Code categories
            'penal-code': 'penal-code',
            'assault-offenses': 'penal-code',
            'theft-offenses': 'penal-code',
            'animal-cruelty': 'penal-code',
            'property-crimes': 'penal-code',
            'firearms-laws': 'penal-code',
            'criminal-types': 'penal-code',
            'drug-offenses': 'penal-code',
            'dwi-offenses': 'penal-code',
            'public-order': 'penal-code',
            'weapons-laws': 'penal-code',
            'family-violence': 'penal-code',
            'fraud-offenses': 'penal-code',
            'juvenile-law': 'penal-code',
            'public-intoxication': 'penal-code',
            'disorderly-conduct': 'penal-code',
            'gambling': 'penal-code',
            'harassment': 'penal-code',
            'obstruction': 'penal-code',
            'perjury': 'penal-code',
            'prostitution': 'penal-code',
            'robbery': 'penal-code',
            'sexual-offenses': 'penal-code',
            'terroristic-threat': 'penal-code',
            'trespass': 'penal-code',
            
            // Property & Trespassing Offenses categories
            'criminal-types': 'property-offenses',
            'property-definitions': 'property-offenses',
            'pecuniary-loss': 'property-offenses',
            'offense-levels': 'property-offenses',
            'criminal-mischief': 'property-offenses',
            'graffiti': 'property-offenses',
            'reckless-damage': 'property-offenses',
            'railroad-property': 'property-offenses',
            'arson': 'property-offenses',
            'animal-cruelty': 'property-offenses',
            'police-service-animals': 'property-offenses',
            'property-scenarios': 'property-offenses',
            'property-damage': 'property-offenses',
            
            // Criminal Procedure categories
            'arrest-procedures': 'criminal-procedure',
            'search-seizure': 'criminal-procedure',
            'miranda-rights': 'criminal-procedure',
            'evidence-handling': 'criminal-procedure',
            'court-procedures': 'criminal-procedure',
            'warrants': 'criminal-procedure',
            'interrogation': 'criminal-procedure',
            'chain-of-custody': 'criminal-procedure',
            'booking-procedures': 'criminal-procedure',
            'constitutional-law': 'criminal-procedure',
            'due-process': 'criminal-procedure',
            'identification-procedures': 'criminal-procedure',
            'crime-scene': 'criminal-procedure',
            'witness-interviews': 'criminal-procedure',
            'vehicle-traffic-stops': 'criminal-procedure',
            
            // Field Operations categories
            'community-policing': 'field-operations',
            'field-interviews': 'field-operations',
            'constitutional-procedures': 'field-operations',
            'decision-making': 'field-operations',
            'exigent-circumstances': 'field-operations',
            
            // Weapons Offenses categories
            'weapon-definitions': 'weapons-offenses',
            'unlawful-carrying': 'weapons-offenses',
            'prohibited-places': 'weapons-offenses',
            'unlawful-possession': 'weapons-offenses',
            'exemptions-defenses': 'weapons-offenses',
            
            // Vehicle/Traffic Stops categories
            'traffic-enforcement': 'vehicle-traffic-stops',
            'vehicle-codes': 'vehicle-traffic-stops',
            'traffic-stops': 'vehicle-traffic-stops',
            'vehicle-searches': 'vehicle-traffic-stops',
            'dwi-detection': 'vehicle-traffic-stops',
            'citation-procedures': 'vehicle-traffic-stops',
            'vehicle-impound': 'vehicle-traffic-stops',
            'license-violations': 'vehicle-traffic-stops',
            'commercial-vehicles': 'vehicle-traffic-stops',
            'accident-investigation': 'vehicle-traffic-stops',
            'pursuit-policies': 'vehicle-traffic-stops',
            'vehicle-registration': 'vehicle-traffic-stops',
            'roadside-safety': 'vehicle-traffic-stops',
            
            // Transportation Code categories
            'warning-devices': 'transportation-code',
            'registration': 'transportation-code',
            'license-plates': 'transportation-code',
            'vehicle-definitions': 'transportation-code',
            'traffic-control': 'transportation-code',
            'traffic-violations': 'transportation-code',
            'speed-limits': 'transportation-code',
            'parking-violations': 'transportation-code',
            'vehicle-equipment': 'transportation-code',
            'driver-license': 'transportation-code',
            'vehicle-inspection': 'transportation-code',
            'safety-requirements': 'transportation-code',
            'motor-vehicle-laws': 'transportation-code',
            'vehicle-size-weight': 'transportation-code',
            'hazmat-transport': 'transportation-code',
            'toll-roads': 'transportation-code',
            'school-buses': 'transportation-code',
            'emergency-vehicles': 'transportation-code',
            'motorcycles': 'transportation-code',
            'pedestrian-laws': 'transportation-code',
            'bicycle-laws': 'transportation-code',
            'railroad-crossings': 'transportation-code',
            'work-zones': 'transportation-code',
            'vehicle-titling': 'transportation-code',
            'dealer-regulations': 'transportation-code',
            
            // General Topics categories
            'report-writing': 'general-topics',
            'community-policing': 'general-topics',
            'ethics': 'general-topics',
            'use-of-force': 'general-topics',
            'emergency-response': 'general-topics',
            'radio-communications': 'general-topics',
            'patrol-procedures': 'general-topics',
            'officer-safety': 'general-topics',
            'cultural-diversity': 'general-topics',
            'mental-health': 'general-topics',
            'domestic-violence': 'general-topics',
            'crisis-intervention': 'general-topics',
            'firearms-training': 'general-topics',
            'physical-fitness': 'general-topics',
            'legal-updates': 'general-topics',
            'technology': 'general-topics',
            'leadership': 'general-topics',
            'stress-management': 'general-topics'
        };
        
        return categoryMapping[question.category] || 'transportation-code';
    }

    formatCategoryName(categoryKey) {
        return categoryKey
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    startStudySession() {
        this.studySession.startTime = new Date();
        this.studySession.cardsStudied.clear();
        this.updateFlashcardDisplay();
        document.getElementById('startStudyBtn').textContent = 'Continue Studying';
    }

    updateFlashcardDisplay() {
        if (this.filteredFlashcards.length === 0) {
            this.showNoCardsMessage();
            return;
        }

        const card = this.filteredFlashcards[this.currentFlashcard];
        const category = studyData.categories && studyData.categories[card.category] 
            ? studyData.categories[card.category] 
            : { name: this.formatCategoryName(card.category) };

        // Update card content
        document.getElementById('questionText').textContent = card.question;
        document.getElementById('answerText').textContent = card.answer;
        
        // Update card header info
        const cardNumber = `${this.currentFlashcard + 1} / ${this.filteredFlashcards.length}`;
        document.getElementById('cardNumber').textContent = cardNumber;
        document.getElementById('cardNumberBack').textContent = cardNumber;
        document.getElementById('cardCategory').textContent = category.name;
        document.getElementById('cardCategoryBack').textContent = category.name;

        // Update navigation buttons
        document.getElementById('prevCard').disabled = this.currentFlashcard === 0;
        document.getElementById('nextCard').disabled = this.currentFlashcard === this.filteredFlashcards.length - 1;

        // Reset card flip
        document.getElementById('currentFlashcard').classList.remove('flipped');

        // Update progress
        this.updateStudyProgress();
    }

    showNoCardsMessage() {
        document.getElementById('questionText').textContent = 'No flashcards match your current filters. Try adjusting the category or difficulty settings.';
        document.getElementById('answerText').textContent = 'Adjust your filters to see more cards.';
        document.getElementById('cardNumber').textContent = '0 / 0';
        document.getElementById('cardNumberBack').textContent = '0 / 0';
    }

    flipCard() {
        const card = document.getElementById('currentFlashcard');
        card.classList.toggle('flipped');
    }

    nextCard() {
        if (this.currentFlashcard < this.filteredFlashcards.length - 1) {
            this.currentFlashcard++;
            this.updateFlashcardDisplay();
            this.markCardAsStudied();
        }
    }

    previousCard() {
        if (this.currentFlashcard > 0) {
            this.currentFlashcard--;
            this.updateFlashcardDisplay();
        }
    }

    markDifficulty(difficulty) {
        const cardId = this.filteredFlashcards[this.currentFlashcard].id;
        this.studySession.difficulty[cardId] = difficulty;
        this.markCardAsStudied();
        
        // Visual feedback
        const button = document.getElementById(`${difficulty}Btn`);
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = '', 150);

        // Auto-advance to next card
        setTimeout(() => {
            if (this.currentFlashcard < this.filteredFlashcards.length - 1) {
                this.nextCard();
            }
        }, 500);
    }

    markCardAsStudied() {
        const cardId = this.filteredFlashcards[this.currentFlashcard].id;
        this.studySession.cardsStudied.add(cardId);
        
        // Update global statistics
        this.statistics.cardsStudied = (this.statistics.cardsStudied || 0) + 1;
        this.saveToLocalStorage('transportationStats', this.statistics);
        
        this.updateStudyProgress();
        this.updateStatistics();
    }

    updateStudyProgress() {
        const progress = (this.studySession.cardsStudied.size / this.filteredFlashcards.length) * 100;
        document.getElementById('studyProgress').style.width = `${progress}%`;
        document.getElementById('studyProgressText').textContent = `${Math.round(progress)}%`;
    }

    shuffleCards() {
        for (let i = this.filteredFlashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.filteredFlashcards[i], this.filteredFlashcards[j]] = [this.filteredFlashcards[j], this.filteredFlashcards[i]];
        }
        this.currentFlashcard = 0;
        this.updateFlashcardDisplay();
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset your study progress? This will clear all difficulty markings for this session.')) {
            this.studySession.cardsStudied.clear();
            this.studySession.difficulty = {};
            this.currentFlashcard = 0;
            this.updateFlashcardDisplay();
        }
    }

    // Utility function to shuffle an array using Fisher-Yates algorithm
    shuffleArray(array) {
        const shuffled = [...array]; // Create a copy to avoid mutating original
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Practice Test Methods
    startPracticeTest() {
        const testLength = parseInt(document.getElementById('testLength').value);
        const testMainCategory = document.getElementById('testMainCategory').value;
        const testCategory = document.getElementById('testCategory').value;
        const testMode = document.getElementById('testMode').value;

        // Filter questions based on main category and specific category
        let availableQuestions = [...studyData.practiceQuestions];
        
        // Filter by main category first
        if (testMainCategory !== 'all') {
            availableQuestions = availableQuestions.filter(q => {
                const questionMainCategory = this.getMainCategoryForQuestion(q);
                return questionMainCategory === testMainCategory;
            });
            console.log(`Filtered by main category '${testMainCategory}': ${availableQuestions.length} questions found`);
        }
        
        // Then filter by specific category
        if (testCategory !== 'all') {
            availableQuestions = availableQuestions.filter(q => q.category === testCategory);
        }

        // Check if questions are available
        if (availableQuestions.length === 0) {
            alert('No questions available for the selected categories. Please adjust your filters and try again.');
            return;
        }

        // Ensure we don't request more questions than available
        const actualTestLength = Math.min(testLength, availableQuestions.length);

        // Shuffle and select questions
        this.practiceTest.questions = this.shuffleArray(availableQuestions).slice(0, actualTestLength);
        this.practiceTest.currentQuestion = 0;
        this.practiceTest.answers = {};
        this.practiceTest.startTime = new Date();
        this.practiceTest.mode = testMode;
        this.practiceTest.flagged.clear();

        // Show test interface
        document.getElementById('testSetup').style.display = 'none';
        document.getElementById('testInterface').style.display = 'block';
        document.getElementById('testResults').style.display = 'none';

        this.updateTestQuestion();
        this.startTestTimer();
    }

    updateTestQuestion() {
        // Check if we have questions available
        if (!this.practiceTest.questions || this.practiceTest.questions.length === 0) {
            console.error('No questions available in practice test');
            this.returnToTestSetup();
            return;
        }

        // Check if current question index is valid
        if (this.practiceTest.currentQuestion >= this.practiceTest.questions.length) {
            console.error('Current question index out of bounds');
            this.returnToTestSetup();
            return;
        }

        const question = this.practiceTest.questions[this.practiceTest.currentQuestion];
        const questionNum = this.practiceTest.currentQuestion + 1;
        const totalQuestions = this.practiceTest.questions.length;

        document.getElementById('currentQuestion').textContent = `Question ${questionNum}`;
        document.getElementById('totalQuestions').textContent = totalQuestions;
        document.getElementById('testQuestionText').textContent = question.question;

        // Update progress bar
        const progress = (questionNum / totalQuestions) * 100;
        document.getElementById('testProgressFill').style.width = `${progress}%`;

        // Generate answer options
        this.generateAnswerOptions(question);

        // Update navigation buttons
        document.getElementById('prevQuestion').disabled = this.practiceTest.currentQuestion === 0;
        const nextBtn = document.getElementById('nextQuestion');
        if (this.practiceTest.currentQuestion === this.practiceTest.questions.length - 1) {
            nextBtn.textContent = 'Finish Test';
        } else {
            nextBtn.textContent = 'Next';
        }

        // Update flag button
        const flagBtn = document.getElementById('flagQuestion');
        flagBtn.classList.toggle('flagged', this.practiceTest.flagged.has(this.practiceTest.currentQuestion));
    }

    generateAnswerOptions(question) {
        const container = document.getElementById('answersContainer');
        container.innerHTML = '';

        const currentQuestionIndex = this.practiceTest.currentQuestion;
        const isAnswered = this.practiceTest.answers.hasOwnProperty(currentQuestionIndex);

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.dataset.index = index;
            
            optionDiv.innerHTML = `
                <input type="radio" name="answer" value="${index}" id="option${index}">
                <label for="option${index}">${String.fromCharCode(65 + index)}. ${option}</label>
            `;

            // Add click event listener only if not answered or in exam mode
            if (!isAnswered || this.practiceTest.mode === 'exam') {
                optionDiv.addEventListener('click', () => this.selectAnswer(index));
            } else {
                // Already answered in practice mode - disable interaction
                optionDiv.style.pointerEvents = 'none';
                optionDiv.classList.add('disabled');
            }
            
            // Restore previous answer if exists
            if (this.practiceTest.answers[currentQuestionIndex] === index) {
                optionDiv.classList.add('selected');
                optionDiv.querySelector('input').checked = true;
                
                // If in practice mode and answered, show the feedback
                if (this.practiceTest.mode === 'practice' && isAnswered) {
                    // Mark correct/incorrect answers
                    if (index === question.correct) {
                        optionDiv.classList.add('correct');
                    } else {
                        optionDiv.classList.add('incorrect');
                    }
                }
            } else if (this.practiceTest.mode === 'practice' && isAnswered && index === question.correct) {
                // Show correct answer even if not selected
                optionDiv.classList.add('correct');
            }

            container.appendChild(optionDiv);
        });

        // Show explanation if question was answered in practice mode
        if (this.practiceTest.mode === 'practice' && isAnswered && question.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation';
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            container.appendChild(explanationDiv);
        }
    }

    selectAnswer(answerIndex) {
        // Check if already answered in practice mode
        const currentAnswered = this.practiceTest.answers.hasOwnProperty(this.practiceTest.currentQuestion);
        
        if (this.practiceTest.mode === 'practice' && currentAnswered) {
            // In practice mode, don't allow re-selection after feedback is shown
            return;
        }

        // Clear previous selections
        document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
        
        // Mark selected answer
        const selectedOption = document.querySelector(`[data-index="${answerIndex}"]`);
        selectedOption.classList.add('selected');
        selectedOption.querySelector('input').checked = true;

        // Store answer
        this.practiceTest.answers[this.practiceTest.currentQuestion] = answerIndex;

        // Show immediate feedback in practice mode
        if (this.practiceTest.mode === 'practice') {
            this.showAnswerFeedback();
            this.disableAnswerOptions();
        }
    }

    disableAnswerOptions() {
        // Remove click event listeners and add disabled class
        document.querySelectorAll('.answer-option').forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.classList.add('disabled');
        });
    }

    showAnswerFeedback() {
        const question = this.practiceTest.questions[this.practiceTest.currentQuestion];
        const userAnswer = this.practiceTest.answers[this.practiceTest.currentQuestion];

        // Remove any existing explanation first
        const existingExplanation = document.querySelector('.explanation');
        if (existingExplanation) {
            existingExplanation.remove();
        }

        document.querySelectorAll('.answer-option').forEach((opt, index) => {
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === userAnswer && index !== question.correct) {
                opt.classList.add('incorrect');
            }
        });

        // Show explanation
        if (question.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation';
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            document.getElementById('answersContainer').appendChild(explanationDiv);
        }
    }

    nextTestQuestion() {
        if (this.practiceTest.currentQuestion === this.practiceTest.questions.length - 1) {
            this.finishTest();
        } else {
            this.practiceTest.currentQuestion++;
            this.updateTestQuestion();
        }
    }

    previousTestQuestion() {
        if (this.practiceTest.currentQuestion > 0) {
            this.practiceTest.currentQuestion--;
            this.updateTestQuestion();
        }
    }

    flagQuestion() {
        const questionIndex = this.practiceTest.currentQuestion;
        if (this.practiceTest.flagged.has(questionIndex)) {
            this.practiceTest.flagged.delete(questionIndex);
        } else {
            this.practiceTest.flagged.add(questionIndex);
        }
        
        document.getElementById('flagQuestion').classList.toggle('flagged', this.practiceTest.flagged.has(questionIndex));
    }

    finishTest() {
        const endTime = new Date();
        const timeTaken = Math.floor((endTime - this.practiceTest.startTime) / 1000);
        
        // Clear the test timer
        if (this.testTimer) {
            clearInterval(this.testTimer);
            this.testTimer = null;
        }
        
        this.calculateTestResults(timeTaken);
        this.showTestResults();
        this.saveTestStatistics();
    }

    calculateTestResults(timeTaken) {
        let correctAnswers = 0;
        const results = [];

        this.practiceTest.questions.forEach((question, index) => {
            const userAnswer = this.practiceTest.answers[index];
            const isCorrect = userAnswer === question.correct;
            
            if (isCorrect) correctAnswers++;

            results.push({
                question: question.question,
                userAnswer: userAnswer !== undefined ? question.options[userAnswer] : 'Not answered',
                correctAnswer: question.options[question.correct],
                isCorrect: isCorrect,
                category: question.category,
                explanation: question.explanation
            });
        });

        this.practiceTest.results = {
            correct: correctAnswers,
            total: this.practiceTest.questions.length,
            percentage: Math.round((correctAnswers / this.practiceTest.questions.length) * 100),
            timeTaken: timeTaken,
            details: results
        };
    }

    showTestResults() {
        const results = this.practiceTest.results;
        
        document.getElementById('testInterface').style.display = 'none';
        document.getElementById('testResults').style.display = 'block';

        // Animate the results display
        setTimeout(() => {
            this.animateTestResults(results);
        }, 300);

        // Update basic results
        document.getElementById('correctAnswers').textContent = results.correct;
        document.getElementById('totalAnswers').textContent = results.total;
        document.getElementById('timeTaken').textContent = this.formatTime(results.timeTaken);

        // Update performance level and styling
        this.updatePerformanceLevel(results.percentage);
        
        // Generate smart insights
        this.generateTestInsights(results);
        
        // Setup additional event listeners for new buttons
        this.setupResultsEventListeners();

        this.generateResultsBreakdown();
    }

    animateTestResults(results) {
        const scoreCircle = document.querySelector('.score-circle');
        const scorePercentage = document.getElementById('scorePercentage');
        const progressRing = document.querySelector('.progress-ring-circle');
        
        // Animate score circle
        let currentScore = 0;
        const targetScore = results.percentage;
        const increment = targetScore / 30; // 30 frames for smooth animation
        
        // Calculate circle circumference for progress ring
        const radius = progressRing.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;
        
        const animateScore = () => {
            if (currentScore < targetScore) {
                currentScore = Math.min(currentScore + increment, targetScore);
                scorePercentage.textContent = `${Math.round(currentScore)}%`;
                
                // Update progress ring
                const offset = circumference - (currentScore / 100) * circumference;
                progressRing.style.strokeDashoffset = offset;
                
                requestAnimationFrame(animateScore);
            }
        };
        
        // Start animation after a brief delay
        setTimeout(() => {
            animateScore();
        }, 500);

        // Update score circle color based on performance
        if (results.percentage >= 80) {
            scoreCircle.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
            progressRing.style.stroke = '#28a745';
        } else if (results.percentage >= 70) {
            scoreCircle.style.background = 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)';
            progressRing.style.stroke = '#ffc107';
        } else {
            scoreCircle.style.background = 'linear-gradient(135deg, #dc3545 0%, #e74c3c 100%)';
            progressRing.style.stroke = '#dc3545';
        }

        // Animate detail cards with staggered timing
        const detailCards = document.querySelectorAll('.detail-card');
        detailCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, 200 + (index * 150));
        });

        // Animate insights cards
        const insightCards = document.querySelectorAll('.insight-card');
        insightCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, 800 + (index * 200));
        });
    }

    updatePerformanceLevel(percentage) {
        const performanceCard = document.getElementById('performanceCard');
        const performanceLevel = document.getElementById('performanceLevel');
        const performanceIcon = performanceCard.querySelector('.detail-icon i');
        
        if (percentage >= 90) {
            performanceLevel.textContent = 'Outstanding';
            performanceIcon.className = 'fas fa-crown';
            performanceCard.classList.add('outstanding');
        } else if (percentage >= 80) {
            performanceLevel.textContent = 'Excellent';
            performanceIcon.className = 'fas fa-trophy';
            performanceCard.classList.add('excellent');
        } else if (percentage >= 70) {
            performanceLevel.textContent = 'Good';
            performanceIcon.className = 'fas fa-thumbs-up';
            performanceCard.classList.add('good');
        } else if (percentage >= 60) {
            performanceLevel.textContent = 'Fair';
            performanceIcon.className = 'fas fa-hand-paper';
            performanceCard.classList.add('fair');
        } else {
            performanceLevel.textContent = 'Needs Work';
            performanceIcon.className = 'fas fa-book-reader';
            performanceCard.classList.add('needs-work');
        }
    }

    generateTestInsights(results) {
        // Analyze performance by category
        const categoryPerformance = this.analyzeCategoryPerformance(results.details);
        
        // Find strongest area
        const strongest = Object.entries(categoryPerformance)
            .sort(([,a], [,b]) => b.percentage - a.percentage)[0];
        
        // Find weakest area  
        const weakest = Object.entries(categoryPerformance)
            .sort(([,a], [,b]) => a.percentage - b.percentage)[0];
        
        // Update insights
        document.getElementById('strongestArea').textContent = 
            strongest ? `${studyData.categories[strongest[0]]?.name || 'General'} (${strongest[1].percentage}%)` : 'All areas equal';
        
        document.getElementById('improvementArea').textContent = 
            weakest && weakest[1].percentage < 80 ? `${studyData.categories[weakest[0]]?.name || 'General'} (${weakest[1].percentage}%)` : 'Well balanced performance';
        
        // Generate study recommendation
        const recommendation = this.generateStudyRecommendation(results.percentage, weakest);
        document.getElementById('studyRecommendation').textContent = recommendation;
    }

    analyzeCategoryPerformance(details) {
        const categoryStats = {};
        
        details.forEach(detail => {
            const categoryKey = this.getQuestionCategory(detail);
            if (!categoryStats[categoryKey]) {
                categoryStats[categoryKey] = { correct: 0, total: 0, percentage: 0 };
            }
            
            categoryStats[categoryKey].total++;
            if (detail.isCorrect) {
                categoryStats[categoryKey].correct++;
            }
        });
        
        // Calculate percentages
        Object.keys(categoryStats).forEach(key => {
            const stats = categoryStats[key];
            stats.percentage = Math.round((stats.correct / stats.total) * 100);
        });
        
        return categoryStats;
    }

    generateStudyRecommendation(overallPercentage, weakestArea) {
        if (overallPercentage >= 90) {
            return 'Excellent work! Consider taking advanced practice tests.';
        } else if (overallPercentage >= 80) {
            return 'Great job! Review a few more questions to perfect your knowledge.';
        } else if (overallPercentage >= 70) {
            return `Good progress! Focus on ${weakestArea ? studyData.categories[weakestArea[0]]?.name : 'weak areas'} for improvement.`;
        } else if (overallPercentage >= 60) {
            return `Study more flashcards, especially ${weakestArea ? studyData.categories[weakestArea[0]]?.name : 'challenging topics'}.`;
        } else {
            return 'Spend more time studying fundamentals before retaking the test.';
        }
    }

    setupResultsEventListeners() {
        // Study weak areas button
        const studyWeakBtn = document.getElementById('studyWeakAreasBtn');
        if (studyWeakBtn && !studyWeakBtn.hasAttribute('data-listener')) {
            studyWeakBtn.setAttribute('data-listener', 'true');
            studyWeakBtn.addEventListener('click', () => this.studyWeakAreas());
        }

        // New test button
        const newTestBtn = document.getElementById('takeNewTestBtn');
        if (newTestBtn && !newTestBtn.hasAttribute('data-listener')) {
            newTestBtn.setAttribute('data-listener', 'true');
            newTestBtn.addEventListener('click', () => this.startNewTest());
        }

        // View statistics button
        const viewStatsBtn = document.getElementById('viewStatsBtn');
        if (viewStatsBtn && !viewStatsBtn.hasAttribute('data-listener')) {
            viewStatsBtn.setAttribute('data-listener', 'true');
            viewStatsBtn.addEventListener('click', () => this.showTab('statistics'));
        }

        // Review mistakes button (update existing)
        const reviewBtn = document.getElementById('reviewMistakesBtn');
        if (reviewBtn && !reviewBtn.hasAttribute('data-listener')) {
            reviewBtn.setAttribute('data-listener', 'true');
            reviewBtn.addEventListener('click', () => this.reviewAllQuestions());
        }
    }

    studyWeakAreas() {
        // Find categories with < 80% performance
        const categoryPerformance = this.analyzeCategoryPerformance(this.practiceTest.results.details);
        const weakCategories = Object.entries(categoryPerformance)
            .filter(([, stats]) => stats.percentage < 80)
            .map(([key]) => key);

        if (weakCategories.length > 0) {
            // Switch to flashcards and filter by weakest category
            this.showTab('flashcards');
            const categorySelect = document.getElementById('categorySelect');
            if (categorySelect) {
                categorySelect.value = weakCategories[0];
                this.applyFilters();
            }
        } else {
            // Study all if no weak areas
            this.showTab('flashcards');
        }
    }

    startNewTest() {
        this.retakeTest();
    }

    reviewAllQuestions() {
        // Scroll to the results breakdown section
        const breakdown = document.getElementById('resultsBreakdown');
        if (breakdown) {
            breakdown.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    generateResultsBreakdown() {
        const container = document.getElementById('resultsBreakdown');
        const results = this.practiceTest.results;
        
        // Create enhanced header with summary
        const correctCount = results.details.filter(r => r.isCorrect).length;
        const incorrectCount = results.details.length - correctCount;
        const scorePercentage = Math.round((correctCount / results.details.length) * 100);
        
        container.innerHTML = `
            <div class="results-breakdown-header">
                <div class="header-content">
                    <div class="header-title">
                        <i class="fas fa-chart-line"></i>
                        <h3>Question Review & Analysis</h3>
                    </div>
                    <div class="header-score">
                        <div class="score-circle-mini ${scorePercentage >= 80 ? 'excellent' : scorePercentage >= 70 ? 'good' : 'needs-improvement'}">
                            <span class="score-text">${scorePercentage}%</span>
                        </div>
                    </div>
                </div>
                <div class="results-summary-badges">
                    <div class="badge-group">
                        <span class="summary-badge correct">
                            <i class="fas fa-check-circle"></i>
                            <div class="badge-content">
                                <span class="badge-number">${correctCount}</span>
                                <span class="badge-label">Correct</span>
                            </div>
                        </span>
                        <span class="summary-badge incorrect">
                            <i class="fas fa-times-circle"></i>
                            <div class="badge-content">
                                <span class="badge-number">${incorrectCount}</span>
                                <span class="badge-label">Incorrect</span>
                            </div>
                        </span>
                        <span class="summary-badge total">
                            <i class="fas fa-list-ol"></i>
                            <div class="badge-content">
                                <span class="badge-number">${results.details.length}</span>
                                <span class="badge-label">Total</span>
                            </div>
                        </span>
                    </div>
                </div>
                ${incorrectCount > 0 ? `
                <div class="results-filter-controls">
                    <button class="filter-btn active" data-filter="all">
                        <i class="fas fa-list"></i> All Questions
                    </button>
                    <button class="filter-btn" data-filter="incorrect">
                        <i class="fas fa-times-circle"></i> Incorrect Only (${incorrectCount})
                    </button>
                    <button class="filter-btn" data-filter="correct">
                        <i class="fas fa-check-circle"></i> Correct Only (${correctCount})
                    </button>
                </div>
                ` : ''}
            </div>
            <div class="results-list">
            </div>
        `;

        const resultsList = container.querySelector('.results-list');
        
        // Add filter functionality
        const filterButtons = container.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterResults(btn.dataset.filter);
            });
        });

        this.practiceTest.results.details.forEach((result, index) => {
            const resultDiv = document.createElement('div');
            resultDiv.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
            resultDiv.dataset.filter = result.isCorrect ? 'correct' : 'incorrect';
            
            // Get category info for better display
            const categoryKey = this.getQuestionCategory(result);
            const category = studyData.categories[categoryKey] || { name: 'General', icon: 'fas fa-book', color: '#6c757d' };
            
            resultDiv.innerHTML = `
                <div class="result-card">
                    <div class="result-header">
                        <div class="result-meta">
                            <div class="question-number-wrapper">
                                <span class="question-number">Q${index + 1}</span>
                                <div class="result-status-icon ${result.isCorrect ? 'correct' : 'incorrect'}">
                                    <i class="fas ${result.isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                                </div>
                            </div>
                            <div class="result-category-badge">
                                <i class="${category.icon}" style="color: ${category.color}"></i>
                                <span>${category.name}</span>
                            </div>
                        </div>
                        <div class="result-status-label ${result.isCorrect ? 'correct' : 'incorrect'}">
                            <span class="status-text">${result.isCorrect ? 'Correct' : 'Incorrect'}</span>
                        </div>
                    </div>
                    
                    <div class="result-content">
                        <div class="question-section">
                            <div class="section-header">
                                <i class="fas fa-question-circle"></i>
                                <h4>Question</h4>
                            </div>
                            <div class="question-text">${result.question}</div>
                        </div>
                        
                        <div class="answers-section">
                            <div class="answer-grid ${result.isCorrect ? 'single-answer' : 'dual-answers'}">
                                <div class="answer-card user-answer ${result.isCorrect ? 'correct' : 'incorrect'}">
                                    <div class="answer-header">
                                        <i class="fas ${result.isCorrect ? 'fa-user-check' : 'fa-user-times'}"></i>
                                        <h5>Your Answer</h5>
                                        <span class="answer-status ${result.isCorrect ? 'correct' : 'incorrect'}">
                                            ${result.isCorrect ? 'Correct' : 'Incorrect'}
                                        </span>
                                    </div>
                                    <div class="answer-text">${result.userAnswer}</div>
                                </div>
                                
                                ${!result.isCorrect ? `
                                <div class="answer-card correct-answer">
                                    <div class="answer-header">
                                        <i class="fas fa-check-double"></i>
                                        <h5>Correct Answer</h5>
                                        <span class="answer-status correct">Correct</span>
                                    </div>
                                    <div class="answer-text">${result.correctAnswer}</div>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                        
                        ${result.explanation ? `
                        <div class="explanation-section">
                            <div class="section-header">
                                <i class="fas fa-lightbulb"></i>
                                <h4>Explanation</h4>
                            </div>
                            <div class="explanation-content">
                                <p>${result.explanation}</p>
                            </div>
                        </div>
                        ` : ''}
                        
                        <div class="result-actions">
                            <div class="performance-badge ${result.isCorrect ? 'excellent' : 'needs-review'}">
                                <i class="fas ${result.isCorrect ? 'fa-trophy' : 'fa-book-reader'}"></i>
                                <span>${result.isCorrect ? 'Well Done!' : 'Review This Topic'}</span>
                            </div>
                            ${!result.isCorrect ? `
                            <button class="study-btn" onclick="app.studyTopic('${categoryKey}')">
                                <i class="fas fa-graduation-cap"></i>
                                Study More
                            </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
            
            resultsList.appendChild(resultDiv);
        });

        // Add scroll-to-top button for long result lists
        if (results.details.length > 5) {
            const scrollTopBtn = document.createElement('button');
            scrollTopBtn.className = 'scroll-to-top-btn';
            scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i> Back to Top';
            scrollTopBtn.addEventListener('click', () => {
                container.scrollIntoView({ behavior: 'smooth' });
            });
            resultsList.appendChild(scrollTopBtn);
        }
    }

    getQuestionCategory(result) {
        // Try to match question content to categories
        const question = result.question.toLowerCase();
        
        if (question.includes('speed') || question.includes('mph') || question.includes('limit')) {
            return 'speed-limits';
        } else if (question.includes('parking') || question.includes('curb') || question.includes('zone')) {
            return 'parking';
        } else if (question.includes('right') && question.includes('way')) {
            return 'right-of-way';
        } else if (question.includes('license') || question.includes('registration') || question.includes('permit')) {
            return 'licensing';
        } else if (question.includes('vehicle') || question.includes('equipment') || question.includes('brake')) {
            return 'vehicle-equipment';
        } else if (question.includes('violation') || question.includes('fine') || question.includes('penalty')) {
            return 'traffic-violations';
        } else if (question.includes('alcohol') || question.includes('dui') || question.includes('dwi') || question.includes('intoxicated')) {
            return 'dui-dwi';
        } else if (question.includes('commercial') || question.includes('cdl') || question.includes('truck')) {
            return 'commercial-vehicles';
        }
        
        return 'traffic-violations'; // Default category
    }

    retakeTest() {
        document.getElementById('testResults').style.display = 'none';
        document.getElementById('testSetup').style.display = 'block';
        
        // Reset test state
        this.practiceTest = {
            questions: [],
            currentQuestion: 0,
            answers: {},
            startTime: null,
            flagged: new Set()
        };
    }

    returnToTestSetup() {
        // Clear any existing timer
        if (this.testTimer) {
            clearInterval(this.testTimer);
            this.testTimer = null;
        }

        // Hide test interface and results
        document.getElementById('testInterface').style.display = 'none';
        document.getElementById('testResults').style.display = 'none';
        document.getElementById('testSetup').style.display = 'block';
        
        // Reset test state
        this.practiceTest = {
            questions: [],
            currentQuestion: 0,
            answers: {},
            startTime: null,
            flagged: new Set()
        };
        
        alert('Test has been reset due to an error or no available questions. Please adjust your filters and try again.');
    }

    startTestTimer() {
        // Clear any existing timer
        if (this.testTimer) {
            clearInterval(this.testTimer);
        }
        
        // Start new timer
        this.testTimer = setInterval(() => {
            const elapsed = Math.floor((new Date() - this.practiceTest.startTime) / 1000);
            document.getElementById('testTimer').textContent = this.formatTime(elapsed);
        }, 1000);
    }

    // Statistics Methods
    updateStatistics() {
        // Initialize statistics object if needed
        if (!this.statistics) {
            this.statistics = {};
        }

        // Update basic statistics
        this.statistics.totalFlashcards = studyData.flashcards ? studyData.flashcards.length : 0;
        this.statistics.totalPracticeQuestions = studyData.practiceQuestions ? studyData.practiceQuestions.length : 0;
        this.statistics.lastUpdated = new Date().toISOString();

        // Initialize counters if they don't exist
        if (!this.statistics.cardsStudied) this.statistics.cardsStudied = 0;
        if (!this.statistics.testsCompleted) this.statistics.testsCompleted = 0;
        if (!this.statistics.totalStudyTime) this.statistics.totalStudyTime = 0;

        // Save to localStorage
        this.saveToLocalStorage('transportationStats', this.statistics);
    }

    saveTestStatistics() {
        if (!this.practiceTest.results) return;
        
        const testResult = {
            date: new Date().toISOString(),
            score: this.practiceTest.results.correct,
            total: this.practiceTest.results.total,
            percentage: this.practiceTest.results.percentage,
            timeTaken: this.practiceTest.results.timeTaken,
            categories: this.analyzeCategoryPerformance(this.practiceTest.results.details)
        };
        
        if (!this.statistics.testResults) {
            this.statistics.testResults = [];
        }
        
        this.statistics.testResults.push(testResult);
        this.statistics.testsCompleted = (this.statistics.testsCompleted || 0) + 1;
        this.statistics.lastTestDate = testResult.date;
        
        // Calculate average score
        const scores = this.statistics.testResults.map(r => r.percentage);
        this.statistics.averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        
        this.saveToLocalStorage('transportationStats', this.statistics);
        this.updateStatistics();
    }
    
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    formatTimeLong(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        } else {
            return `${secs}s`;
        }
    }

    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.warn(`Failed to save ${key} to localStorage:`, e);
        }
    }

    loadFromLocalStorage(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.warn(`Failed to load ${key} from localStorage:`, e);
            return defaultValue;
        }
    }

    // Performance testing for development
    performanceTest() {
        console.log('🚀 Running performance test...');
        const startTime = performance.now();
        
        // Test data loading
        console.log(`📊 Total flashcards: ${studyData?.flashcards?.length || 0}`);
        console.log(`📊 Total practice questions: ${studyData?.practiceQuestions?.length || 0}`);
        
        // Test filtering
        const filterStart = performance.now();
        this.applyFilters();
        const filterTime = performance.now() - filterStart;
        console.log(`⚡ Filter operation took: ${filterTime.toFixed(2)}ms`);
        
        const totalTime = performance.now() - startTime;
        console.log(`✅ Performance test completed in: ${totalTime.toFixed(2)}ms`);
    }

    retakeTest() {
        document.getElementById('testResults').style.display = 'none';
        document.getElementById('testSetup').style.display = 'block';
        
        // Reset test state
        this.practiceTest = {
            questions: [],
            currentQuestion: 0,
            answers: {},
            startTime: null,
            flagged: new Set()
        };
    }

    startTestTimer() {
        // Clear any existing timer
        if (this.testTimer) {
            clearInterval(this.testTimer);
        }
        
        // Start new timer
        this.testTimer = setInterval(() => {
            const elapsed = Math.floor((new Date() - this.practiceTest.startTime) / 1000);
            document.getElementById('testTimer').textContent = this.formatTime(elapsed);
        }, 1000);
    }

    studyTopic(categoryKey) {
        // Switch to flashcards and filter by category
        this.switchTab('flashcards');
        
        const categorySelect = document.getElementById('categorySelect');
        if (categorySelect) {
            categorySelect.value = categoryKey;
            this.applyFilters();
        }
    }

    handleViewportChange() {
        this.isSmallScreen = window.innerWidth <= 768;
        
        // Adjust charts if statistics tab is active
        if (this.currentTab === 'statistics') {
            setTimeout(() => this.updateCharts(), 100);
        }
    }

    handleKeyboardShortcuts(e) {
        // Only handle shortcuts when not typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                if (this.currentTab === 'flashcards') {
                    this.previousCard();
                } else if (this.currentTab === 'practice-tests') {
                    this.previousTestQuestion();
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (this.currentTab === 'flashcards') {
                    this.nextCard();
                } else if (this.currentTab === 'practice-tests') {
                    this.nextTestQuestion();
                }
                break;
            case ' ':
                e.preventDefault();
                if (this.currentTab === 'flashcards') {
                    this.flipCard();
                }
                break;
            case '1':
                if (this.currentTab === 'flashcards') {
                    e.preventDefault();
                    this.markDifficulty('easy');
                }
                break;
            case '2':
                if (this.currentTab === 'flashcards') {
                    e.preventDefault();
                    this.markDifficulty('medium');
                }
                break;
            case '3':
                if (this.currentTab === 'flashcards') {
                    e.preventDefault();
                    this.markDifficulty('hard');
                }
                break;
        }
    }

    setupBrowseByCourseEvents() {
        // Browse by Course button
        const browseByCourseBtn = document.getElementById('browseByCourseBtn');
        if (browseByCourseBtn) {
            browseByCourseBtn.addEventListener('click', () => this.showBrowseByCourse());
        }
        // Course selection handlers
        document.querySelectorAll('.course-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const course = e.currentTarget.dataset.course;
                this.selectCourse(course);
            });
        });
        // Back to browse button
        const backToBrowseBtn = document.getElementById('backToBrowseBtn');
        if (backToBrowseBtn) {
            backToBrowseBtn.addEventListener('click', () => this.showBrowseByCourse());
        }
    }

    showBrowseByCourse() {
        // Switch to flashcards tab and show browse interface
        this.switchTab('flashcards');
        const browseInterface = document.getElementById('browseInterface');
        const flashcardInterface = document.getElementById('flashcardInterface');
        if (browseInterface && flashcardInterface) {
            browseInterface.style.display = 'block';
            flashcardInterface.style.display = 'none';
        }
    }

    selectCourse(course) {
        // Set the main category filter
        const mainCategorySelect = document.getElementById('mainCategorySelect');
        if (mainCategorySelect) {
            mainCategorySelect.value = course;
            this.updateSubCategories();
        }
        // Show flashcard interface
        const browseInterface = document.getElementById('browseInterface');
        const flashcardInterface = document.getElementById('flashcardInterface');
        if (browseInterface && flashcardInterface) {
            browseInterface.style.display = 'none';
            flashcardInterface.style.display = 'block';
        }
        // Apply filters
        this.applyFilters();
    }

    browseCategory(category) {
        // Legacy method for category cards
        this.switchTab('flashcards');
        const categorySelect = document.getElementById('categorySelect');
        if (categorySelect) {
            categorySelect.value = category;
            this.applyFilters();
        }
    }

    // Search functionality
    performSearch() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
        if (!searchTerm) {
            // Reset to show all cards if search is empty
            this.filteredFlashcards = [...studyData.flashcards];
            this.currentFlashcard = 0;
            this.updateFlashcardDisplay();
            this.updateFilterStatus();
            return;
        }

        // Filter flashcards based on search term
        this.filteredFlashcards = studyData.flashcards.filter(card => {
            return card.question.toLowerCase().includes(searchTerm) ||
                   card.answer.toLowerCase().includes(searchTerm) ||
                   (studyData.categories[card.category]?.name || '').toLowerCase().includes(searchTerm);
        });

        this.currentFlashcard = 0;
        this.updateFlashcardDisplay();
        this.updateFilterStatus();
        
        // Visual feedback
        const searchBtn = document.getElementById('searchBtn');
        searchBtn.style.transform = 'scale(0.95)';
        setTimeout(() => searchBtn.style.transform = '', 150);
    }

    // Search filter functionality
    initializeSearchFilters() {
        // Initialize the search category dropdown with all topics
        this.updateSearchSubCategories();
    }

    updateSearchSubCategories() {
        const mainCategory = document.getElementById('searchMainCategory').value;
        const categorySelect = document.getElementById('searchCategory');
        
        // Clear existing options
        categorySelect.innerHTML = '<option value="all">All Topics</option>';
        
        if (mainCategory === 'all') {
            // Show all categories from all main categories
            this.populateAllSearchCategories(categorySelect);
        } else {
            // Show only categories from selected main category
            this.populateSearchSubCategoriesForMain(categorySelect, mainCategory);
        }
    }

    populateAllSearchCategories(selectElement) {
        // Add all categories from studyData
        const allCategories = new Set();
        if (studyData && studyData.flashcards) {
            studyData.flashcards.forEach(card => {
                if (card.category && !allCategories.has(card.category)) {
                    allCategories.add(card.category);
                    const categoryName = studyData.categories && studyData.categories[card.category] 
                        ? studyData.categories[card.category].name 
                        : this.formatCategoryName(card.category);
                    const option = document.createElement('option');
                    option.value = card.category;
                    option.textContent = categoryName;
                    selectElement.appendChild(option);
                }
            });
        }
    }

    populateSearchSubCategoriesForMain(selectElement, mainCategory) {
        // Filter categories to only show those that belong to the selected main category
        const categoriesForMainCategory = new Set();
        if (studyData && studyData.flashcards) {
            studyData.flashcards.forEach(card => {
                if (card.category && this.getMainCategoryForCard(card) === mainCategory) {
                    categoriesForMainCategory.add(card.category);
                }
            });
        }
        
        // Add only the filtered categories
        categoriesForMainCategory.forEach(categoryKey => {
            const categoryName = studyData.categories && studyData.categories[categoryKey]
                ? studyData.categories[categoryKey].name
                : this.formatCategoryName(categoryKey);
            const option = document.createElement('option');
            option.value = categoryKey;
            option.textContent = categoryName;
            selectElement.appendChild(option);
        });
    }

    performFilteredSearch() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
        const mainCategory = document.getElementById('searchMainCategory').value;
        const category = document.getElementById('searchCategory').value;

        // Start with all flashcards
        let results = [...studyData.flashcards];

        // Apply text search filter
        if (searchTerm) {
            results = results.filter(card => {
                return card.question.toLowerCase().includes(searchTerm) ||
                       card.answer.toLowerCase().includes(searchTerm) ||
                       (studyData.categories[card.category]?.name || '').toLowerCase().includes(searchTerm);
            });
        }

        // Apply main category filter
        if (mainCategory !== 'all') {
            results = results.filter(card => {
                return this.getMainCategoryForCard(card) === mainCategory;
            });
        }

        // Apply specific category filter
        if (category !== 'all') {
            results = results.filter(card => card.category === category);
        }

        // Display the results
        this.displaySearchResults(results, searchTerm);
    }

    displaySearchResults(results, searchTerm) {
        const resultsContainer = document.getElementById('searchResults');
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found</h3>
                    <p>Try adjusting your search terms or filters.</p>
                </div>
            `;
            return;
        }

        // Create results HTML
        let resultsHTML = `
            <div class="search-results-header">
                <h3>Search Results (${results.length} ${results.length === 1 ? 'result' : 'results'})</h3>
                ${searchTerm ? `<p>Showing results for: "<strong>${searchTerm}</strong>"</p>` : ''}
            </div>
            <div class="search-results-grid">
        `;

        results.forEach((card, index) => {
            const categoryName = studyData.categories[card.category]?.name || this.formatCategoryName(card.category);
            
            resultsHTML += `
                <div class="search-result-card" onclick="app.showFlashcardFromSearch(${card.id})">
                    <div class="result-category">${categoryName}</div>
                    <div class="result-question">${this.highlightSearchTerm(card.question, searchTerm)}</div>
                    <div class="result-answer">${this.highlightSearchTerm(card.answer, searchTerm)}</div>
                </div>
            `;
        });

        resultsHTML += '</div>';
        resultsContainer.innerHTML = resultsHTML;
    }

    highlightSearchTerm(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    showFlashcardFromSearch(cardId) {
        // Find the card and switch to flashcards tab
        const cardIndex = studyData.flashcards.findIndex(card => card.id === cardId);
        if (cardIndex !== -1) {
            this.filteredFlashcards = [...studyData.flashcards];
            this.currentFlashcard = cardIndex;
            this.switchTab('flashcards');
            this.updateFlashcardDisplay();
        }
    }

    // Notes functionality
    showNoteModal() {
        document.getElementById('noteModal').style.display = 'flex';
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
        document.getElementById('noteTitle').focus();
    }

    hideNoteModal() {
        document.getElementById('noteModal').style.display = 'none';
    }

    saveNote() {
        const title = document.getElementById('noteTitle').value.trim();
        const content = document.getElementById('noteContent').value.trim();
        
        if (!title || !content) {
            alert('Please enter both title and content for the note.');
            return;
        }

        const note = {
            id: Date.now(),
            title: title,
            content: content,
            date: new Date().toISOString(),
            category: document.getElementById('categorySelect').value || 'general'
        };

        this.notes.push(note);
        this.saveToLocalStorage('transportationNotes', this.notes);
        this.renderNotes();
        this.hideNoteModal();
    }

    renderNotes() {
        const container = document.getElementById('notesList');
        if (!container) return;

        if (this.notes.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-sticky-note"></i>
                    <p>No notes yet. Create your first note to get started!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.notes.map(note => `
            <div class="note-card" data-id="${note.id}">
                <div class="note-header">
                    <h3>${note.title}</h3>
                    <div class="note-actions">
                        <button onclick="app.editNote(${note.id})" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="app.deleteNote(${note.id})" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="note-content">${note.content}</div>
                <div class="note-meta">
                    <span class="note-date">${new Date(note.date).toLocaleDateString()}</span>
                    <span class="note-category">${note.category}</span>
                </div>
            </div>
        `).join('');
    }

    editNote(noteId) {
        const note = this.notes.find(n => n.id === noteId);
        if (note) {
            document.getElementById('noteTitle').value = note.title;
            document.getElementById('noteContent').value = note.content;
            document.getElementById('noteModal').style.display = 'flex';
            
            // Update save button to edit mode
            const saveBtn = document.getElementById('saveNoteBtn');
            saveBtn.textContent = 'Update Note';
            saveBtn.onclick = () => this.updateNote(noteId);
        }
    }

    updateNote(noteId) {
        const title = document.getElementById('noteTitle').value.trim();
        const content = document.getElementById('noteContent').value.trim();
        
        if (!title || !content) {
            alert('Please enter both title and content for the note.');
            return;
        }

        const noteIndex = this.notes.findIndex(n => n.id === noteId);
        if (noteIndex !== -1) {
            this.notes[noteIndex] = {
                ...this.notes[noteIndex],
                title: title,
                content: content,
                date: new Date().toISOString()
            };
            
            this.saveToLocalStorage('transportationNotes', this.notes);
            this.renderNotes();
            this.hideNoteModal();
            
            // Reset save button
            const saveBtn = document.getElementById('saveNoteBtn');
            saveBtn.textContent = 'Save Note';
            saveBtn.onclick = () => this.saveNote();
        }
    }

    deleteNote(noteId) {
        if (confirm('Are you sure you want to delete this note?')) {
            this.notes = this.notes.filter(n => n.id !== noteId);
            this.saveToLocalStorage('transportationNotes', this.notes);
            this.renderNotes();
        }
    }

    // Settings functionality
    showSettingsModal() {
        document.getElementById('settingsModal').style.display = 'flex';
        this.loadSettings();
    }

    hideSettingsModal() {
        document.getElementById('settingsModal').style.display = 'none';
    }

    loadSettings() {
        // Load current settings and populate the form
        const settings = this.loadFromLocalStorage('transportationSettings', {});
        
        // Set default values or loaded values
        const autoFlip = document.getElementById('autoFlipCards');
        if (autoFlip) autoFlip.checked = settings.autoFlip || false;
        
        const showTimer = document.getElementById('showTimer');
        if (showTimer) showTimer.checked = settings.showTimer !== false;
        
        const darkMode = document.getElementById('darkMode');
        if (darkMode) darkMode.checked = settings.darkMode || false;
    }

    saveSettings() {
        const settings = {
            autoFlip: document.getElementById('autoFlipCards')?.checked || false,
            showTimer: document.getElementById('showTimer')?.checked !== false,
            darkMode: document.getElementById('darkMode')?.checked || false,
            savedAt: new Date().toISOString()
        };
        
        this.saveToLocalStorage('transportationSettings', settings);
        this.applySettings(settings);
        this.hideSettingsModal();
        
        // Show confirmation
        this.showToast('Settings saved successfully!');
    }

    loadAndApplySettings() {
        const settings = this.loadFromLocalStorage('transportationSettings', {});
        this.applySettings(settings);
    }

    applySettings(settings) {
        // Apply dark mode
        if (settings.darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        // Apply timer visibility
        const timerElements = document.querySelectorAll('.timer-display');
        timerElements.forEach(el => {
            el.style.display = settings.showTimer !== false ? 'block' : 'none';
        });
        
        // Store settings for app use
        this.settings = settings;
    }

    switchSettingsTab(tabName) {
        // Remove active class from all settings tabs
        document.querySelectorAll('.settings-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.settings-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to selected tab
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}Settings`).classList.add('active');
    }

    // Data management
    exportData() {
        const exportData = {
            notes: this.notes,
            statistics: this.statistics,
            settings: this.loadFromLocalStorage('transportationSettings', {}),
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `transportation-code-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        this.showToast('Data exported successfully!');
    }

    importData() {
        document.getElementById('importDataFile').click();
    }

    handleImportFile(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importData = JSON.parse(e.target.result);
                
                if (confirm('This will replace your current data. Are you sure you want to continue?')) {
                    if (importData.notes) {
                        this.notes = importData.notes;
                        this.saveToLocalStorage('transportationNotes', this.notes);
                        this.renderNotes();
                    }
                    
                    if (importData.statistics) {
                        this.statistics = importData.statistics;
                        this.saveToLocalStorage('transportationStats', this.statistics);
                        this.updateStatistics();
                    }
                    
                    if (importData.settings) {
                        this.saveToLocalStorage('transportationSettings', importData.settings);
                        this.loadAndApplySettings();
                    }
                    
                    this.showToast('Data imported successfully!');
                }
            } catch (error) {
                alert('Error importing data: Invalid file format');
            }
        };
        reader.readAsText(file);
    }

    resetAllData() {
        if (confirm('This will delete ALL your data including notes, statistics, and settings. This cannot be undone. Are you sure?')) {
            if (confirm('Are you absolutely sure? This action is permanent.')) {
                localStorage.removeItem('transportationNotes');
                localStorage.removeItem('transportationStats');
                localStorage.removeItem('transportationSettings');
                
                this.notes = [];
                this.statistics = {};
                
                this.renderNotes();
                this.updateStatistics();
                this.loadAndApplySettings();
                
                this.showToast('All data has been reset');
            }
        }
    }

    // Content loading
    showContentModal() {
        document.getElementById('contentModal').style.display = 'flex';
    }

    hideContentModal() {
        document.getElementById('contentModal').style.display = 'none';
    }

    loadContentFromFile(fileName, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(content => {
                this.processContentFile(fileName, content);
                this.showToast(`${fileName} content loaded successfully!`);
            })
            .catch(error => {
                console.error('Error loading content:', error);
                this.showToast(`Error loading ${fileName} content`, 'error');
            });
    }

    processContentFile(fileName, content) {
        // Process different types of content files
        const lines = content.split('\n').filter(line => line.trim());
        
        lines.forEach(line => {
            if (line.includes('Q:') && line.includes('A:')) {
                const [question, answer] = line.split('A:');
                const newCard = {
                    id: Date.now() + Math.random(),
                    question: question.replace('Q:', '').trim(),
                    answer: answer.trim(),
                    category: fileName.toLowerCase().replace(/[^a-z]/g, '-'),
                    difficulty: 'medium'
                };
                studyData.flashcards.push(newCard);
            }
        });
        
        // Refresh the flashcard display
        this.loadFlashcards();
    }

    // Sample statistics for testing
    addSampleStatistics() {
        const sampleStats = {
            cardsStudied: 150,
            testsCompleted: 8,
            averageScore: 85,
            totalStudyTime: 7200, // 2 hours in seconds
            studySessions: [
                { date: new Date(Date.now() - 86400000).toISOString(), cardsStudied: 25, sessionTime: 1800 },
                { date: new Date(Date.now() - 172800000).toISOString(), cardsStudied: 30, sessionTime: 2100 },
                { date: new Date(Date.now() - 259200000).toISOString(), cardsStudied: 20, sessionTime: 1500 }
            ],
            testResults: [
                { date: new Date(Date.now() - 86400000).toISOString(), score: 88, total: 25 },
                { date: new Date(Date.now() - 172800000).toISOString(), score: 82, total: 25 },
                { date: new Date(Date.now() - 259200000).toISOString(), score: 90, total: 25 }
            ]
        };
        
        // Merge with existing statistics
        this.statistics = { ...this.statistics, ...sampleStats };
        this.saveToLocalStorage('transportationStats', this.statistics);
        this.updateStatistics();
        this.showToast('Sample statistics added!');
    }

    // Charts and statistics display
    updateCharts() {
        if (this.currentTab !== 'statistics') return;
        
        try {
            this.createStudyProgressChart();
            this.createTestScoresChart();
            this.createCategoryPerformanceChart();
        } catch (error) {
            console.warn('Charts not available:', error);
        }
    }

    createStudyProgressChart() {
        const canvas = document.getElementById('studyProgressChart');
        if (!canvas || typeof Chart === 'undefined') return;
        
        const ctx = canvas.getContext('2d');
        const sessions = this.statistics.studySessions || [];
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: sessions.map(s => new Date(s.date).toLocaleDateString()),
                datasets: [{
                    label: 'Cards Studied',
                    data: sessions.map(s => s.cardsStudied),
                    borderColor: '#2a5298',
                    backgroundColor: 'rgba(42, 82, 152, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createTestScoresChart() {
        const canvas = document.getElementById('testScoresChart');
        if (!canvas || typeof Chart === 'undefined') return;
        
        const ctx = canvas.getContext('2d');
        const results = this.statistics.testResults || [];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: results.map((r, i) => `Test ${i + 1}`),
                datasets: [{
                    label: 'Score %',
                    data: results.map(r => Math.round((r.score / r.total) * 100)),
                    backgroundColor: '#28a745',
                    borderColor: '#1e7e34',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    createCategoryPerformanceChart() {
        const canvas = document.getElementById('categoryChart');
        if (!canvas || typeof Chart === 'undefined') return;
        
        const ctx = canvas.getContext('2d');
        
        // Mock category data for demonstration
        const categories = ['Speed Limits', 'Parking', 'Right of Way', 'DUI/DWI', 'Commercial'];
        const performance = [85, 92, 78, 88, 95];
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: categories,
                datasets: [{
                    data: performance,
                    backgroundColor: [
                        '#2a5298',
                        '#28a745', 
                        '#ffc107',
                        '#dc3545',
                        '#6f42c1'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Test results methods
    saveTestStatistics() {
        if (!this.practiceTest.results) return;
        
        const testResult = {
            date: new Date().toISOString(),
            score: this.practiceTest.results.correct,
            total: this.practiceTest.results.total,
            percentage: this.practiceTest.results.percentage,
            timeTaken: this.practiceTest.results.timeTaken,
            categories: this.analyzeCategoryPerformance(this.practiceTest.results.details)
        };
        
        if (!this.statistics.testResults) {
            this.statistics.testResults = [];
        }
        
        this.statistics.testResults.push(testResult);
        this.statistics.testsCompleted = (this.statistics.testsCompleted || 0) + 1;
        this.statistics.lastTestDate = testResult.date;
        
        // Calculate average score
        const scores = this.statistics.testResults.map(r => r.percentage);
        this.statistics.averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        
        this.saveToLocalStorage('transportationStats', this.statistics);
        this.updateStatistics();
    }
}

// Global app instance and initialization
let app;

function initializeApp() {
    console.log('🚀 Starting app initialization...');
    
    // Debug: Log data availability
    console.log('📊 Data availability check:');
    console.log('- studyData:', typeof studyData !== 'undefined' ? '✅' : '❌');
    console.log('- penalCodeData:', typeof penalCodeData !== 'undefined' ? '✅' : '❌');
    console.log('- tcoleStudyData:', typeof tcoleStudyData !== 'undefined' ? '✅' : '❌');
    
    // Check flashcard counts
    if (typeof studyData !== 'undefined' && studyData.flashcards) {
        console.log('📊 studyData flashcards:', studyData.flashcards.length);
    }
    if (typeof tcoleStudyData !== 'undefined' && tcoleStudyData.flashcards) {
        console.log('📊 tcoleStudyData flashcards:', tcoleStudyData.flashcards.length);
    }
    if (typeof penalCodeData !== 'undefined' && penalCodeData.flashcards) {
        console.log('📊 penalCodeData flashcards:', penalCodeData.flashcards.length);
    }
    
    try {
        app = new TransportationCodeApp();
        console.log('✅ App initialized successfully!');
    } catch (error) {
        console.error('❌ Failed to initialize app:', error);
    }
}

// Initialize the app with a delay to ensure all data files are loaded
console.log('⏳ Scheduling app initialization...');
setTimeout(initializeApp, 250);