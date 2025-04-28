const quizData = [
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
        statement: "Nice to meet you",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd97c585713d542dda1cb425550c76f0c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d97c585713d542dda1cb425550c76f0c&alt=media&optimized=true",
        statement: "Good Afternoon",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
        statement: "See you later",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
        statement: "Long time no see",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true",
        statement: "Nice to meet you",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9aa5c6e3c22a488c81ea9b78cd9d0a51%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=9aa5c6e3c22a488c81ea9b78cd9d0a51&alt=media&optimized=true",
        statement: "Take care",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
        statement: "Hi/hello",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdaaf40ef88e84bb6b94952f07a98a26c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=daaf40ef88e84bb6b94952f07a98a26c&alt=media&optimized=true",
        statement: "Good Morning",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true",
        statement: "Thank you",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdba4a7e655e04153ae79ebc7ff9e22a6%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=dba4a7e655e04153ae79ebc7ff9e22a6&alt=media&optimized=true",
        statement: "Goodbye",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9aa5c6e3c22a488c81ea9b78cd9d0a51%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=9aa5c6e3c22a488c81ea9b78cd9d0a51&alt=media&optimized=true",
        statement: "Thank you",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true",
        statement: "You're Welcome",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd702dd1b2538458098cba218905c9987%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d702dd1b2538458098cba218905c9987&alt=media&optimized=true",
        statement: "Hi/hello",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true",
        statement: "Thank you",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true",
        statement: "Good Evening",
        correctAnswer: true
    },
];

let currentQuestion = 0;
let score = [];
let shuffledQuestions = []; // This will store shuffled questions

const quizContainer = document.getElementById('quiz-container');
const loadingElement = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const progressBar = document.getElementById('progressBar');
const videoElement = document.getElementById('quizVideo');
const questionText = document.getElementById('questionText');
const nextBtn = document.getElementById('nextBtn');
const trueBtn = document.getElementById('trueBtn');
const falseBtn = document.getElementById('falseBtn');
const modal = document.getElementById('quiz-modal');
const backButton = document.querySelector('.back-button');
const tryAgainButton = document.querySelector('.try-again-button');
const trueFalseButtons = document.querySelector('.buttons-container');

function init() {
    // Only start the quiz if all elements exist
    startQuiz();

    nextBtn.addEventListener('click', nextQuestion);
}

// Start a new quiz
function startQuiz() {
    loadingElement.style.display = 'block';
    quizContainer.style.display = 'block';
    videoElement.style.display = 'none';
    trueFalseButtons.style.display = 'none';

    setTimeout(() => {
        // Shuffle all questions and select first 10
        shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5).slice(0, 10);

        currentQuestion = 0;
        score = new Array(shuffledQuestions.length).fill(false);
        userAnswers = new Array(shuffledQuestions.length).fill(null);
        answered = false;

        initializeProgressBar();

        loadingElement.style.display = 'none';
        quizContainer.style.display = 'block';
        videoElement.style.display = 'block';
        trueFalseButtons.style.display = 'flex';
        loadQuestion();
    }, 1500);
}

function initializeProgressBar() {
    progressBar.innerHTML = '';
    const questionsToShow = shuffledQuestions.length > 0 ? shuffledQuestions.length : 10;
    for (let i = 0; i < questionsToShow; i++) {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        progressBar.appendChild(segment);
    }
}

function checkAnswer(userAnswer) {
    // Use shuffledQuestions if available, otherwise use quizData
    const currentQuestions = shuffledQuestions.length > 0 ? shuffledQuestions : quizData;
    const correct = userAnswer === currentQuestions[currentQuestion].correctAnswer;
    score[currentQuestion] = correct;

    const segment = progressBar.children[currentQuestion];
    segment.classList.add(correct ? 'correct' : 'incorrect');

    const clickedButton = userAnswer ? trueBtn : falseBtn;
    clickedButton.classList.add(correct ? 'correct' : 'wrong');

    // Feedback text
    const feedbackText = document.createElement('div');
    feedbackText.id = 'feedbackText';
    feedbackText.textContent = correct
        ? (Math.random() < 0.5 ? 'Correct! Good job!' : 'Correct Answer!')
        : 'Wrong answer, sorry!';
    feedbackText.className = correct ? 'feedback-correct' : 'feedback-wrong';
    questionText.parentNode.insertBefore(feedbackText, questionText.nextSibling);

    trueBtn.disabled = true;
    falseBtn.disabled = true;
    nextBtn.style.display = 'block';
}

function loadQuestion() {
    // Use shuffledQuestions if available, otherwise use quizData
    const question = shuffledQuestions[currentQuestion];
    videoElement.src = question.videoUrl;
    questionText.textContent = `Is this video saying "${question.statement}"?`;
    nextBtn.style.display = 'none';

    trueBtn.classList.remove('correct', 'wrong');
    falseBtn.classList.remove('correct', 'wrong');
    trueBtn.disabled = false;
    falseBtn.disabled = false;

    // Clear previous feedback text
    const oldFeedback = document.getElementById('feedbackText');
    if (oldFeedback) oldFeedback.remove();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function shuffleQuestions() {
    // Create a copy of quizData and shuffle it
    shuffledQuestions = [...quizData];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

tryAgainButton.addEventListener('click', function() {
    modal.style.display = 'none';
    
    // Reset quiz state with 10 new random questions
    shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestion = 0;
    score = new Array(10).fill(false);
    
    initializeProgressBar();
    loadQuestion();
});

backButton.addEventListener('click', function() {
    modal.style.display = 'none';
    window.history.back();
});

backButton.addEventListener('click', function() {
    modal.style.display = 'none';
    window.history.back();
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function calculateScore() {
    return score.filter(Boolean).length;
}

function endQuiz() {
    const userScore = calculateScore();
    document.getElementById('quiz-score').textContent = `${userScore}/${shuffledQuestions.length}`;
    document.getElementById('quiz-modal').style.display = 'flex';
}

// Event listeners
trueBtn.addEventListener('click', () => checkAnswer(true));
falseBtn.addEventListener('click', () => checkAnswer(false));
nextBtn.addEventListener('click', nextQuestion);

document.addEventListener('DOMContentLoaded', function() {
    init();
});