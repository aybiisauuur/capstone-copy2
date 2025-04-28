const questions = [
    // Common Words 
    {
        question: "Which video says: Deaf?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Hard-of-hearing?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Hearing?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: Yes?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true', 
            correct: true }
            ],
    },
    {
        question: "Which video says: No?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: My name is...?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbb7fcf30b9a145a1b0b3dcc7988ab909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bb7fcf30b9a145a1b0b3dcc7988ab909&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
    {
        question: "Which video says: Filipino Sign Language (FSL)?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true', 
            correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true', 
            correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true', 
            correct: false }
            ],
    },
];

let currentQuestion = 0;
let selectedOption = null;
let progressStatus = [];
let score = []; // Added score array
let shuffledQuestions = [];

const questionText = document.getElementById('question-text');
const quizContainer = document.getElementById('quiz-container');
const loadingElement = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const optionsContainer = document.getElementById('video-options-container');
const nextBtn = document.getElementById('next-btn');
const finalAnswerBtn = document.getElementById('final-answer-btn');
const modal = document.getElementById('quiz-modal');
const backButton = document.querySelector('.back-button');
const tryAgainButton = document.querySelector('.try-again-button');

function init() {
    // Only start the quiz if all elements exist
    startQuiz();

    nextBtn.addEventListener('click', nextQuestion);
}

// Start a new quiz
function startQuiz() {
    loadingElement.style.display = 'block';
    quizContainer.style.display = 'block';

    setTimeout(() => {
        // Shuffle all questions 
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

        currentQuestion = 0;
        score = new Array(shuffledQuestions.length).fill(false);
        userAnswers = new Array(shuffledQuestions.length).fill(null);
        answered = false;

        initializeProgressBar();

        loadingElement.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestion();
    }, 1500);
}

function initializeProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.innerHTML = '';
    // Use shuffledQuestions.length instead of questions.length
    shuffledQuestions.forEach(() => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        progressBar.appendChild(segment);
    });
    progressStatus = new Array(shuffledQuestions.length).fill(null);
    score = new Array(shuffledQuestions.length).fill(false);
}

function updateProgressBar() {
    const segments = document.querySelectorAll('.progress-segment');
    segments.forEach((segment, index) => {
        segment.classList.remove('correct', 'incorrect');
        if (progressStatus[index] !== null) {
            segment.classList.add(progressStatus[index] ? 'correct' : 'incorrect');
        }
    });
}

function loadQuestion() {
    const question = shuffledQuestions[currentQuestion];
    
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    finalAnswerBtn.style.display = 'none';
    selectedOption = null;
    
    // Shuffle the options for this question
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'video-option';
        optionDiv.innerHTML = `<video controls><source src="${option.video}" type="video/mp4"></video>`;
        
        optionDiv.addEventListener('click', () => {
            if (!optionDiv.classList.contains('selected')) {
                document.querySelectorAll('.video-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                optionDiv.classList.add('selected');
                finalAnswerBtn.style.display = 'block';
                selectedOption = { element: optionDiv, correct: option.correct };
            }
        });
        optionsContainer.appendChild(optionDiv);
    });

    // clear feedback
    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    updateProgressBar();
}

function confirmFinalAnswer() {
    if (!selectedOption) return;
    
    selectedOption.element.classList.remove('selected');
    selectedOption.element.classList.add(selectedOption.correct ? 'correct' : 'incorrect');
    progressStatus[currentQuestion] = selectedOption.correct;
    score[currentQuestion] = selectedOption.correct; // Update score array

    document.querySelectorAll('.video-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    // Remove existing feedback text
    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Display new feedback message
    const feedbackText = document.createElement('div');
    feedbackText.id = 'feedbackText';
    feedbackText.textContent = selectedOption.correct 
        ? (Math.random() < 0.5 ? 'Correct! Good job!' : 'Correct Answer!') 
        : 'Wrong answer, sorry!' ;
    feedbackText.className = selectedOption.correct ? 'feedback-correct' : 'feedback-wrong';
    questionText.parentNode.insertBefore(feedbackText, questionText.nextSibling);

    updateProgressBar();
    finalAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    // Clear feedback first
    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Reset video options
    document.querySelectorAll('.video-option').forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('correct', 'incorrect', 'selected');
    });

    // Move to next question or show results
    currentQuestion++;
    // Check against shuffledQuestions.length instead of questions.length
    if (currentQuestion < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showFinalResults();
    }

    // Reset buttons
    finalAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

function calculateScore() {
    // Safely count correct answers (handle cases where score array might be empty)
    return score ? score.filter(Boolean).length : 0;
}

function showFinalResults() {
    const userScore = calculateScore();
    const totalQuestions = shuffledQuestions.length;
    
    // Clean any existing slashes and display the score
    const scoreDisplay = `${userScore}/${totalQuestions}`;
    document.getElementById('quiz-score').textContent = scoreDisplay;
    
    document.getElementById('quiz-modal').style.display = 'flex';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

// Event listeners
finalAnswerBtn.addEventListener('click', confirmFinalAnswer);
nextBtn.addEventListener('click', nextQuestion);

backButton.addEventListener('click', function() {
    modal.style.display = 'none';
    window.history.back();
});

tryAgainButton.addEventListener('click', function() {
    modal.style.display = 'none';
    
    // Reset quiz progress
    currentQuestion = 0;
    
    // Shuffle the questions again and take first 15
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 15);
    score = new Array(shuffledQuestions.length).fill(false);
    progressStatus = new Array(shuffledQuestions.length).fill(null);
    
    // Reinitialize and load first question
    initializeProgressBar();
    loadQuestion();
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    init();
});