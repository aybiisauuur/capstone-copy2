const quizData = [
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true",
        statement: "Vote",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true",
        statement: "Voter",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true",
        statement: "Register",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1331af5563e24fbabbf27b168782cda3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1331af5563e24fbabbf27b168782cda3&alt=media&optimized=true",
        statement: "Signature",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true",
        statement: "New",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true",
        statement: "Transfer",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true",
        statement: "Record",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true",
        statement: "Personal Information",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1331af5563e24fbabbf27b168782cda3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1331af5563e24fbabbf27b168782cda3&alt=media&optimized=true",
        statement: "Certificate",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true",
        statement: "Change/Correct/Update",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true",
        statement: "Deactivated",
        correctAnswer: false
    },
    //registration process
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8d0e9627c9b849348f359352c6df3010%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8d0e9627c9b849348f359352c6df3010&alt=media&optimized=true",
        statement: "Are you a registered voter in Baguio City?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F946bbe19dd3145f89a7d2e893b43f935%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=946bbe19dd3145f89a7d2e893b43f935&alt=media&optimized=true",
        statement: "Are you registered abroad?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F88702384bd504672b5101b55ddb942c2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=88702384bd504672b5101b55ddb942c2&alt=media&optimized=true",
        statement: "Are you registered in SK (Sangguniang Kabataan)?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true",
        statement: "Please fill out the form.",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F46b9dc2953db4495ae59626a951e0f7c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=46b9dc2953db4495ae59626a951e0f7c&alt=media&optimized=true",
        statement: "Your record is deactivated/inactive.",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true",
        statement: "How may I help you?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true",
        statement: "Do you have a valid ID?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fcd89d3b3810e483f83dcc8633c5bbec2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=cd89d3b3810e483f83dcc8633c5bbec2&alt=media&optimized=true",
        statement: "We will take your picture.",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true",
        statement: "We will scan your thumbprint and index prints.",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true",
        statement: "Once approved, your voter’s certificate will be released.",
        correctAnswer: false
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