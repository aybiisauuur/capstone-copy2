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
        options: [
            {
                choice: "Nice to meet you",
                correct: false,
                feedback: "Hands meeting in the middle indicates 'Nice to meet'🤝",
                imageDescription: "Sweeping the hands and fingers pointing and meeting together in the middle"
            },
            {
                choice: "Salute",
                correct: false,
                feedback: "not a greeting more like an action of respect 'Salute'😑",
                imageDescription: "use to give respect to military or authority"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "waving motion is used for saying goodbye 👋 not seeing someone for a long time",
                imageDescription: "Hand waving from face height"
            },
            {
                choice: "Long time no see",
                correct: true,
                feedback: "The upward motion indicates 'Long time no see'🤷‍♂️",
                imageDescription: "Hands in front of the persons chin, palm facing each other moving fro and back"
            },
        ],
    },
    {//Seeyoulater
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
        options: [
            {
                choice: "Meet me here?",
                correct: false,
                feedback: "Is an indication of saying to see you in a location 📌",
                imageDescription: "Not much of a greeting sign",
            },
            {
                choice: "Are you okay?",
                correct: false,
            },
            {
                choice: "See you later",
                correct: true,
                feedback: "The action indication of seeing and motion of afternoon/later 'See you later'👋",
                imageDescription: "Pointing to the eye and motioning it upwards to the middle"
            },
            {
                choice: "You're welcome",
                correct: false,
                feedback: "The upward motion indicates 'You're welcome'🤗",
                imageDescription: "Three fingers up from the chin and curving towards the belly"
            },
        ],
    },
    {//Nicetomeetyou
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
        options: [
            {
                choice: "Nice to meet you",
                correct: true,
                feedback: "The upward motion indicates 'Nice to meet you'🤗",
                imageDescription: "Hands in front of the persons chin, palm facing each other moving fro and back",
            },
            { 
                choice: "You Are?", 
                correct: false, 
            },
            { 
                choice: "See you later", 
                correct: false, 
            },
            { 
                choice: "Goodbye",
                correct: false, 
            },
        ],
    },
];

const OPENAI_API_KEY = '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';
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

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
    questions.forEach((_, index) => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        if (index < currentQuestionIndex) {
            segment.classList.add(userAnswers[index] ? 'correct' : 'incorrect');
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

async function getAIFeedback(wrongDesc, correctDesc, context) {
    console.log('Sending AI request...', { wrongDesc, correctDesc, context });
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert sign language tutor giving constructive feedback.'
                    },
                    {
                        role: 'user',
                        content: `I chose: '${wrongDesc}', but the correct sign was: '${correctDesc}' in the context of: '${context}'. Help me understand why.`
                    }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        console.log('AI response:', data);
        return data?.choices?.[0]?.message?.content || '🤖 No response from the AI.';
    } catch (error) {
        console.error('OpenAI feedback error:', error);
        return '⚠️ Could not connect to OpenAI. Please check your internet or API key.';
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
    
    // Show basic feedback immediately
    resultElement.textContent = isCorrect ? 
        `✅ Correct! ${option.feedback}` : 
        `❌ Incorrect. ${option.feedback}`;
    resultElement.className = isCorrect ? 'result correct' : 'result wrong';
    
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