const quizData = [
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true",
        statement: "What?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F72ada87ecfc548df94317bbf3f127957%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=72ada87ecfc548df94317bbf3f127957&alt=media&optimized=true",
        statement: "What are you doing?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F69ab6ce319b04f3982eedb55c99fb8dd%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=69ab6ce319b04f3982eedb55c99fb8dd&alt=media&optimized=true",
        statement: "Are you married or single?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd7d7ea0c45874ab5ad0956e6e43d443c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d7d7ea0c45874ab5ad0956e6e43d443c&alt=media&optimized=true",
        statement: "What do you do? (job, school)",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true",
        statement: "Where do you live?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5462c54d4b494113be5805bb98f8a083%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5462c54d4b494113be5805bb98f8a083&alt=media&optimized=true",
        statement: "Where are you from?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true",
        statement: "When?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbb7fcf30b9a145a1b0b3dcc7988ab909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bb7fcf30b9a145a1b0b3dcc7988ab909&alt=media&optimized=true",
        statement: "What is your name?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true",
        statement: "Where?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true",
        statement: "Where are you going?",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true",
        statement: "Where?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true",
        statement: "What is your name?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true",
        statement: "Do you understand?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1af55d1880b646de85d1f9fab624541e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1af55d1880b646de85d1f9fab624541e&alt=media&optimized=true",
        statement: "Can you help me?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true",
        statement: "Where are you from?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff7f0065ef91d4ad99d0075eb5d482602%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f7f0065ef91d4ad99d0075eb5d482602&alt=media&optimized=true",
        statement: "How are you?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true",
        statement: "Who?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true",
        statement: "How old are you?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true",
        statement: "Where?",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F83a4a5b85f1a4b5ca1514d29bef18e9f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=83a4a5b85f1a4b5ca1514d29bef18e9f&alt=media&optimized=true",
        statement: "Why?",
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