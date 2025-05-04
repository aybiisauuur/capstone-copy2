const quizData = [
    // letters
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F290cea0025474b589dc5cb8eb49f3ba9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=290cea0025474b589dc5cb8eb49f3ba9&alt=media&optimized=true",
        statement: "letter B",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9947ca53a38d4c12be5dffa6c417b1c9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9947ca53a38d4c12be5dffa6c417b1c9&alt=media&optimized=true",
        statement: "letter L",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true",
        statement: "letter N",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fda68ed21db654f09ac842fb09d54d55e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=da68ed21db654f09ac842fb09d54d55e&alt=media&optimized=true",
        statement: "letter P",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true",
        statement: "letter U",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F12ea87b8d6f04cafa323c0fe3c4c3ad7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=12ea87b8d6f04cafa323c0fe3c4c3ad7&alt=media&optimized=true",
        statement: "letter G",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5e99509e621f453cbc99f84d2cc8d0f3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5e99509e621f453cbc99f84d2cc8d0f3&alt=media&optimized=true",
        statement: "letter A",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true",
        statement: "letter T",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4b6e7e1bcee8420bbf510c7861ce36e1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4b6e7e1bcee8420bbf510c7861ce36e1&alt=media&optimized=true",
        statement: "letter H",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true",
        statement: "letter E",
        correctAnswer: false
    },
    // numbers
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb407e21cce084ae5a0c055a7cf762200%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b407e21cce084ae5a0c055a7cf762200&alt=media&optimized=true",
        statement: "number 10",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F25ade37426094a079a567f05af93d9fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=25ade37426094a079a567f05af93d9fe&alt=media&optimized=true",
        statement: "number 100",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6ad63600af97441ebc54dd044221ee8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6ad63600af97441ebc54dd044221ee8c&alt=media&optimized=true",
        statement: "1000",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe07d4e748fc341bcbd161ab668ab171b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e07d4e748fc341bcbd161ab668ab171b&alt=media&optimized=true",
        statement: "1 000 000 (1 million)",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff67c038bbf3c4ee38b4bddf7f1a1503e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f67c038bbf3c4ee38b4bddf7f1a1503e&alt=media&optimized=true",
        statement: "number 20",
        correctAnswer: true
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true",
        statement: "number 13",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe4bd8a6532114dc6af5936065dc2e2a6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e4bd8a6532114dc6af5936065dc2e2a6&alt=media&optimized=true",
        statement: "number 30",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7db247b436bf4ecb8336e18f93461b5a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7db247b436bf4ecb8336e18f93461b5a&alt=media&optimized=true",
        statement: "number 17",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0d24e2572969418ab3c85984188de5da%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0d24e2572969418ab3c85984188de5da&alt=media&optimized=true",
        statement: "number 6",
        correctAnswer: false
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feb47d20963f440fdae2ddf1cc6648e75%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eb47d20963f440fdae2ddf1cc6648e75&alt=media&optimized=true",
        statement: "number 18",
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
    questionText.textContent = `Is this video showing ${question.statement}?`;
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