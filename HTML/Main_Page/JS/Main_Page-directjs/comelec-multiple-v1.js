import runGemini from './greetings-mchoice-v2.js';

const allQuestions = [
    // A: common words
    {//change, correct, update
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faf3900620ef14f288f075a674a5b1068%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=af3900620ef14f288f075a674a5b1068&alt=media&optimized=true",
        context: "Voter registration terms 📝",
        options: [
            {
                choice: "Change / Correct / Update",
                correct: true,
                feedback: "Correct! 🎯 This sign indicates making changes or updates to voter records",
                imageDescription: "Hand making circular motion near forehead"
            },
            {
                choice: "Round",
                correct: false,
                feedback: "Not quite! 🔄 This sign is about updating information, not shape",
                imageDescription: "N/A"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Oops! 🌙 Wrong category - this is about voter registration terms",
                imageDescription: "N/A"
            },
            {
                choice: "New",
                correct: false,
                feedback: "Close! ✨ 'New' is different from 'update/correct' in ASL",
                imageDescription: "N/A"
            }
        ]
    },
    {// New
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true",
        context: "Voter registration status 🆕",
        options: [
            {
                choice: "True",
                correct: false,
                feedback: "Incorrect! ❌ This sign specifically means 'new' registration",
                imageDescription: "N/A"
            },
            {
                choice: "New",
                correct: true,
                feedback: "Perfect! 🌟 You recognized the sign for 'new' registration",
                imageDescription: "Flat hand moving upward from palm-up position"

            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Wrong category! 🌆 This is about registration status, not greetings",
                imageDescription: "N/A"
            },
            {
                choice: "What are you doing?",
                correct: false,
                feedback: "Not quite! 🤔 This is a simple sign for 'new'",
                imageDescription: "N/A"
            },
        ],
    },
    {//Transfer
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F618bc80c595b4493ad8acdfa44896729%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=618bc80c595b4493ad8acdfa44896729&alt=media&optimized=true",
        context: "Voter record actions 🔄",
        options: [
            {
                choice: "Letter T",
                correct: false,
                feedback: "Almost! ✋ This is the full word 'transfer', not just the letter",
                imageDescription: "N/A"
            },
            {
                choice: "Go there",
                correct: false,
                feedback: "Not quite! 🚶 This sign is about transferring voter records",
                imageDescription: "N/A"
            },
            {
                choice: "Transfer",
                correct: true,
                feedback: "Excellent! 🔄 You identified the voter record transfer sign",
                imageDescription: "Hands moving in opposite directions showing transfer action"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "Wrong category! 👋 This is about voter administration actions",
                imageDescription: "N/A"
            },
        ],
    },
    {//personal information
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true",
        context: "Voter registration details 📋",
        options: [
            {
                choice: "Personal",
                correct: false,
                feedback: "Close! 👤 This is the full phrase 'personal information'",
                imageDescription: "N/A"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "Wrong category! ☀️ This is about voter details, not greetings",
                imageDescription: "N/A"
            },
            {
                choice: "Form",
                correct: false,
                feedback: "Almost! 📄 This refers specifically to personal details, not the form itself",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: true,
                feedback: "Correct! 📋 You recognized the sign for personal details collection",
                imageDescription: "Hand moving in small circle near chest"
            },
        ],
    },
    {// Deactivated
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true",
        context: "Voter record status ⚠️",
        options: [
            {
                choice: "Deactivated",
                correct: true,
                feedback: "Exactly! ⚠️ You identified the deactivated record status sign",
                imageDescription: "Hand making downward cutting motion"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "Close! 📁 This shows the record is specifically deactivated",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "Not quite! 👤 This refers to record status, not personal details",
                imageDescription: "N/A"
            },
            {
                choice: "Voter",
                correct: false,
                feedback: "Almost! 🗳️ This shows the voter record's inactive status",
                imageDescription: "N/A"
            },
        ],
    },
    {// Voter
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true",
        context: "Voter identification 🗳️",
        options: [
            {
                choice: "Vote",
                correct: false,
                feedback: "Close! ✋ This is the person ('voter') not the action ('vote')",
                imageDescription: "N/A"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "Not quite! 📁 This specifically identifies a voter",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "Almost! 👤 This is about voter identity, not personal details",
                imageDescription: "N/A"
            },
            {
                choice: "Voter",
                correct: true,
                feedback: "Perfect! 🗳️ You recognized the sign for 'voter'",
                imageDescription: "Hand making V shape near chest"
            },
        ],
    },
    {//Certificate
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true",
        context: "Voter documents 📜",
        options: [
            {
                choice: "Letter C",
                correct: false,
                feedback: "Almost! ✋ This is the full word 'certificate', not just the letter",
                imageDescription: "N/A"
            },
            {
                choice: "Certificate",
                correct: true,
                feedback: "Correct! 📜 You identified the voter certificate sign",
                imageDescription: "Hands mimicking holding and presenting a document"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "Close! 📁 This is specifically a certificate document",
                imageDescription: "N/A"
            },
            {
                choice: "Top of the Morning",
                correct: false,
                feedback: "Wrong category! ☀️ This is about voter documents, not greetings",
                imageDescription: "N/A"
            },
        ],
    },
    {//VOTE 
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true",
        context: "Voting action 🗳️",
        options: [
            {
                choice: "Vote",
                correct: true,
                feedback: "Exactly! ✅ You recognized the sign for casting a vote",
                imageDescription: "Hand mimicking dropping a ballot into a box"
            },
            {
                choice: "Voter",
                correct: false,
                feedback: "Close! 👤 This is the action ('vote') not the person ('voter')",
                imageDescription: "N/A"
            },
            {
                choice: "What?",
                correct: false,
                feedback: "Not quite! ❓ This is about the voting action",
                imageDescription: "N/A"
            },
            {
                choice: "Letter V",
                correct: false,
                feedback: "Almost! ✋ This is the full word 'vote', not just the letter",
                imageDescription: "N/A"
            },
        ],
    },
    // ... (continuing with the same pattern for all remaining questions)
    {//resident 6 months
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe255026b24fc41eeae6d7549a8cf38d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e255026b24fc41eeae6d7549a8cf38d7&alt=media&optimized=true",
        context: "Voter residency requirement 🏠",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "Not quite! ❓ This explains residency requirements",
                imageDescription: "N/A"
            },
            { 
                choice: "Are you registered abroad?", 
                correct: false,
                feedback: "Wrong question! ✈️ This is about local residency duration",
                imageDescription: "N/A" 
            },
            { 
                choice: "How long have you been residing in your present barangay?", 
                correct: false,
                feedback: "Close! ⏳ This states the 6-month requirement",
                imageDescription: "N/A" 
            },
            { 
                choice: "If you are a registered voter, you must be a resident for at least 6 months.",
                correct: true,
                feedback: "Correct! ⏳ You identified the 6-month residency requirement explanation",
                imageDescription: "Hand showing six fingers then pointing downward for 'months'" 
            },
        ],
    },
    // C: Common answers
    {//registration next year
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F024a9f90929c4c93ac3d3d64cbbb61c3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=024a9f90929c4c93ac3d3d64cbbb61c3&alt=media&optimized=true",
        context: "Registration timeline 📅",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "Not quite! ❓ This is about future registration dates",
                imageDescription: "N/A"
            },
            { 
                choice: "Next year", 
                correct: false,
                feedback: "Almost! 📅 This is the full statement about registration timing",
                imageDescription: "N/A" 
            },
            { 
                choice: "The national election will be held next year. ", 
                correct: false,
                feedback: "Close! 🗳️ This refers to registration, not the election itself",
                imageDescription: "N/A" 
            },
            { 
                choice: "The next registration will be next year. ",
                correct: true,
                feedback: "Correct! 📅 You identified the future registration period announcement",
                imageDescription: "Hand moving forward while signing 'next year'" 
            },
        ],
    },
    {//election next year
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae5fd834e74640faa88ce31d010b3c57%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae5fd834e74640faa88ce31d010b3c57&alt=media&optimized=true",
        context: "Election timeline 🗳️",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "Not quite! ❓ This is about the election schedule",
                imageDescription: "N/A"
            },
            { 
                choice: "Next year", 
                correct: false,
                feedback: "Almost! 📅 This is the full statement about election timing",
                imageDescription: "N/A" 
            },
            { 
                choice: "The national election will be held next year. ", 
                correct: true,
                feedback: "Exactly! 🗳️ You recognized the election schedule announcement",
                imageDescription: "Hand moving forward while signing 'election next year'" 
            },
            { 
                choice: "The next registration will be next year. ",
                correct: false,
                feedback: "Close! ✏️ This refers to the election, not registration",
                imageDescription: "N/A" 
            },
        ],
    }
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