import runGemini from './greetings-mchoice-v2.js';

const allQuestions = [
    {//No
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "Yes",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "No",
                correct: true,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Shaking",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "waving hands signify 'Goodbye'👋",
                imageDescription: "Hands height close to face, waving"
            }
        ]
    },
    {//Yes
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "Yes",
                correct: true,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "No",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Shaking",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "waving hands signify 'Goodbye'👋",
                imageDescription: "Hands height close to face, waving"
            }
        ]
    },
    {//Deaf
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true",
        options: [
            {
                choice: "Hearing",
                correct: false,
            },
            { 
                choice: "Hard-of-hearing", 
                correct: false, 
            },
            { 
                choice: "Deaf", 
                correct: true, 
            },
            { 
                choice: "Goodbye",
                correct: false, 
            },
        ],
    },
    {//Hearing
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true",
        options: [
            {
                choice: "Hearing",
                correct: true,
            },
            { 
                choice: "Hard-of-hearing", 
                correct: false, 
            },
            { 
                choice: "Deaf", 
                correct: false, 
            },
            { 
                choice: "Goodbye",
                correct: false, 
            },
        ],
    },
    {//Hard of Hearing
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true",
        options: [
            {
                choice: "Hearing",
                correct: false,
            },
            { 
                choice: "Hard-of-hearing", 
                correct: true, 
            },
            { 
                choice: "Deaf", 
                correct: false, 
            },
            { 
                choice: "Goodbye",
                correct: false, 
            },
        ],
    },
    {//FSL
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true",
        options: [
            {
                choice: "Letter F",
                correct: false,
            },
            { 
                choice: "Hard-of-hearing", 
                correct: false, 
            },
            { 
                choice: "Deaf", 
                correct: false, 
            },
            { 
                choice: "Filipino Sign Language (FSL)",
                correct: true, 
            },
        ],
    },
    {//My name is
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true",
        options: [
            {
                choice: "My name is ____.",
                correct: true,
            },
            { 
                choice: "What is your name?", 
                correct: false, 
            },
            { 
                choice: "Fingerspelling", 
                correct: false, 
            },
            { 
                choice: "Filipino Sign Language (FSL)",
                correct: false, 
            },
        ],
    },
];



// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const loadingElement = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const signVideo = document.getElementById('sign-video');
const resultElement = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('question-counter');

// Add modal elements to DOM selection
const resultsModal = document.getElementById('results-modal');
const finalScoreDisplay = document.getElementById('final-score');
const backBtn = document.getElementById('back-btn');
const tryAgainBtn = document.getElementById('try-again-btn');

// Quiz state
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let selectedOption = null;
let answerSubmitted = false;
let userAnswers = [];

let answered = false;
let retryQuestions = [];

// Initialize the app
function init() {
    // Start the quiz immediately
    startQuiz();

    // Set up event listeners
    nextBtn.addEventListener('click', nextQuestion);
}

function initializeProgressBar() {
    progressBar.innerHTML = '';
    questions.forEach((question, index) => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        
        if (index < currentQuestionIndex) {
            // Check if the stored option has correct: true
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer ? userAnswer.correct : false;
            segment.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (index === currentQuestionIndex) {
            segment.classList.add('current');
        }
        
        progressBar.appendChild(segment);
    });
}

// Start a new quiz
function startQuiz() {
    loadingElement.style.display = 'block';
    quizContainer.style.display = 'none';

    setTimeout(() => {
        // Shuffle all questions and select first 8
        const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
        questions = shuffledQuestions.slice(0, 8);

        currentQuestionIndex = 0;
        score = 0;
        userAnswers = new Array(questions.length).fill(null);
        answered = false;

        initializeProgressBar();

        loadingElement.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
        scoreDisplay.textContent = '';
    }, 800);
}

function updateProgress(isCorrect) {
    const segments = progressBar.querySelectorAll('.progress-segment');
    const currentSegment = segments[currentQuestionIndex];
    currentSegment.classList.add(isCorrect ? 'correct' : 'incorrect');
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = "What is the sign language shown above?"; 
    signVideo.src = question.video;
    signVideo.load();

    optionsContainer.innerHTML = '';
    question.options.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        
        const choiceText = document.createElement('p');
        choiceText.textContent = option.choice;
        optionElement.appendChild(choiceText);
        
        optionElement.dataset.correct = option.correct;
        optionElement.addEventListener('click', () => handleOptionClick(optionElement, option));
        optionsContainer.appendChild(optionElement);
    });

    questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    
    // Fix this line - was using currentQuestion instead of currentQuestionIndex
    initializeProgressBar(); // This will update the progress bar correctly

    resultElement.textContent = '';
    resultElement.className = 'result';
    nextBtn.style.display = 'none';
    answered = false;
    optionsContainer.style.pointerEvents = 'auto';
}

async function getAIFeedback(mistakenSign, correctSign, context = "sign language recognition") {
    const userQuery = `Context: ${context}
Mistaken Sign: ${mistakenSign}
Correct Sign: ${correctSign}`;

    try {
        const feedback = await runGemini(userQuery);
        return feedback;
    } catch (error) {
        console.error("Error from Gemini:", error);
        return "Sorry, I couldn't generate feedback at this time.";
    }
}

async function handleOptionClick(optionElement, option) {
    if (answered) return;

    answered = true;
    optionsContainer.style.pointerEvents = 'none';
    nextBtn.style.display = 'flex';

    const isCorrect = option.correct;
    const question = questions[currentQuestionIndex];
    const correctOption = question.options.find(opt => opt.correct);

    if (isCorrect) {
        score++;
    }

    userAnswers[currentQuestionIndex] = option;
    updateProgress(isCorrect);
    
    if (resultElement) {
        resultElement.textContent = isCorrect ? 
            `✅ Correct! ${option.feedback}` : 
            `❌ Incorrect. ${option.feedback}`;
      }
      
    // Highlight selected option
    optionElement.classList.add(isCorrect ? 'correct' : 'wrong');
    
    // Highlight correct answer if wrong was selected
    if (!isCorrect) {
        const correctOptionElement = Array.from(optionsContainer.children).find(
            el => el.dataset.correct === 'true'
        );
        if (correctOptionElement) {
            correctOptionElement.classList.add('correct');
        }
        
        // Get AI feedback for wrong answers
        try {
            const aiFeedback = await getAIFeedback(
                option.imageDescription, 
                correctOption.imageDescription,
                question.context || "sign language recognition"
            );
            
            // Create a new element for AI feedback
            const aiFeedbackElement = document.createElement('div');
            aiFeedbackElement.className = 'ai-feedback';
            aiFeedbackElement.innerHTML = `<strong>AI Feedback:</strong> ${aiFeedback}`;
            
            // Append after the result
            resultElement.appendChild(document.createElement('br'));
            resultElement.appendChild(aiFeedbackElement);
        } catch (error) {
            console.error('Error getting AI feedback:', error);
        }
    }

    scoreDisplay.textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;

    // Hide next button again until next answer
    nextBtn.style.display = 'none';

    showQuestion();
}

// End of quiz
function endQuiz() {
    questionText.textContent = "Quiz completed!";
    optionsContainer.innerHTML = '';
    signVideo.src = '';
    resultElement.textContent = '';
    resultElement.className = 'result';
    nextBtn.style.display = 'none';

    // Show modal with final score
    finalScoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;
    resultsModal.style.display = 'flex';
}

// Event listeners for modal buttons
backBtn.addEventListener('click', () => {
    resultsModal.style.display = 'none';
    window.history.back();
});

tryAgainBtn.addEventListener('click', () => {
    resultsModal.style.display = 'none';
    startQuiz(); // This will reshuffle questions and reset the quiz
});

init();