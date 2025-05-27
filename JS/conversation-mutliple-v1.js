import runGemini from './greetings-mchoice-v2.js';

const allQuestions = [
    {// No
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "Yes",
                correct: false,
                feedback: "This sign shows a head shake, which means 'No' 🙅‍♂️, not 'Yes'",
                imageDescription: "Head shaking side to side"
            },
            {
                choice: "No",
                correct: true,
                feedback: "Correct! Head shaking means 'No' 🙅‍♂️",
                imageDescription: "Head shaking side to side"
            },
            {
                choice: "Shaking",
                correct: false,
                feedback: "While the head is shaking, this specifically means 'No' 🙅‍♂️",
                imageDescription: "Head shaking side to side"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "This is actually 'No' 🙅‍♂️ (waving hands signify 'Goodbye' 👋)",
                imageDescription: "Head shaking side to side"
            }
        ]
    },
    {// Yes
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "Yes",
                correct: true,
                feedback: "Correct! Nodding means 'Yes' 👍",
                imageDescription: "Head nodding up and down"
            },
            {
                choice: "No",
                correct: false,
                feedback: "This is nodding for 'Yes' 👍, not shaking for 'No' 🙅‍♂️",
                imageDescription: "Head nodding up and down"
            },
            {
                choice: "Shaking",
                correct: false,
                feedback: "The head is nodding (up-down) for 'Yes' 👍, not shaking (side-side)",
                imageDescription: "Head nodding up and down"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "This is nodding for 'Yes' 👍 (waving hands signify 'Goodbye' 👋)",
                imageDescription: "Head nodding up and down"
            }
        ]
    },
    {// Deaf
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true",
        options: [
            {
                choice: "Hearing",
                correct: false,
                feedback: "This sign points to the ear for 'Deaf' 🦻, not 'Hearing' 👂",
                imageDescription: "Finger pointing to ear"
            },
            { 
                choice: "Hard-of-hearing", 
                correct: false,
                feedback: "This is the sign for 'Deaf' 🦻 (a different sign is used for 'Hard-of-hearing')",
                imageDescription: "Finger pointing to ear" 
            },
            { 
                choice: "Deaf", 
                correct: true,
                feedback: "Correct! Pointing to the ear signifies 'Deaf' 🦻",
                imageDescription: "Finger pointing to ear" 
            },
            { 
                choice: "Goodbye",
                correct: false,
                feedback: "This is 'Deaf' 🦻 (waving hands signify 'Goodbye' 👋)",
                imageDescription: "Finger pointing to ear" 
            },
        ],
    },
    {// Hearing
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true",
        options: [
            {
                choice: "Hearing",
                correct: true,
                feedback: "Correct! This is the sign for 'Hearing' 👂",
                imageDescription: "Hand cupping ear"
            },
            { 
                choice: "Hard-of-hearing", 
                correct: false,
                feedback: "This is the sign for 'Hearing' 👂 (a different sign is used for 'Hard-of-hearing')",
                imageDescription: "Hand cupping ear" 
            },
            { 
                choice: "Deaf", 
                correct: false,
                feedback: "This is 'Hearing' 👂 (pointing to ear signifies 'Deaf' 🦻)",
                imageDescription: "Hand cupping ear" 
            },
            { 
                choice: "Goodbye",
                correct: false,
                feedback: "This is 'Hearing' 👂 (waving hands signify 'Goodbye' 👋)",
                imageDescription: "Hand cupping ear" 
            },
        ],
    },
    {// Hard of Hearing
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true",
        options: [
            {
                choice: "Hearing",
                correct: false,
                feedback: "This is 'Hard-of-hearing' 🎧 (cupping ear is 'Hearing' 👂)",
                imageDescription: "Hand moving between ear and mouth"
            },
            { 
                choice: "Hard-of-hearing", 
                correct: true,
                feedback: "Correct! Moving between ear and mouth means 'Hard-of-hearing' 🎧",
                imageDescription: "Hand moving between ear and mouth" 
            },
            { 
                choice: "Deaf", 
                correct: false,
                feedback: "This is 'Hard-of-hearing' 🎧 (pointing to ear is 'Deaf' 🦻)",
                imageDescription: "Hand moving between ear and mouth" 
            },
            { 
                choice: "Goodbye",
                correct: false,
                feedback: "This is 'Hard-of-hearing' 🎧 (waving hands signify 'Goodbye' 👋)",
                imageDescription: "Hand moving between ear and mouth" 
            },
        ],
    },
    {// FSL
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true",
        options: [
            {
                choice: "Letter F",
                correct: false,
                feedback: "This is signing 'FSL' (Filipino Sign Language) 🤟, not just the letter F",
                imageDescription: "Hand forming FSL sign"
            },
            { 
                choice: "Hard-of-hearing", 
                correct: false,
                feedback: "This is the sign for 'FSL' (Filipino Sign Language) 🤟",
                imageDescription: "Hand forming FSL sign" 
            },
            { 
                choice: "Deaf", 
                correct: false,
                feedback: "This is 'FSL' (Filipino Sign Language) 🤟 (pointing to ear is 'Deaf' 🦻)",
                imageDescription: "Hand forming FSL sign" 
            },
            { 
                choice: "Filipino Sign Language (FSL)",
                correct: true,
                feedback: "Correct! This is the sign for Filipino Sign Language (FSL) 🤟",
                imageDescription: "Hand forming FSL sign" 
            },
        ],
    },
    {// My name is
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true",
        options: [
            {
                choice: "My name is ____.",
                correct: true,
                feedback: "Correct! This is how you sign 'My name is ____.' ✋",
                imageDescription: "Hand tapping chest then spelling"
            },
            { 
                choice: "What is your name?", 
                correct: false,
                feedback: "This is 'My name is ____.' ✋ (a different sign is used for asking names)",
                imageDescription: "Hand tapping chest then spelling" 
            },
            { 
                choice: "Fingerspelling", 
                correct: false,
                feedback: "This includes fingerspelling but specifically means 'My name is ____.' ✋",
                imageDescription: "Hand tapping chest then spelling" 
            },
            { 
                choice: "Filipino Sign Language (FSL)",
                correct: false,
                feedback: "This is 'My name is ____.' ✋ (different from the FSL sign 🤟)",
                imageDescription: "Hand tapping chest then spelling" 
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

function handleOptionClick(optionElement, option) {
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

    // Show feedback
    resultElement.innerHTML = isCorrect
        ? `✅ Correct! ${option.feedback}`
        : `❌ Incorrect. ${option.feedback}`;

    // Highlight selected option
    optionElement.classList.add(isCorrect ? 'correct' : 'wrong');

    // If wrong, highlight correct answer and show imageDescription
    if (!isCorrect) {
        const correctOptionElement = Array.from(optionsContainer.children).find(
            el => el.dataset.correct === 'true'
        );
        if (correctOptionElement) {
            correctOptionElement.classList.add('correct');
        }

        // Show correct sign's imageDescription (if available)
        if (correctOption.imageDescription && correctOption.imageDescription !== "N/A") {
            const imageDescriptionElement = document.createElement('div');
            imageDescriptionElement.className = 'image-description';
            imageDescriptionElement.innerHTML = `<strong>Explanation:</strong> ${correctOption.imageDescription}`;
            resultElement.appendChild(document.createElement('br'));
            resultElement.appendChild(imageDescriptionElement);
        }
    }

  scoreDisplay.textContent = `Score: ${score}/${questions.length}`;
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