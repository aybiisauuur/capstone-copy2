const questionsData = [
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
        options: ["Good Morning", "Take care", "Good Evening"],
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
        correct: 2 // Changed from 3 to 2 (zero-based index)
    }
];


// DOM Elements
const questionsContainer = document.getElementById('questions');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const progressText = document.querySelector('.progress');
const resultsContainer = document.querySelector('.results');
const navigationContainer = document.querySelector('.navigation');
const loadingElement = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');

// Quiz State
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let selectedOption = null;
let answerSubmitted = false;
let userAnswers = [];

// Configuration
const config = {
    shuffleQuestions: true,
    totalQuestions: questionsData.length
};

// Initialize the app
function init() {
    startQuiz();
}

function startQuiz() {
    questions = [...questionsData];
    if (config.shuffleQuestions) {
        questions = shuffleArray(questions).slice(0, config.totalQuestions);
    } else {
        questions = questions.slice(0, config.totalQuestions);
    }
    
    renderQuestions();
    showQuestion(currentQuestionIndex);
    initializeProgressBar();
    nextButton.disabled = true;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initializeProgressBar() {
    progressBar.innerHTML = '';
    questions.forEach((question, index) => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        
        if (index < currentQuestionIndex) {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer ? userAnswer.correct : false;
            segment.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (index === currentQuestionIndex) {
            segment.classList.add('current');
        }
        
        progressBar.appendChild(segment);
    });
}

function renderQuestions() {
    questionsContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);
        questionsContainer.appendChild(questionElement);
    });
}

function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.id = `question-${index}`;
    
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
                    <h3>${question.front} Click to flip the flashcard.</h3>
                </div>
                <div class="flashcard-back">
                    <video controls controlsList="nodownload">
                        <source src="${question.video}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        </div>
        <div class="flashcard-controls" style="display: none;">
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

function updateProgress(current) {
    progressText.textContent = `Question ${current} of ${questions.length}`;
}

function toggleFlashcard(index) {
    const questionElement = document.getElementById(`question-${index}`);
    if (!questionElement) return;
    
    const card = questionElement.querySelector('.flashcard');
    if (!card) return;
    
    card.classList.toggle('flipped');
    
    if (card.classList.contains('flipped')) {
        const video = card.querySelector('video');
        if (video) {
            video.currentTime = 0;
            video.play().catch(e => console.log("Video play failed:", e));
        }
        
        const controls = questionElement.querySelector('.flashcard-controls');
        if (controls) controls.style.display = 'flex';
        
        nextButton.disabled = false;
    } else {
        const video = card.querySelector('video');
        if (video) video.pause();
    }
}

function markFlashcardCorrect(index) {
    const questionElement = document.getElementById(`question-${index}`);
    const card = questionElement.querySelector('.flashcard');
    const video = card ? card.querySelector('video') : null;
    
    if (video) video.pause();
    
    userAnswers[index] = { correct: true };
    score++;
    
    updateProgressBar(index, true);
    nextQuestion();
}

function markFlashcardWrong(index) {
    const questionElement = document.getElementById(`question-${index}`);
    const card = questionElement.querySelector('.flashcard');
    const video = card ? card.querySelector('video') : null;
    
    if (video) video.pause();
    
    userAnswers[index] = { correct: false };
    
    updateProgressBar(index, false);
    nextQuestion();
}

function showQuestion(index) {
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.getElementById(`question-${index}`).classList.add('active');
    updateProgress(index + 1);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        nextButton.disabled = true;
        initializeProgressBar();
    } else {
        showResults();
    }
}

function selectAnswer(questionIndex, answerIndex) {
    const question = questions[questionIndex];
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
    question.selected = answerIndex;
    
    if (question.type === 'video' || question.type === 'video-multiple-choice') {
        questionElement.querySelector('.final-answer').disabled = false;
    } else {
        nextButton.disabled = false;
    }
}

function lockAnswer(questionIndex) {
    const question = questions[questionIndex];
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');
    const finalAnswerBtn = questionElement.querySelector('.final-answer');
    
    finalAnswerBtn.classList.add('hidden');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    const isCorrect = question.type === 'video-multiple-choice' 
        ? question.selected === question.correct
        : question.options[question.selected] === question.correct;
    
    if (isCorrect) {
        score++;
        // Remove selected class and add correct-answer class
        options[question.selected].classList.remove('selected');
        options[question.selected].classList.add('correct-answer');
    }
    
    userAnswers[questionIndex] = { correct: isCorrect };
    
    updateProgressBar(questionIndex, isCorrect);
    showFeedback(questionIndex, isCorrect);
    
    if (!isCorrect) {
        highlightCorrectAnswer(questionIndex);
    }
    
    nextButton.disabled = false;
}

function highlightCorrectAnswer(questionIndex) {
    const question = questions[questionIndex];
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');
    
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct-answer');
    });
    
    // Highlight correct answer in green
    if (question.type === 'video-multiple-choice') {
        options[question.correct].classList.add('correct-answer');
    } else {
        const correctIndex = question.options.findIndex(opt => opt === question.correct);
        if (correctIndex >= 0) {
            options[correctIndex].classList.add('correct-answer');
        }
    }
    
    // If user selected a wrong answer, keep it highlighted in red
    if (question.selected !== undefined && 
        (question.type === 'video-multiple-choice' 
            ? question.selected !== question.correct 
            : question.options[question.selected] !== question.correct)) {
        options[question.selected].classList.add('selected');
    }
}

function showFeedback(questionIndex, isCorrect) {
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const existingFeedback = questionElement.querySelector('.feedback');
    if (existingFeedback) existingFeedback.remove();
    
    feedbackDiv.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect! Correct answer is highlighted.';
    questionElement.appendChild(feedbackDiv);
}

function updateProgressBar(index, isCorrect) {
    const segments = progressBar.querySelectorAll('.progress-segment');
    if (index < segments.length) {
        segments[index].classList.remove('current', 'correct', 'incorrect');
        segments[index].classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (index + 1 < segments.length) {
            segments[index + 1].classList.add('current');
        }
    }
}

function showResults() {
    resultsContainer.style.display = 'block';
    questionsContainer.style.display = 'none';
    progressText.style.display = 'none';
    progressBar.style.display = 'none';
    navigationContainer.style.display = 'none';
    
    resultsContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You scored ${score} out of ${questions.length}</p>
        <button onclick="restartQuiz()">Try Again</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    questionsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    questionsContainer.style.display = 'flex';
    progressText.style.display = 'block';
    progressBar.style.display = 'flex';
    navigationContainer.style.display = 'flex';
    nextButton.disabled = true;
    
    startQuiz(); // This will now shuffle questions again if config.shuffleQuestions is true
}

// Initialize the quiz when the page loads
window.onload = init;