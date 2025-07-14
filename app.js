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
            tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
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

        // Practice test controls
        document.getElementById('startTestBtn').addEventListener('click', () => this.startPracticeTest());
        document.getElementById('nextQuestion').addEventListener('click', () => this.nextTestQuestion());
        document.getElementById('prevQuestion').addEventListener('click', () => this.previousTestQuestion());
        document.getElementById('flagQuestion').addEventListener('click', () => this.flagQuestion());
        document.getElementById('retakeTestBtn').addEventListener('click', () => this.retakeTest());

        // Search functionality
        document.getElementById('searchBtn').addEventListener('click', () => this.performSearch());
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });

        // Statistics functionality
        document.getElementById('loadSampleDataBtn').addEventListener('click', () => this.addSampleStatistics());

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
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(tabName).classList.add('active');

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
        this.filteredFlashcards = [...studyData.flashcards];
        this.studySession.startTime = Date.now();
        
        // Initialize category filters
        this.updateSubCategories();
    }

    applyFilters() {
        const mainCategory = document.getElementById('mainCategorySelect').value;
        const category = document.getElementById('categorySelect').value;
        const difficulty = document.getElementById('difficultySelect').value;

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
        const total = studyData.flashcards.length;
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

    populateAllCategories(selectElement) {
        // Add all categories from studyData
        const allCategories = new Set();
        studyData.flashcards.forEach(card => {
            if (card.category && !allCategories.has(card.category)) {
                allCategories.add(card.category);
                const categoryName = studyData.categories[card.category]?.name || this.formatCategoryName(card.category);
                const option = document.createElement('option');
                option.value = card.category;
                option.textContent = categoryName;
                selectElement.appendChild(option);
            }
        });
    }

    populateSubCategoriesForMain(selectElement, mainCategory) {
        // Use enhanced data structure if available
        if (typeof tcoleStudyData !== 'undefined' && tcoleStudyData.mainCategories[mainCategory]) {
            const subCategories = tcoleStudyData.mainCategories[mainCategory].subCategories;
            Object.keys(subCategories).forEach(key => {
                const subCategory = subCategories[key];
                const option = document.createElement('option');
                option.value = key;
                option.textContent = subCategory.name;
                selectElement.appendChild(option);
            });
        } else {
            // Fallback to existing categories that match the main category
            this.populateAllCategories(selectElement);
        }
    }

    getMainCategoryForCard(card) {
        // Map card categories to main categories
        const categoryMapping = {
            'penal-code': 'penal-code',
            'assault-offenses': 'penal-code',
            'theft-offenses': 'penal-code',
            'drug-offenses': 'penal-code',
            'dwi-offenses': 'penal-code',
            'search-seizure': 'criminal-procedure',
            'arrest-procedures': 'criminal-procedure',
            'evidence-rules': 'criminal-procedure',
            'vehicle-traffic-stops': 'criminal-procedure',
            'report-writing': 'general-topics',
            'patrol-procedures': 'general-topics',
            'ethics-professionalism': 'general-topics'
        };
        
        return categoryMapping[card.category] || 'transportation-code';
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
        const category = studyData.categories[card.category];

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

    // Practice Test Methods
    startPracticeTest() {
        const testLength = parseInt(document.getElementById('testLength').value);
        const testCategory = document.getElementById('testCategory').value;
        const testMode = document.getElementById('testMode').value;

        // Filter questions based on category
        let availableQuestions = testCategory === 'all' 
            ? [...studyData.practiceQuestions]
            : studyData.practiceQuestions.filter(q => q.category === testCategory);

        // Shuffle and select questions
        this.practiceTest.questions = this.shuffleArray(availableQuestions).slice(0, testLength);
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

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.dataset.index = index;
            
            optionDiv.innerHTML = `
                <input type="radio" name="answer" value="${index}" id="option${index}">
                <label for="option${index}">${String.fromCharCode(65 + index)}. ${option}</label>
            `;

            optionDiv.addEventListener('click', () => this.selectAnswer(index));
            
            // Restore previous answer if exists
            if (this.practiceTest.answers[this.practiceTest.currentQuestion] === index) {
                optionDiv.classList.add('selected');
                optionDiv.querySelector('input').checked = true;
            }

            container.appendChild(optionDiv);
        });
    }

    selectAnswer(answerIndex) {
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
        }
    }

    showAnswerFeedback() {
        const question = this.practiceTest.questions[this.practiceTest.currentQuestion];
        const userAnswer = this.practiceTest.answers[this.practiceTest.currentQuestion];

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
        // Clear any existing timer
        if (this.testTimer) {
            clearInterval(this.testTimer);
            this.testTimer = null;
        }
        
        document.getElementById('testResults').style.display = 'none';
        document.getElementById('testSetup').style.display = 'block';
    }

    startTestTimer() {
        const startTime = this.practiceTest.startTime;
        
        this.testTimer = setInterval(() => {
            const elapsed = Math.floor((new Date() - startTime) / 1000);
            document.getElementById('timeDisplay').textContent = this.formatTime(elapsed);
        }, 1000);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Search Methods
    performSearch() {
        const query = document.getElementById('searchInput').value.toLowerCase().trim();
        const category = document.getElementById('searchCategory').value;
        
        if (!query) {
            this.showBrowseCategories();
            return;
        }

        const results = this.searchContent(query, category);
        this.displaySearchResults(results, query);
    }

    searchContent(query, category) {
        let results = [];

        // Search flashcards
        studyData.flashcards.forEach(card => {
            if (category !== 'all' && card.category !== category) return;
            
            const searchText = `${card.question} ${card.answer}`.toLowerCase();
            if (searchText.includes(query)) {
                results.push({
                    type: 'flashcard',
                    title: card.question,
                    content: card.answer,
                    category: card.category,
                    relevance: this.calculateRelevance(searchText, query)
                });
            }
        });

        // Search practice questions
        studyData.practiceQuestions.forEach(question => {
            if (category !== 'all' && question.category !== category) return;
            
            const searchText = `${question.question} ${question.options.join(' ')} ${question.explanation || ''}`.toLowerCase();
            if (searchText.includes(query)) {
                results.push({
                    type: 'question',
                    title: question.question,
                    content: question.explanation || 'Practice question',
                    category: question.category,
                    relevance: this.calculateRelevance(searchText, query)
                });
            }
        });

        // Sort by relevance
        return results.sort((a, b) => b.relevance - a.relevance);
    }

    calculateRelevance(text, query) {
        const queryWords = query.split(' ');
        let score = 0;
        
        queryWords.forEach(word => {
            const occurrences = (text.match(new RegExp(word, 'g')) || []).length;
            score += occurrences;
        });
        
        return score;
    }

    displaySearchResults(results, query) {
        const container = document.getElementById('searchResults');
        
        if (results.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found for "${query}"</h3>
                    <p>Try adjusting your search terms or browse categories below.</p>
                </div>
            `;
            this.showBrowseCategories();
            return;
        }

        container.innerHTML = `
            <div class="search-results-header">
                <h3>Search Results for "${query}" (${results.length} found)</h3>
            </div>
            <div class="results-list">
                ${results.map(result => this.createResultItem(result)).join('')}
            </div>
        `;
    }

    createResultItem(result) {
        const category = studyData.categories[result.category];
        return `
            <div class="result-item">
                <div class="result-type">${result.type.toUpperCase()}</div>
                <div class="result-category" style="color: ${category.color}">
                    <i class="${category.icon}"></i> ${category.name}
                </div>
                <h4>${result.title}</h4>
                <p>${result.content}</p>
            </div>
        `;
    }

    showBrowseCategories() {
        document.getElementById('searchResults').innerHTML = `
            <div class="browse-categories">
                <h3>Browse by Category</h3>
                <div class="category-grid">
                    ${Object.entries(studyData.categories).map(([key, category]) => `
                        <div class="category-card" data-category="${key}">
                            <i class="${category.icon}" style="color: ${category.color}"></i>
                            <h4>${category.name}</h4>
                            <p>${category.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Re-attach event listeners to category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => this.browseCategory(e.currentTarget.dataset.category));
        });
    }

    browseCategory(categoryKey) {
        // Filter flashcards by category
        const categoryFlashcards = studyData.flashcards.filter(card => card.category === categoryKey);
        const category = studyData.categories[categoryKey];

        const container = document.getElementById('searchResults');
        container.innerHTML = `
            <div class="category-browse">
                <div class="category-header">
                    <i class="${category.icon}" style="color: ${category.color}"></i>
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                </div>
                <div class="category-content">
                    <h4>${categoryFlashcards.length} Study Items Available</h4>
                    <div class="content-list">
                        ${categoryFlashcards.map(card => `
                            <div class="content-item">
                                <h5>${card.question}</h5>
                                <p class="difficulty">${card.difficulty.charAt(0).toUpperCase() + card.difficulty.slice(1)} Level</p>
                                <p class="objective">Learning Objective: ${card.objective}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button class="primary-btn study-category-btn" onclick="app.studyCategory('${categoryKey}')">
                        <i class="fas fa-play"></i> Study This Category
                    </button>
                </div>
            </div>
        `;
    }

    studyCategory(categoryKey) {
        // Switch to flashcards tab and filter by category
        this.showTab('flashcards');
        const categorySelect = document.getElementById('categorySelect');
        if (categorySelect) {
            categorySelect.value = categoryKey;
            this.applyFilters();
        }
        
        // Show notification
        this.showNotification('Switched to flashcards for focused study of this topic!', 'info');
    }

    filterResults(filter) {
        const resultItems = document.querySelectorAll('.result-item');
        resultItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = item.dataset.filter === filter ? 'block' : 'none';
            }
        });
    }

    studyTopic(categoryKey) {
        this.showTab('flashcards');
        const categorySelect = document.getElementById('categorySelect');
        if (categorySelect) {
            categorySelect.value = categoryKey;
            this.applyFilters();
        }
    }

    handleViewportChange() {
        // Update responsive state
        this.isSmallScreen = window.innerWidth <= 768;
        
        // Refresh charts if statistics tab is active and viewport changed significantly
        if (this.currentTab === 'statistics') {
            setTimeout(() => this.updateCharts(), 100);
        }
    }

    // Statistics Methods
    updateStatistics() {
        // Update statistics display
        if (document.getElementById('totalCardsStudied')) {
            document.getElementById('totalCardsStudied').textContent = this.statistics.cardsStudied || 0;
        }
        if (document.getElementById('testsTaken')) {
            document.getElementById('testsTaken').textContent = this.statistics.testsTaken || 0;
        }
        if (document.getElementById('averageScore')) {
            document.getElementById('averageScore').textContent = this.statistics.averageScore ? `${this.statistics.averageScore}%` : '0%';
        }
        if (document.getElementById('totalStudyTime')) {
            const totalMinutes = this.statistics.totalStudyTime || 0;
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            document.getElementById('totalStudyTime').textContent = `${hours}h ${minutes}m`;
        }
    }

    updateCharts() {
        if (this.currentTab !== 'statistics') return;
        
        console.log('📊 Creating charts for statistics display...');
        
        // Check if canvases exist and are visible
        const progressCanvas = document.getElementById('progressChart');
        const categoryCanvas = document.getElementById('categoryChart');
        
        if (!progressCanvas || !categoryCanvas) {
            console.warn('Chart canvases not found');
            return;
        }

        // Create sample data for charts
        this.createProgressChart();
        this.createCategoryChart();
    }

    createProgressChart() {
        const canvas = document.getElementById('progressChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Destroy existing chart if it exists
        if (this.progressChart) {
            this.progressChart.destroy();
        }

        this.progressChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Cards Studied',
                    data: [12, 19, 25, 32],
                    borderColor: '#2a5298',
                    backgroundColor: 'rgba(42, 82, 152, 0.1)',
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createCategoryChart() {
        const canvas = document.getElementById('categoryChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Destroy existing chart if it exists
        if (this.categoryChart) {
            this.categoryChart.destroy();
        }

        this.categoryChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Traffic Laws', 'Parking', 'Speed Limits', 'Equipment'],
                datasets: [{
                    data: [30, 25, 25, 20],
                    backgroundColor: [
                        '#2a5298',
                        '#007bff',
                        '#17a2b8',
                        '#28a745'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Notes Methods
    renderNotes() {
        const notesList = document.getElementById('notesList');
        if (!notesList) return;

        if (this.notes.length === 0) {
            notesList.innerHTML = `
                <div class="notes-placeholder">
                    <i class="fas fa-sticky-note"></i>
                    <p>No notes yet. Add your first note to get started!</p>
                </div>
            `;
            return;
        }

        notesList.innerHTML = this.notes.map(note => `
            <div class="note-item">
                <div class="note-header">
                    <h4>${note.title}</h4>
                    <div class="note-actions">
                        <button onclick="app.editNote('${note.id}')">Edit</button>
                        <button onclick="app.deleteNote('${note.id}')">Delete</button>
                    </div>
                </div>
                <div class="note-content">${note.content}</div>
                <div class="note-meta">
                    <span class="note-category">${note.category}</span>
                    <span class="note-date">${new Date(note.date).toLocaleDateString()}</span>
                </div>
            </div>
        `).join('');
    }

    showNoteModal() {
        document.getElementById('noteModal').style.display = 'flex';
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
        document.getElementById('noteCategory').value = '';
    }

    hideNoteModal() {
        document.getElementById('noteModal').style.display = 'none';
    }

    saveNote() {
        const title = document.getElementById('noteTitle').value;
        const content = document.getElementById('noteContent').value;
        const category = document.getElementById('noteCategory').value;

        if (!title || !content) {
            alert('Please fill in both title and content');
            return;
        }

        const note = {
            id: Date.now().toString(),
            title,
            content,
            category,
            date: new Date().toISOString()
        };

        this.notes.push(note);
        this.saveToLocalStorage('transportationNotes', this.notes);
        this.renderNotes();
        this.hideNoteModal();
    }

    editNote(noteId) {
        // Implementation for editing notes
        console.log('Edit note:', noteId);
    }

    deleteNote(noteId) {
        if (confirm('Are you sure you want to delete this note?')) {
            this.notes = this.notes.filter(note => note.id !== noteId);
            this.saveToLocalStorage('transportationNotes', this.notes);
            this.renderNotes();
        }
    }

    // Test Methods
    saveTestStatistics() {
        const results = this.practiceTest.results;
        
        // Update global statistics
        this.statistics.testsTaken = (this.statistics.testsTaken || 0) + 1;
        this.statistics.lastScore = results.percentage;
        
        // Calculate average score
        const scores = this.statistics.scores || [];
        scores.push(results.percentage);
        this.statistics.scores = scores;
        this.statistics.averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        
        this.saveToLocalStorage('transportationStats', this.statistics);
        this.updateStatistics();
    }

    addSampleStatistics() {
        this.statistics = {
            cardsStudied: 45,
            testsTaken: 3,
            averageScore: 82,
            totalStudyTime: 180,
            scores: [75, 82, 89]
        };
        
        this.saveToLocalStorage('transportationStats', this.statistics);
        this.updateStatistics();
        this.updateCharts();
        
        this.showNotification('Sample data loaded successfully!', 'success');
    }

    saveFlashcardSession() {
        // Save current study session data
        const sessionData = {
            cardsStudied: Array.from(this.studySession.cardsStudied),
            difficulty: this.studySession.difficulty,
            startTime: this.studySession.startTime,
            endTime: new Date()
        };
        
        console.log('Flashcard session saved:', sessionData);
    }

    // Utility Methods
    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.warn('Failed to save to localStorage:', e);
        }
    }

    handleKeyboardShortcuts(e) {
        if (e.key === 'ArrowLeft' && this.currentTab === 'flashcards') {
            this.previousCard();
        } else if (e.key === 'ArrowRight' && this.currentTab === 'flashcards') {
            this.nextCard();
        } else if (e.key === ' ' && this.currentTab === 'flashcards') {
            e.preventDefault();
            this.flipCard();
        }
    }

    showNotification(message, type = 'info') {
        // Simple notification system
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
            color: white;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    performanceTest() {
        console.log('🧪 Running Transportation Code App Performance Test...');
        
        // Check for required elements
        const requiredElements = [
            'questionText', 'answerText', 'currentFlashcard',
            'testInterface', 'testResults', 'notesList'
        ];
        
        const missingElements = requiredElements.filter(id => !document.getElementById(id));
        
        if (missingElements.length === 0) {
            console.log('✅ All required elements present');
        } else {
            console.warn('⚠️ Missing elements:', missingElements);
        }
    }

    // Content Loading Methods
    showContentModal() {
        document.getElementById('contentModal').classList.add('show');
    }

    hideContentModal() {
        document.getElementById('contentModal').classList.remove('show');
        // Clear any loading status
        document.getElementById('loadingStatus').style.display = 'none';
        document.getElementById('loadingResults').style.display = 'none';
    }

    async loadContentFromFile(fileType, filePath) {
        try {
            console.log('🔄 Loading content from:', filePath, 'Type:', fileType);
            
            // Show loading status
            document.getElementById('loadingStatus').style.display = 'block';
            document.getElementById('loadingResults').style.display = 'none';
            
            // Initialize content parser if not already done
            if (!this.contentParser) {
                this.contentParser = new TCOLEContentParser();
                console.log('📝 Content parser initialized');
            }
            
            // For local file loading, we'll use preset content as a workaround
            // since browsers can't fetch local files due to CORS restrictions
            let result;
            
            if (fileType === 'vehicle-traffic-stops') {
                console.log('🚗 Loading vehicle traffic stops preset content...');
                result = await this.contentParser.loadPresetContent('vehicle-traffic-stops');
            } else {
                console.log('🔍 Attempting to load file:', filePath);
                result = await this.contentParser.loadFromFile(filePath, fileType);
            }
            
            console.log('📊 Parse result:', result);
            
            // Hide loading status
            document.getElementById('loadingStatus').style.display = 'none';
            
            if (result.flashcards.length > 0 || result.practiceQuestions.length > 0) {
                console.log('✅ Content found! Adding to study data...');
                console.log('📇 Before adding - Total flashcards:', studyData.flashcards.length);
                console.log('📇 New flashcards to add:', result.flashcards.length);
                console.log('❓ New questions to add:', result.practiceQuestions.length);
                
                // Log a sample of the new flashcards for debugging
                if (result.flashcards.length > 0) {
                    console.log('📋 Sample flashcard:', result.flashcards[0]);
                }
                
                // Add new content to existing study data
                studyData.flashcards.push(...result.flashcards);
                studyData.practiceQuestions.push(...result.practiceQuestions);
                
                console.log('📇 After adding - Total flashcards:', studyData.flashcards.length);
                console.log('❓ After adding - Total questions:', studyData.practiceQuestions.length);
                
                // Update categories if needed
                result.flashcards.forEach(card => {
                    if (card.category && !studyData.categories[card.category]) {
                        studyData.categories[card.category] = {
                            name: this.formatCategoryName(card.category),
                            description: `${fileType} content`
                        };
                        console.log('📂 Added new category:', card.category);
                    }
                });
                
                // Refresh the application
                console.log('🔄 Refreshing application...');
                this.loadFlashcards();
                this.populatePracticeTestCategories();
                this.updateStatistics();
                
                // Show success message
                const resultsDiv = document.getElementById('loadingResults');
                resultsDiv.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <h4>Content Loaded Successfully!</h4>
                        <p>Added ${result.flashcards.length} flashcards and ${result.practiceQuestions.length} practice questions</p>
                        <p>Course: <strong>${this.formatCategoryName(fileType)}</strong></p>
                    </div>
                `;
                resultsDiv.style.display = 'block';
                
                // Auto-hide success message after 5 seconds
                setTimeout(() => {
                    this.hideContentModal();
                }, 5000);
                
            } else {
                console.log('⚠️ No content found in parsing result');
                // Show no content message
                const resultsDiv = document.getElementById('loadingResults');
                resultsDiv.innerHTML = `
                    <div class="warning-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h4>No Content Found</h4>
                        <p>Please add your study content to the file and try again.</p>
                        <p>Make sure to paste content after the "PASTE YOUR STUDY HANDOUT CONTENT BELOW:" line</p>
                    </div>
                `;
                resultsDiv.style.display = 'block';
            }
            
        } catch (error) {
            console.error('❌ Error loading content:', error);
            
            // Hide loading status
            document.getElementById('loadingStatus').style.display = 'none';
            
            // Show error message
            const resultsDiv = document.getElementById('loadingResults');
            resultsDiv.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <h4>Loading Error</h4>
                    <p>Failed to load content from file: ${filePath}</p>
                    <p>Error: ${error.message}</p>
                </div>
            `;
            resultsDiv.style.display = 'block';
        }
    }

    // Settings Modal Methods
    showSettingsModal() {
        document.getElementById('settingsModal').classList.add('show');
        this.loadCurrentSettings();
    }

    hideSettingsModal() {
        document.getElementById('settingsModal').classList.remove('show');
    }

    switchSettingsTab(tab) {
        // Remove active class from all tabs and panels
        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.settings-panel').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
        document.getElementById(`${tab}-panel`).classList.add('active');
    }

    loadCurrentSettings() {
        try {
            const settings = JSON.parse(localStorage.getItem('tcoleSettings') || '{}');
            
            // Load current settings into the form
            document.getElementById('themeSelect').value = settings.theme || 'default';
            document.getElementById('fontSizeSelect').value = settings.fontSize || 'medium';
            document.getElementById('animationsToggle').checked = settings.animations !== false;
            document.getElementById('autoFlipTime').value = settings.autoFlipTime || '0';
            document.getElementById('cardsPerSession').value = settings.cardsPerSession || '0';
            document.getElementById('defaultDifficulty').value = settings.defaultDifficulty || '';
            document.getElementById('shuffleOnStart').checked = settings.shuffleOnStart !== false;
        } catch (error) {
            console.warn('Failed to load settings:', error);
        }
    }

    saveSettings() {
        try {
            const settings = {
                theme: document.getElementById('themeSelect').value,
                fontSize: document.getElementById('fontSizeSelect').value,
                animations: document.getElementById('animationsToggle').checked,
                autoFlipTime: parseInt(document.getElementById('autoFlipTime').value),
                cardsPerSession: parseInt(document.getElementById('cardsPerSession').value),
                defaultDifficulty: document.getElementById('defaultDifficulty').value,
                shuffleOnStart: document.getElementById('shuffleOnStart').checked
            };

            localStorage.setItem('tcoleSettings', JSON.stringify(settings));
            this.applySettings(settings);
            this.hideSettingsModal();
            
            // Show success message
            this.showNotification('Settings saved successfully!', 'success');
        } catch (error) {
            console.error('Failed to save settings:', error);
            this.showNotification('Failed to save settings', 'error');
        }
    }

    applySettings(settings) {
        // Apply theme
        document.body.className = document.body.className.replace(/theme-\w+/g, '');
        if (settings.theme && settings.theme !== 'default') {
            document.body.classList.add(`theme-${settings.theme}`);
        }

        // Apply font size
        document.body.className = document.body.className.replace(/font-\w+/g, '');
        document.body.classList.add(`font-${settings.fontSize}`);

        // Apply animations
        if (!settings.animations) {
            document.body.classList.add('no-animations');
        } else {
            document.body.classList.remove('no-animations');
        }

        // Apply study settings (these will be used during study sessions)
        this.settings = settings;
    }

    exportData() {
        try {
            const exportData = {
                statistics: this.statistics,
                notes: this.notes,
                settings: JSON.parse(localStorage.getItem('tcoleSettings') || '{}'),
                exportDate: new Date().toISOString(),
                version: '1.0'
            };

            const blob = new Blob([JSON.stringify(exportData, null, 2)], {
                type: 'application/json'
            });
            
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `tcole-study-data-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            this.showNotification('Data exported successfully!', 'success');
        } catch (error) {
            console.error('Export failed:', error);
            this.showNotification('Failed to export data', 'error');
        }
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
                const importedData = JSON.parse(e.target.result);
                
                if (confirm('This will replace your current data. Are you sure?')) {
                    if (importedData.statistics) {
                        this.statistics = importedData.statistics;
                        localStorage.setItem('transportationStats', JSON.stringify(this.statistics));
                    }
                    
                    if (importedData.notes) {
                        this.notes = importedData.notes;
                        localStorage.setItem('transportationNotes', JSON.stringify(this.notes));
                        this.renderNotes();
                    }
                    
                    if (importedData.settings) {
                        localStorage.setItem('tcoleSettings', JSON.stringify(importedData.settings));
                        this.applySettings(importedData.settings);
                    }

                    this.updateStatistics();
                    this.showNotification('Data imported successfully!', 'success');
                }
            } catch (error) {
                console.error('Import failed:', error);
                this.showNotification('Failed to import data - invalid file format', 'error');
            }
        };
        reader.readAsText(file);
    }

    resetAllData() {
        if (confirm('Are you sure? This will permanently delete ALL your study progress, notes, and settings. This action cannot be undone.')) {
            if (confirm('Last chance! Click OK to permanently delete everything.')) {
                // Clear all localStorage data
                localStorage.removeItem('transportationStats');
                localStorage.removeItem('transportationNotes');
                localStorage.removeItem('tcoleSettings');
                
                // Reset app state
                this.statistics = {};
                this.notes = [];
                this.settings = {};
                
                // Reset UI
                this.updateStatistics();
                this.renderNotes();
                document.body.className = 'font-medium'; // Reset to default
                
                this.showNotification('All data has been reset', 'success');
                this.hideSettingsModal();
            }
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            ${message}
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Load settings on app initialization
    loadAndApplySettings() {
        try {
            const settings = JSON.parse(localStorage.getItem('tcoleSettings') || '{}');
            this.applySettings(settings);
        } catch (error) {
            console.warn('Failed to load settings:', error);
        }
    }

    populatePracticeTestCategories() {
        console.log('🧪 Populating practice test categories...');
        const testCategorySelect = document.getElementById('testCategory');
        
        if (!testCategorySelect) {
            console.warn('Test category select element not found');
            return;
        }
        
        // Clear existing options except "All Categories"
        testCategorySelect.innerHTML = '<option value="all">All Categories</option>';
        
        // Get unique categories from practice questions
        const categories = new Set();
        studyData.practiceQuestions.forEach(question => {
            if (question.category) {
                categories.add(question.category);
            }
        });
        
        // Sort categories and add them to the dropdown
        const sortedCategories = Array.from(categories).sort();
        sortedCategories.forEach(category => {
            const categoryName = studyData.categories[category]?.name || this.formatCategoryName(category);
            const option = document.createElement('option');
            option.value = category;
            option.textContent = categoryName;
            testCategorySelect.appendChild(option);
        });
        
        console.log(`✅ Added ${sortedCategories.length} practice test categories:`, sortedCategories);
    }
}

// Initialize the app and create global reference
const app = new TransportationCodeApp();
window.app = app;