import runGemini from './greetings-mchoice-v2.js';

const allQuestions = [
    {//goodMorning
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdaaf40ef88e84bb6b94952f07a98a26c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=daaf40ef88e84bb6b94952f07a98a26c&alt=media&optimized=true",
        context: "Identifying morning greeting signs",
        options: [
            {
                choice: "Good Morning",
                correct: true,
                feedback: "The upward palm movement represents sunrise 🌅",
                imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "This horizontal motion indicates afternoon ↔️ not morning",
                imageDescription: "Flat hand moving horizontally across chest level"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Downward motion is used for evening 🌙 not morning",
                imageDescription: "Hand moves downward from forehead with palm facing body"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "waving hands signify 'Goodbye'👋",
                imageDescription: "Hands height close to face, waving"
            }
        ]
    },
    {//goodAfternoon
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd97c585713d542dda1cb425550c76f0c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d97c585713d542dda1cb425550c76f0c&alt=media&optimized=true",
        context: "Identifying afternoon greeting signs",
        options: [
            {
                choice: "Good Morning",
                correct: false,
                feedback: "The movement is not related, the upward motion signifies rising 🌅",
                imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
            },
            {
                choice: "Good Afternoon",
                correct: true,
                feedback: "The horizontal movement indicates afternoon ↔️",
                imageDescription: "Flat hand moving horizontally across chest level"

            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Downward motion is used for evening 🌙 not morning",
                imageDescription: "Hand moves downward from forehead with palm facing body"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "waving hands signify 'Goodbye'👋",
                imageDescription: "Hands height close to face, waving"
            },
        ],
    },
    {//goodEvening
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true",
        options: [
            {
                choice: "Good Morning",
                correct: false,
                feedback: "The movement is not related, the upward motion signifies rising 🌅",
                imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "This horizontal motion indicates afternoon ↔️ not morning",
                imageDescription: "Flat hand moving horizontally across chest level"
            },
            {
                choice: "Good Evening",
                correct: true,
                feedback: "The downward motion indicates evening 🌙",
                imageDescription: "Hand moves downward from forehead with palm facing body"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "waving hands signify 'Goodbye'👋",
                imageDescription: "Hands height close to face, waving"
            },
        ],
    },
    {//goodbye
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdba4a7e655e04153ae79ebc7ff9e22a6%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=dba4a7e655e04153ae79ebc7ff9e22a6&alt=media&optimized=true",
        options: [
            {
                choice: "Good Morning",
                correct: false,
                feedback: "The movement is not related, the upward motion signifies rising 🌅",
                imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "This horizontal motion indicates afternoon ↔️ not morning",
                imageDescription: "Flat hand moving horizontally across chest level"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Downward motion is used for evening 🌙 not morning",
                imageDescription: "Hand moves downward from forehead with palm facing body"
            },
            {
                choice: "Goodbye",
                correct: true,
                feedback: "Waving hands signify 'Goodbye'👋",
                imageDescription: "Hands height close to face, waving"
            },
        ],
    },
    {//Hi/hello
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd702dd1b2538458098cba218905c9987%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d702dd1b2538458098cba218905c9987&alt=media&optimized=true",
        options: [
            {
                choice: "Hi / Hello",
                correct: true,
                feedback: "The upward motion indicates 'Hi'🙋‍♂️",
                imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "This horizontal motion indicates afternoon ↔️ not morning",
                imageDescription: "Flat hand moving horizontally across chest level"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Downward motion is used for evening 🌙 not morning",
                imageDescription: "Hand moves downward from forehead with palm facing body"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "waving hands signify 'Goodbye'👋",
                imageDescription: "Hands height close to face, waving"
            },
        ],
    },
    {//Thankyou
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true",
        options: [
            {
                choice: "Nice to Meet You",
                correct: false,
                feedback: "Hands meeting in the middle indicates 'Nice to meet'🤝",
                imageDescription: "Sweeping the hands and fingers pointing and meeting together in the middle"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "This horizontal motion indicates afternoon ↔️ not morning",
                imageDescription: "Flat hand moving horizontally across chest level"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Downward motion is used for evening 🌙 not morning",
                imageDescription: "Hand moves downward from forehead with palm facing body"
            },
            {
                choice: "Thank You",
                correct: true,
                feedback: "The upward motion indicates 'Thank you'☺️",
                imageDescription: "Hands in front of the persons chin, palm facing each other moving fro and back"
            },
        ],
    },
    {//YoureWelcome
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true",
        options: [
            {
                choice: "Nice to meet you",
                correct: false,
                feedback: "Hands meeting in the middle indicates 'Nice to meet'🤝",
                imageDescription: "Sweeping the hands and fingers pointing and meeting together in the middle"
            },
            {
                choice: "You're Welcome",
                correct: true,
                feedback: "The upward motion indicates 'You're welcome'🤗",
                imageDescription: "Three fingers up from the chin and curving towards the belly"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Downward motion is used for evening 🌙 not morning",
                imageDescription: "Hand moves downward from forehead with palm facing body"
            },
            {
                choice: "Top of the Morning",
                correct: false,
                feedback: "Not a formal sign for 'You're Welcome'😌",
                imageDescription: "Not a formal Filipino Sign Language (FSL) sign"
            },
        ],
    },
    {//takecare
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9aa5c6e3c22a488c81ea9b78cd9d0a51%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=9aa5c6e3c22a488c81ea9b78cd9d0a51&alt=media&optimized=true",
        options: [
            {
                choice: "Take Care",
                correct: true,
                feedback: "Hands on top of each other indicates 'Take care'🫂",
                imageDescription: "Hands on the side, on top of each other circling in front"
            },
            {
                choice: "Are you okay?",
                correct: false,
                feedback: "not a greeting 'Are you ok?'😑",
                imageDescription: "Not a greeting more like a question"
            },
            {
                choice: "What?",
                correct: false,
                feedback: "not a greeting 'What?'🙄",
                imageDescription: "hands palm facing right up, doing a circular motion stationary to position"
            },
            {
                choice: "Mixing",
                correct: false,
                feedback: "Not greeting more like an action 'mixing' 🥣",
                imageDescription: "Used for something else like baking 'mixing'"
            },
        ],
    },
    {//LongTimeNoSee
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
        context: "FSL Greetings 🤟",
        options: [
            {
                choice: "Nice to meet you",
                correct: false,
                feedback: "Not quite! 🤝 In FSL, 'Nice to meet you' uses a different hand motion where palms briefly touch",
                imageDescription: "Both hands with palms facing inward meet briefly at chest level"
            },
            {
                choice: "Salute",
                correct: false,
                feedback: "No! ✋ In Filipino Sign Language, this isn't the military salute. The hand motion is different for 'Long time no see'",
                imageDescription: "Hand flat against forehead (military salute gesture)"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "Close! 👋 While both are greetings, 'Goodbye' in FSL uses a wave motion, not this back-and-forth movement near the chin",
                imageDescription: "Hand waving side-to-side at shoulder height"
            },
            {
                choice: "Long time no see",
                correct: true,
                feedback: "Perfect! 🎉 You recognized the FSL sign for 'Long time no see' (hands moving back and forth near chin)",
                imageDescription: "Both hands palms facing each other, moving horizontally back and forth at chin level"
            },
        ],
    },
    {//Seeyoulater
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
        context: "FSL Parting Phrases ✌️",
        options: [
            {
                choice: "Meet me here?",
                correct: false,
                feedback: "Not exactly! 📍 In FSL, this would involve pointing to a location, not the eye-to-side motion",
                imageDescription: "Index finger pointing downward to indicate location"
            },
            {
                choice: "Are you okay?",
                correct: false,
                feedback: "Incorrect! ❓ The FSL sign for 'Are you okay?' uses different hand shapes near the forehead",
                imageDescription: "Thumb and index finger forming 'O' shape moving from forehead outward"
            },
            {
                choice: "See you later",
                correct: true,
                feedback: "Excellent! 👁️ You identified the FSL sign for 'Kitakits' (point to eye then outward)",
                imageDescription: "Index finger pointing to eye then arcing outward"
            },
            {
                choice: "You're welcome",
                correct: false,
                feedback: "No! 🙏 In FSL, 'You're welcome' is signed with flat palms moving from chest outward",
                imageDescription: "Flat palms moving from chest outward in a giving motion"
            },
        ],
    },
    {//Nicetomeetyou
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
        context: "FSL Introductions 🤝",
        options: [
            {
                choice: "Nice to meet you",
                correct: true,
                feedback: "Correct! 🌟 You recognized the FSL sign for 'Ikinagagalak kitang makilala' (palms touching then separating gracefully)",
                imageDescription: "Palms touching briefly then separating outward with graceful motion"
            },
            {
                choice: "You Are?",
                correct: false,
                feedback: "Not quite! 👤 The FSL sign for 'You are?' involves pointing then a question facial expression",
                imageDescription: "Index finger pointing upward with questioning head tilt"
            },
            {
                choice: "See you later",
                correct: false,
                feedback: "Close! 👋 But this is the greeting sign, not the parting phrase",
                imageDescription: "N/A"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "Incorrect! ✋ 'Goodbye' in FSL uses a different waving motion",
                imageDescription: "Hand waving side-to-side at shoulder height"
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
    finalScoreDisplay.textContent = `Your score: ${score}/${questions.length}`;
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