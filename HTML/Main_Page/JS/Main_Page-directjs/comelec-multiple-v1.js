import runGemini from './greetings-mchoice-v2.js';

const allQuestions = [
    // A: common words
    {//change, correct, update
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faf3900620ef14f288f075a674a5b1068%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=af3900620ef14f288f075a674a5b1068&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "Change / Correct / Update",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Round",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "New",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            }
        ]
    },
    {// New
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true",
        context: "",
        options: [
            {
                choice: "True",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "New",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"

            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "What are you doing?",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//Transfer
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F618bc80c595b4493ad8acdfa44896729%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=618bc80c595b4493ad8acdfa44896729&alt=media&optimized=true",
        options: [
            {
                choice: "Letter T",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Go there",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Transfer",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//personal information
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true",
        options: [
            {
                choice: "Personal",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Form",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {// Deactivated
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true",
        options: [
            {
                choice: "Deactivated",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Voter",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {// Voter
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true",
        options: [
            {
                choice: "Vote",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Voter",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//Certificate
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true",
        options: [
            {
                choice: "Letter C",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Certificate",
                correct: true,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
            {
                choice: "Top of the Morning",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//VOTE 
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true",
        options: [
            {
                choice: "Vote",
                correct: true,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Voter",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "What?",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Letter V",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
        ],
    },
    {//Register
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true",
        options: [
            {
                choice: "Form",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Record",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "Register",
                correct: true,
                feedback: "",
                imageDescription: ""
            },
        ],
    },
    {// Signature
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1331af5563e24fbabbf27b168782cda3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1331af5563e24fbabbf27b168782cda3&alt=media&optimized=true",
        options: [
            {
                choice: "Form",
                correct: false,
                feedback: "",
                imageDescription: "",
            },
            {
                choice: "Sign Language",
                correct: false,
            },
            {
                choice: "Signature",
                correct: true,
                feedback: "",
                imageDescription: ""
            },
            {
                choice: "You're welcome",
                correct: false,
                feedback: "",
                imageDescription: ""
            },
        ],
    },
    // B: Registration Process
    {//How may I help you?
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fcd89d3b3810e483f83dcc8633c5bbec2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=cd89d3b3810e483f83dcc8633c5bbec2&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: true,
                feedback: "",
                imageDescription: "",
            },
            { 
                choice: "You Are?", 
                correct: false, 
            },
            { 
                choice: "Help", 
                correct: false, 
            },
            { 
                choice: "Goodbye",
                correct: false, 
            },
        ],
    },
    {//put signature
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8073ed7c263941f5aacbd09663624a42%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8073ed7c263941f5aacbd09663624a42&alt=media&optimized=true",
        options: [
            {
                choice: "Please put your signature.",
                correct: true,
                feedback: "",
                imageDescription: "",
            },
            { 
                choice: "Please", 
                correct: false, 
            },
            { 
                choice: "Help", 
                correct: false, 
            },
            { 
                choice: "Goodbye",
                correct: false, 
            },
        ],
    },
    {//take picture
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true",
        options: [
            {
                choice: "Picture",
                correct: false,
            },
            { 
                choice: "We will take your picture.", 
                correct: true, 
            },
            { 
                choice: "We will scan your thumbprint.", 
                correct: false, 
            },
            { 
                choice: "Smile",
                correct: false, 
            },
        ],
    },
    {//registered abroad
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F946bbe19dd3145f89a7d2e893b43f935%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=946bbe19dd3145f89a7d2e893b43f935&alt=media&optimized=true",
        options: [
            {
                choice: "Are you registered in SK (Sangguniang Kabataan)?",
                correct: false,
            },
            { 
                choice: "Are you registered in Baguio City?", 
                correct: false, 
            },
            { 
                choice: "Are you registered abroad?", 
                correct: true, 
            },
            { 
                choice: "Register",
                correct: false, 
            },
        ],
    },
    {//record deactivated
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F46b9dc2953db4495ae59626a951e0f7c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=46b9dc2953db4495ae59626a951e0f7c&alt=media&optimized=true",
        options: [
            {
                choice: "Register",
                correct: false,
            },
            { 
                choice: "You record is active.", 
                correct: false, 
            },
            { 
                choice: "Record", 
                correct: false, 
            },
            { 
                choice: "Your record is deactivated / inactive.",
                correct: true, 
            },
        ],
    },
    {//application for reactivation
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true",
        options: [
            {
                choice: "Your application type is not new, it is for reactivation.",
                correct: true,
            },
            { 
                choice: "You record is active.", 
                correct: false, 
            },
            { 
                choice: "How may I help you?", 
                correct: false, 
            },
            { 
                choice: "Your record is deactivated / inactive.",
                correct: false, 
            },
        ],
    },
    {//capture thumbprints
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e6c1869bb234b868130f2866f9e694b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e6c1869bb234b868130f2866f9e694b&alt=media&optimized=true",
        options: [
            {
                choice: "We will take your picture.",
                correct: false,
            },
            { 
                choice: "We will scan your thumbprint and index prints.", 
                correct: true, 
            },
            { 
                choice: "How may I help you?", 
                correct: false, 
            },
            { 
                choice: "Scan",
                correct: false, 
            },
        ],
    },
    {//have valid id
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F16c9959c12004a33911a5664f10adab2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=16c9959c12004a33911a5664f10adab2&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
            },
            { 
                choice: "Your record is deactivated/inactive.", 
                correct: false, 
            },
            { 
                choice: "Do you have a valid ID?", 
                correct: true, 
            },
            { 
                choice: "Please fill out the form.",
                correct: false, 
            },
        ],
    },
    {//registered in Baguio
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8d0e9627c9b849348f359352c6df3010%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8d0e9627c9b849348f359352c6df3010&alt=media&optimized=true",
        options: [
            {
                choice: "Are you registered in SK (Sangguniang Kabataan)?",
                correct: false,
            },
            { 
                choice: "Are you registered in Baguio City?", 
                correct: true, 
            },
            { 
                choice: "Are you registered abroad?", 
                correct: false, 
            },
            { 
                choice: "Register",
                correct: false, 
            },
        ],
    },
    {//registered in SK
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F88702384bd504672b5101b55ddb942c2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=88702384bd504672b5101b55ddb942c2&alt=media&optimized=true",
        options: [
            {
                choice: "Are you registered in SK (Sangguniang Kabataan)?",
                correct: true,
            },
            { 
                choice: "Are you registered in Baguio City?", 
                correct: false, 
            },
            { 
                choice: "Are you registered abroad?", 
                correct: false, 
            },
            { 
                choice: "Register",
                correct: false, 
            },
        ],
    },
    {//fill out the form
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true",
        options: [
            {
                choice: "Do you have a valid ID?",
                correct: false,
            },
            { 
                choice: "Please fill out the form.", 
                correct: true, 
            },
            { 
                choice: "How may I help you?", 
                correct: false, 
            },
            { 
                choice: "Please put your signature.",
                correct: false, 
            },
        ],
    },
    {//voters certificate released when approved
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd82613bc7a4f5e8e65fef195ac079e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd82613bc7a4f5e8e65fef195ac079e&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
            },
            { 
                choice: "Once approved, your voter’s certificate will be released.", 
                correct: true, 
            },
            { 
                choice: "Please check if your personal information is correct.", 
                correct: false, 
            },
            { 
                choice: "Please put your signature.",
                correct: false, 
            },
        ],
    },
    {//voters certificate released when approved
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F048fb0f1d784442ebf43cdbfe72b59d0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=048fb0f1d784442ebf43cdbfe72b59d0&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
            },
            { 
                choice: "Once approved, your voter’s certificate will be released.", 
                correct: false, 
            },
            { 
                choice: "Please check if your personal information is correct.", 
                correct: true, 
            },
            { 
                choice: "Please put your signature.",
                correct: false, 
            },
        ],
    },
    {//how long present barangay
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F21e3da74fcb84f84b60fb07a2260559d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=21e3da74fcb84f84b60fb07a2260559d&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
            },
            { 
                choice: "Are you registered abroad?", 
                correct: false, 
            },
            { 
                choice: "How long have you been residing in your present barangay?", 
                correct: true, 
            },
            { 
                choice: "Please put your signature.",
                correct: false, 
            },
        ],
    },
    {//resident 6 months
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe255026b24fc41eeae6d7549a8cf38d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e255026b24fc41eeae6d7549a8cf38d7&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
            },
            { 
                choice: "Are you registered abroad?", 
                correct: false, 
            },
            { 
                choice: "How long have you been residing in your present barangay?", 
                correct: false, 
            },
            { 
                choice: "If you are a registered voter, you must be a resident for at least 6 months.",
                correct: true, 
            },
        ],
    },
    // C: Common answers
    {//registration next year
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F024a9f90929c4c93ac3d3d64cbbb61c3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=024a9f90929c4c93ac3d3d64cbbb61c3&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
            },
            { 
                choice: "Next year", 
                correct: false, 
            },
            { 
                choice: "The national election will be held next year. ", 
                correct: false, 
            },
            { 
                choice: "The next registration will be next year. ",
                correct: true, 
            },
        ],
    },
    {//election next year
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae5fd834e74640faa88ce31d010b3c57%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae5fd834e74640faa88ce31d010b3c57&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
            },
            { 
                choice: "Next year", 
                correct: false, 
            },
            { 
                choice: "The national election will be held next year. ", 
                correct: true, 
            },
            { 
                choice: "The next registration will be next year. ",
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
        // Shuffle all questions and select first 15
        const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
        questions = shuffledQuestions.slice(0, 15);

        // Shuffle options for each selected question while preserving correct answer
        questions = questions.map(question => {
            // Find correct option
            const correctOption = question.options.find(opt => opt.correct);
            // Get all incorrect options
            const incorrectOptions = question.options.filter(opt => !opt.correct);
            // Shuffle incorrect options
            const shuffledIncorrect = [...incorrectOptions].sort(() => Math.random() - 0.5);
            // Random position for correct answer (0 to length of shuffled array)
            const correctPosition = Math.floor(Math.random() * (shuffledIncorrect.length + 1));
            
            // Insert correct answer at random position
            const finalOptions = [
                ...shuffledIncorrect.slice(0, correctPosition),
                correctOption,
                ...shuffledIncorrect.slice(correctPosition)
            ];

            return {
                ...question,
                options: finalOptions
            };
        });

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

        // Create loading spinner for AI feedback
        const aiLoadingSpinner = document.createElement('div');
        aiLoadingSpinner.className = 'ai-loading-spinner';
        aiLoadingSpinner.innerHTML = `
            <div class="spinner"></div>
            <span>Getting AI feedback...</span>
        `;
        resultElement.appendChild(document.createElement('br'));
        resultElement.appendChild(aiLoadingSpinner);

        // Get AI feedback for wrong answers
        try {
            const aiFeedback = await getAIFeedback(
                option.imageDescription,
                correctOption.imageDescription,
                question.context || "sign language recognition"
            );

            // Remove loading spinner
            aiLoadingSpinner.remove();

            // Create a new element for AI feedback
            const aiFeedbackElement = document.createElement('div');
            aiFeedbackElement.className = 'ai-feedback';
            aiFeedbackElement.innerHTML = `<strong>AI Feedback:</strong> ${aiFeedback}`;

            // Append after the result
            resultElement.appendChild(aiFeedbackElement);
        } catch (error) {
            console.error('Error getting AI feedback:', error);
            // Remove loading spinner and show error message
            aiLoadingSpinner.remove();
            const errorElement = document.createElement('div');
            errorElement.className = 'ai-feedback-error';
            errorElement.textContent = "Couldn't load AI feedback. Please try again.";
            resultElement.appendChild(errorElement);
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