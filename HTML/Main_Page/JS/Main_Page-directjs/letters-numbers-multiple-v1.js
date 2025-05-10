import runGemini from './greetings-mchoice-v2.js';

// Letters A-M and Numbers 1-16
const allQuestions = [
    {//A
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5fccd86c89ca4a819eff4375249c331f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5fccd86c89ca4a819eff4375249c331f&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "A",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "B",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "C",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "D",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            }
        ]
    },
    {// B
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F290cea0025474b589dc5cb8eb49f3ba9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=290cea0025474b589dc5cb8eb49f3ba9&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "B",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"

            },
            {
                choice: "C",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "D",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//C
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F54011d16d83f43a0b08e29cb4bd3b85a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=54011d16d83f43a0b08e29cb4bd3b85a&alt=media&optimized=true",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "B",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "C",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "D",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//D
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "B",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "C",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "D",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {// E
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F09d452abb113431c964f677706fdf206%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=09d452abb113431c964f677706fdf206&alt=media&optimized=true",
        options: [
            {
                choice: "E",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "F",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "G",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "H",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {// F
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd2f028d37e4e808c8f62e7bca974d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd2f028d37e4e808c8f62e7bca974d7&alt=media&optimized=true",
        options: [
            {
                choice: "E",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "F",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "G",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "H",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//G
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F62e09cc0c727427bb995cc959baaa951%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=62e09cc0c727427bb995cc959baaa951&alt=media&optimized=true",
        options: [
            {
                choice: "E",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "F",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "G",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "H",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//H
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F12ea87b8d6f04cafa323c0fe3c4c3ad7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=12ea87b8d6f04cafa323c0fe3c4c3ad7&alt=media&optimized=true",
        options: [
            {
                choice: "E",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "F",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "G",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "H",
                correct: true,
                feedback: "",
                imageDescription: ""
            },
        ],
    },
    {//I
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F65a19409f4ca49778f42efa65a2e0437%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=65a19409f4ca49778f42efa65a2e0437&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: true,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "J",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "K",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "L",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
        ],
    },
    {// J
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6f261a2fc88d4a459ff0229ad9f350db%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6f261a2fc88d4a459ff0229ad9f350db&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: false,
                feedback: "",
                imageDescription: "",
            },
            {
                choice: "J",
                correct: true,
            },
            {
                choice: "K",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "L",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
        ],
    },
    {// K
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6073f9a673414f869083f07dff1b3a62%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6073f9a673414f869083f07dff1b3a62&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: false,
                feedback: "",
                imageDescription: "",
            },
            {
                choice: "J",
                correct: false,
            },
            {
                choice: "K",
                correct: true,
            },
            {
                choice: "L",
                correct: false,
            },
        ],
    },
    {// L
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9947ca53a38d4c12be5dffa6c417b1c9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9947ca53a38d4c12be5dffa6c417b1c9&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: false,
                feedback: "",
                imageDescription: "",
            },
            {
                choice: "J",
                correct: false,
            },
            {
                choice: "K",
                correct: false,
            },
            {
                choice: "L",
                correct: true,
            },
        ],
    },
    {// M
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true",
        options: [
            {
                choice: "M",
                correct: true,
            },
            {
                choice: "N",
                correct: false,
            },
            {
                choice: "O",
                correct: false,
            },
            {
                choice: "p",
                correct: false,
            },
        ],
    },
    // numbers 
    {// 1
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd032915078144d4297e2016420cd93d2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d032915078144d4297e2016420cd93d2&alt=media&optimized=true",
        options: [
            {
                choice: "1",
                correct: true,
            },
            {
                choice: "2",
                correct: false,
            },
            {
                choice: "3",
                correct: false,
            },
            {
                choice: "4",
                correct: false,
            },
        ],
    },
    {// 2
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F76e1875707204d78bd83e663dc72356a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=76e1875707204d78bd83e663dc72356a&alt=media&optimized=true",
        options: [
            {
                choice: "1",
                correct: false,
            },
            {
                choice: "2",
                correct: true,
            },
            {
                choice: "3",
                correct: false,
            },
            {
                choice: "4",
                correct: false,
            },
        ],
    },
    {// 3
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true",
        options: [
            {
                choice: "1",
                correct: false,
            },
            {
                choice: "2",
                correct: false,
            },
            {
                choice: "3",
                correct: true,
            },
            {
                choice: "4",
                correct: false,
            },
        ],
    },
    {// 4
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd66d7209be94c40b3f79c25d106d082%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd66d7209be94c40b3f79c25d106d082&alt=media&optimized=true",
        options: [
            {
                choice: "1",
                correct: false,
            },
            {
                choice: "2",
                correct: false,
            },
            {
                choice: "3",
                correct: false,
            },
            {
                choice: "4",
                correct: true,
            },
        ],
    },
    {// 5
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe47908419cfd4fd0a84e9f55e1eb8e8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e47908419cfd4fd0a84e9f55e1eb8e8c&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: true,
            },
            {
                choice: "6",
                correct: false,
            },
            {
                choice: "7",
                correct: false,
            },
            {
                choice: "8",
                correct: false,
            },
        ],
    },
    {// 6
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5089f4e1f0d5480d96eb46ad11c1dabc%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5089f4e1f0d5480d96eb46ad11c1dabc&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: false,
            },
            {
                choice: "6",
                correct: true,
            },
            {
                choice: "7",
                correct: false,
            },
            {
                choice: "8",
                correct: false,
            },
        ],
    },
    {// 7
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7db247b436bf4ecb8336e18f93461b5a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7db247b436bf4ecb8336e18f93461b5a&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: false,
            },
            {
                choice: "6",
                correct: false,
            },
            {
                choice: "7",
                correct: true,
            },
            {
                choice: "8",
                correct: false,
            },
        ],
    },
    {// 8
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffa1a21fd83d54e1e8dd5b0e9a0df1efb%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fa1a21fd83d54e1e8dd5b0e9a0df1efb&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: false,
            },
            {
                choice: "6",
                correct: false,
            },
            {
                choice: "7",
                correct: false,
            },
            {
                choice: "8",
                correct: true,
            },
        ],
    },
    {// 9
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd53ae3657600478b8ed781c05aa09bb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d53ae3657600478b8ed781c05aa09bb7&alt=media&optimized=true",
        options: [
            {
                choice: "9",
                correct: true,
            },
            {
                choice: "10",
                correct: false,
            },
            {
                choice: "11",
                correct: false,
            },
            {
                choice: "12",
                correct: false,
            },
        ],
    },
    {// 10
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb407e21cce084ae5a0c055a7cf762200%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b407e21cce084ae5a0c055a7cf762200&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: true,
            },
            {
                choice: "20",
                correct: false,
            },
            {
                choice: "30",
                correct: false,
            },
            {
                choice: "40",
                correct: false,
            },
        ],
    },
    {//11
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: false,
            },
            {
                choice: "11",
                correct: true,
            },
            {
                choice: "12",
                correct: false,
            },
            {
                choice: "13",
                correct: false,
            },
        ],
    },
    {// 12
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff75b399a4163499bba950f0f1bc2fc09%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f75b399a4163499bba950f0f1bc2fc09&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: false,
            },
            {
                choice: "11",
                correct: false,
            },
            {
                choice: "12",
                correct: true,
            },
            {
                choice: "13",
                correct: false,
            },
        ],
    },
    {// 13
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe4bd8a6532114dc6af5936065dc2e2a6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e4bd8a6532114dc6af5936065dc2e2a6&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: false,
            },
            {
                choice: "11",
                correct: false,
            },
            {
                choice: "12",
                correct: false,
            },
            {
                choice: "13",
                correct: true,
            },
        ],
    },
    {// 14
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fefc74a7e5ce34e87ad2276e95a0735d6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=efc74a7e5ce34e87ad2276e95a0735d6&alt=media&optimized=true",
        options: [
            {
                choice: "14",
                correct: true,
            },
            {
                choice: "15",
                correct: false,
            },
            {
                choice: "4",
                correct: false,
            },
            {
                choice: "5",
                correct: false,
            },
        ],
    },
    {// 15
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3d8880ab1fa4b538b5730fafee406d3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3d8880ab1fa4b538b5730fafee406d3&alt=media&optimized=true",
        options: [
            {
                choice: "14",
                correct: false,
            },
            {
                choice: "15",
                correct: true,
            },
            {
                choice: "4",
                correct: false,
            },
            {
                choice: "5",
                correct: false,
            },
        ],
    },
    {// 16
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0d24e2572969418ab3c85984188de5da%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0d24e2572969418ab3c85984188de5da&alt=media&optimized=true",
        options: [
            {
                choice: "16",
                correct: true,
            },
            {
                choice: "17",
                correct: false,
            },
            {
                choice: "6",
                correct: false,
            },
            {
                choice: "7",
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