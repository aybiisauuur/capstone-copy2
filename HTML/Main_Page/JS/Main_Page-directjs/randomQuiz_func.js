const questions = [
    // Video Question
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Nice to Meet you", "Good Evening"],
        correct: "Nice to Meet you"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Long time no see", "Good Evening"],
        correct: "Long time no see"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "See you later", "Good Evening"],
        correct: "See you later"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9aa5c6e3c22a488c81ea9b78cd9d0a51%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=9aa5c6e3c22a488c81ea9b78cd9d0a51&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Take care", "Good Evening'"],
        correct: "Take care"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "You're Welcome", "Good Evening"],
        correct: "You're Welcome"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd702dd1b2538458098cba218905c9987%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d702dd1b2538458098cba218905c9987&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Hi/Hello", "Good Evening"],
        correct: "Hi/Hello"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Thank you", "Good Evening"],
        correct: "Thank you"
    },
    // Video Flashcard
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae3aa044a67e4ecb9a0728d1947a9360%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae3aa044a67e4ecb9a0728d1947a9360&alt=media&optimized=true", // long time no see
        correct: true
    },
    //number 11
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true", // number 11
        correct: true
    },
    //good evening
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff29e00c1818c45d5b3cabcb8ebee33b0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f29e00c1818c45d5b3cabcb8ebee33b0&alt=media&optimized=true", // good evening
        correct: true
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for Nice to meet you?",
        options: [
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true", 
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true"
        ],
        correct: 3
    }
];

// Quiz Configuration
const config = {
    totalQuestions: Math.min(15, questions.length),  // Ensure it doesn't exceed available questions
    shuffleQuestions: true,
    shuffleAnswers: true,
    showProgress: true
};

// Quiz State
let quizState = {
    currentQuestion: 0,
    score: 0,
    selectedQuestions: []
};

// DOM Elements
const domElements = {
    questionsContainer: document.getElementById('questions'),
    nextButton: document.getElementById('nextButton'),
    progressBar: document.getElementById('progressBar'),
    progressText: document.querySelector('.progress'),
    resultsContainer: document.querySelector('.results'),
    navigationContainer: document.querySelector('.navigation')
};

// Initialization
function initQuiz() {
    resetQuizState();
    setupQuestions();
    showQuestion(0);
    createProgressBar(); // This will now properly clear and recreate the progress bar
    domElements.nextButton.disabled = true;
    
    // Make sure progress elements are visible
    domElements.progressText.style.display = 'block';
    domElements.progressBar.style.display = 'block';
}

function resetQuizState() {
    quizState = {
        currentQuestion: 0,
        score: 0,
        selectedQuestions: []
    };
}

function setupQuestions() {
    // Select and shuffle questions if configured
    quizState.selectedQuestions = config.shuffleQuestions 
        ? [...questions].sort(() => Math.random() - 0.5).slice(0, config.totalQuestions)
        : questions.slice(0, config.totalQuestions);

    renderQuestions();
}

function renderQuestions() {
    quizState.selectedQuestions.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);
        domElements.questionsContainer.appendChild(questionElement);
    });
}

function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    
    const typeHeader = `<div class="question-type">${question.type.replace('-', ' ').toUpperCase()}</div>`;
    let content = typeHeader + getQuestionContent(question, index);
    
    questionDiv.innerHTML = content;
    return questionDiv;
}

function getQuestionContent(question, index) {
    switch(question.type) {
        case 'video':
            return getVideoQuestionContent(question, index);
        case 'video-multiple-choice':
            return getVideoMultipleChoiceContent(question, index);
        case 'flashcard':
            return getFlashcardContent(question, index);
        default:
            return getDefaultQuestionContent(question, index);
    }
}

// Question Type Templates
function getVideoQuestionContent(question, index) {
    return `
        <div class="video-container">
            <video controls controlsList="nodownload">
                <source src="${question.video}" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
        </div>
        <h3>${question.question}</h3>
        <div class="options">
            ${question.options.map((option, i) => `
                <div class="option" onclick="selectAnswer(${index}, ${i})">${option}</div>
            `).join('')}
        </div>
        <button class="final-answer" onclick="lockAnswer(${index})" disabled>Final Answer</button>`;
}

function getVideoMultipleChoiceContent(question, index) {
    return `
        <h3>${question.question}</h3>
        <div class="video-options-grid">
            ${question.options.map((videoUrl, i) => `
                <div class="option video-option" onclick="selectAnswer(${index}, ${i})">
                    <video controls controlsList="nodownload">
                        <source src="${videoUrl}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            `).join('')}
        </div>
        <button class="final-answer" onclick="lockAnswer(${index})" disabled>Final Answer</button>`;
}

function getFlashcardContent(question, index) {
    return `
        <div class="flashcard" onclick="toggleFlashcard(${index})">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h3>${question.front}</h3>
                </div>
                <div class="flashcard-back">
                    <video controls controlsList="nodownload">
                        <source src="${question.video}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        </div>
        <div class="flashcard-controls">
            <button onclick="markFlashcardCorrect(${index})">✅ I understood</button>
            <button onclick="markFlashcardWrong(${index})">❌ Need help</button>
        </div>`;
}

function getDefaultQuestionContent(question, index) {
    return `
        <h3>${question.question}</h3>
        <div class="options">
            ${question.options.map((option, i) => `
                <div class="option" onclick="selectAnswer(${index}, ${i})">${option}</div>
            `).join('')}
        </div>`;
}

// Progress Bar
function createProgressBar() {
    // Clear existing progress segments
    domElements.progressBar.innerHTML = '';
    domElements.progressBar.style.width = '100%';
    
    // Create new segments
    quizState.selectedQuestions.forEach((_, index) => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        domElements.progressBar.appendChild(segment);
    });
}

function updateProgressBar(questionIndex, isCorrect) {
    const segments = document.getElementsByClassName('progress-segment');
    if (segments[questionIndex]) {
        segments[questionIndex].classList.remove('correct', 'wrong');
        segments[questionIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    }
}

function updateProgress(current) {
    domElements.progressText.textContent = 
        `Question ${current} of ${quizState.selectedQuestions.length}`;
}

// Flashcard Functions
function toggleFlashcard(index) {
    const card = document.querySelectorAll('.flashcard')[index];
    card.classList.toggle('flipped');
    
    if (card.classList.contains('flipped')) {
        handleFlashcardFlip(card, index);
    } else {
        const video = card.querySelector('video');
        if (video) video.pause();
    }
}

function handleFlashcardFlip(card, index) {
    const video = card.querySelector('video');
    if (video) {
        video.currentTime = 0;
        video.play().catch(e => console.log("Video play failed:", e));
    }
    
    const controls = card.parentElement.querySelector('.flashcard-controls');
    if (controls) controls.style.display = 'flex';
    
    domElements.nextButton.disabled = false;
}

function markFlashcardCorrect(index) {
    const card = document.querySelectorAll('.flashcard')[index];
    const video = card.querySelector('video');
    if (video) video.pause();
    
    const question = quizState.selectedQuestions[index];
    question.answered = true;
    question.correct = true;
    quizState.score++;
    
    updateProgressBar(index, true);
    nextQuestion();
}

function markFlashcardWrong(index) {
    const card = document.querySelectorAll('.flashcard')[index];
    const video = card.querySelector('video');
    if (video) video.pause();
    
    const question = quizState.selectedQuestions[index];
    question.answered = true;
    question.correct = false;
    
    updateProgressBar(index, false);
    nextQuestion();
}

// Question Navigation
function showQuestion(index) {
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.querySelectorAll('.question')[index].classList.add('active');
    updateProgress(index + 1);
}

function nextQuestion() {
    if (quizState.currentQuestion < quizState.selectedQuestions.length - 1) {
        quizState.currentQuestion++;
        showQuestion(quizState.currentQuestion);
    } else {
        showResults();
    }
}

// Answer Handling
function selectAnswer(questionIndex, answerIndex) {
    const question = quizState.selectedQuestions[questionIndex];
    const options = document.querySelectorAll(`#questions .question:nth-child(${questionIndex + 1}) .option`);
    
    options.forEach(opt => opt.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
    question.selected = answerIndex;
    
    if (question.type === 'video' || question.type === 'video-multiple-choice') {
        document.querySelector(`#questions .question:nth-child(${questionIndex + 1}) .final-answer`).disabled = false;
    } else {
        domElements.nextButton.disabled = false;
    }
}

function lockAnswer(questionIndex) {
    const question = quizState.selectedQuestions[questionIndex];
    domElements.nextButton.disabled = false;
    
    const options = document.querySelectorAll(`#questions .question:nth-child(${questionIndex + 1}) .option`);
    const finalAnswerBtn = document.querySelector(`#questions .question:nth-child(${questionIndex + 1}) .final-answer`);
    
    finalAnswerBtn.classList.add('hidden');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    const isCorrect = question.type === 'video-multiple-choice' 
        ? question.selected === question.correct
        : question.options[question.selected] === question.correct;
    
    if (isCorrect) {
        quizState.score++;
    }
    
    question.answered = true;
    question.correct = isCorrect;
    
    updateProgressBar(questionIndex, isCorrect);
    showFeedback(questionIndex, isCorrect);
    
    if (!isCorrect) {
        highlightCorrectAnswer(questionIndex);
    }
}

function highlightCorrectAnswer(questionIndex) {
    const question = quizState.selectedQuestions[questionIndex];
    const options = document.querySelectorAll(`#questions .question:nth-child(${questionIndex + 1}) .option`);
    
    options.forEach(opt => opt.classList.remove('correct-answer'));
    
    if (question.type === 'video-multiple-choice') {
        options[question.correct].classList.add('correct-answer');
    } else {
        const correctIndex = question.options.findIndex(opt => opt === question.correct);
        if (correctIndex >= 0) {
            options[correctIndex].classList.add('correct-answer');
        }
    }
}

function showFeedback(questionIndex, isCorrect) {
    const questionDiv = document.querySelectorAll('.question')[questionIndex];
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const existingFeedback = questionDiv.querySelector('.feedback');
    if (existingFeedback) existingFeedback.remove();
    
    feedbackDiv.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect! The correct answer is highlighted.';
    questionDiv.appendChild(feedbackDiv);
}

// Results
function showResults() {
    domElements.resultsContainer.style.display = 'block';
    domElements.questionsContainer.style.display = 'none';
    domElements.progressText.style.display = 'none';
    domElements.progressBar.style.display = 'none';
    domElements.navigationContainer.style.display = 'none';
    
    domElements.resultsContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You scored ${quizState.score} out of ${quizState.selectedQuestions.length}</p>
        <button onclick="restartQuiz()">Try Again</button>
    `;
}

function restartQuiz() {
    // Reset quiz state
    quizState = {
        currentQuestion: 0,
        score: 0,
        selectedQuestions: []
    };
    
    // Clear and reset UI elements
    domElements.questionsContainer.innerHTML = '';
    domElements.resultsContainer.style.display = 'none';
    domElements.questionsContainer.style.display = 'block';
    domElements.progressText.style.display = 'block';
    domElements.progressBar.style.display = 'block';
    domElements.navigationContainer.style.display = 'flex';
    domElements.nextButton.disabled = true;
    
    // Reinitialize the quiz
    initQuiz();
}

// Initialize the quiz when the page loads
window.onload = initQuiz;