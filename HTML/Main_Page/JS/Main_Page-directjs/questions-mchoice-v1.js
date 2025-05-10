// Pre-configured FSL videos and AI-generated questions
const FSL_QUIZ_DATA = [
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true",
        sign: "What?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["What?", "Where?", "Who?", "Why?"],
        correctAnswer: "What?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F83a4a5b85f1a4b5ca1514d29bef18e9f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=83a4a5b85f1a4b5ca1514d29bef18e9f&alt=media&optimized=true",
        sign: "Who?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Where?", "Why?", "How?", "Who?"],
        correctAnswer: "Who?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true",
        sign: "Where?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Where?", "What are you doing?", "How old are you?", "Who?"],
        correctAnswer: "Where?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true",
        sign: "Why?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["What are you doing?", "Why?", "What?", "Who?"],
        correctAnswer: "Why?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F136be3a00e8943a68a786b15fa63fff6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=136be3a00e8943a68a786b15fa63fff6&alt=media&optimized=true",
        sign: "How old are you?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Age", "How old are you?", "What?", "How many?"],
        correctAnswer: "How old are you?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true",
        sign: "When?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["When?", "Roundabout", "Where?", "What?"],
        correctAnswer: "When?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true",
        sign: "How are you?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["How?", "You", "How are you?", "Why?"],
        correctAnswer: "How are you?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F72ada87ecfc548df94317bbf3f127957%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=72ada87ecfc548df94317bbf3f127957&alt=media&optimized=true",
        sign: "What are you doing?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["What are you doing?", "You", "How are you?", "What?"],
        correctAnswer: "What are you doing?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff7f0065ef91d4ad99d0075eb5d482602%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f7f0065ef91d4ad99d0075eb5d482602&alt=media&optimized=true",
        sign: "How?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Break", "How?", "How are you?", "You"],
        correctAnswer: "How?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5462c54d4b494113be5805bb98f8a083%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5462c54d4b494113be5805bb98f8a083&alt=media&optimized=true",
        sign: "Where are you from",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Where?", "How to open?", "Where are you from?", "From"],
        correctAnswer: "Where are you from?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1af55d1880b646de85d1f9fab624541e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1af55d1880b646de85d1f9fab624541e&alt=media&optimized=true",
        sign: "Do you understand?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Idea", "Do you understand?", "I don't know", "Do"],
        correctAnswer: "Do you understand?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F64a4f65b9877436cbecb3ec5d804a889%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=64a4f65b9877436cbecb3ec5d804a889&alt=media&optimized=true",
        sign: "Can you help me?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Help", "How are you?", "I don't know", "Can you help me?"],
        correctAnswer: "Can you help me?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc7bb3d9a5dd54ba5875b95c91b381b3d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c7bb3d9a5dd54ba5875b95c91b381b3d&alt=media&optimized=true",
        sign: "What time is it?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Time", "What time is it?", "What?", "Watch"],
        correctAnswer: "What time is it?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbb7fcf30b9a145a1b0b3dcc7988ab909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bb7fcf30b9a145a1b0b3dcc7988ab909&alt=media&optimized=true",
        sign: "What is your name?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Name", "What is your name?", "What?", "Where?"],
        correctAnswer: "What is your name?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true",
        sign: "Where are you going?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Where?", "Where are you going?", "When?", "Go"],
        correctAnswer: "Where are you going?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true",
        sign: "Where do you live?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Where do you live?", "Where are you going?", "Where?", "I don't know"],
        correctAnswer: "Where do you live?"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd7d7ea0c45874ab5ad0956e6e43d443c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d7d7ea0c45874ab5ad0956e6e43d443c&alt=media&optimized=true",
        sign: "What do you do? (eg. job, school)",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["What do you do? (eg. job, school)", "School", "What are you doing?", "What?"],
        correctAnswer: "What do you do? (eg. job, school)"
    },
    {
        videoUrl: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F69ab6ce319b04f3982eedb55c99fb8dd%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=69ab6ce319b04f3982eedb55c99fb8dd&alt=media&optimized=true",
        sign: "Are you married or single?",
        question: "Select the correct word or phrase for the sign language shown above.",
        options: ["Married", "Which?", "Are you married or single?", "What?"],
        correctAnswer: "Are you married or single?"
    },
];

// DOM elements
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

let answered = []

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
            // Check if the user's answer was correct
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === questions[index].correctAnswer;
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

    // Simulate loading time
    setTimeout(() => {
        // Shuffle all questions and select first 10
        const shuffledQuestions = [...FSL_QUIZ_DATA].sort(() => Math.random() - 0.5);
        questions = shuffledQuestions.slice(0, 10); // Take first 10 from shuffled array
        
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = new Array(questions.length).fill(null);

        loadingElement.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
        scoreDisplay.textContent = '';
    }, 800);
}

function updateProgress() {
    const segments = progressBar.querySelectorAll('.progress-segment');
    const currentSegment = segments[currentQuestionIndex];
    
    // Remove any existing classes
    currentSegment.classList.remove('current', 'correct', 'incorrect');
    
    // Check if the user's answer was correct
    const userAnswer = userAnswers[currentQuestionIndex];
    const isCorrect = userAnswer === questions[currentQuestionIndex].correctAnswer;
    
    // Add the appropriate class
    currentSegment.classList.add(isCorrect ? 'correct' : 'incorrect');
}

// Display the current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // Quiz finished
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    signVideo.src = question.videoUrl;

    // Load the video (important for some browsers)
    signVideo.load();

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create new options (shuffled)
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.option = option;

        // If this question was already answered, show the user's previous choice
        if (userAnswers[currentQuestionIndex] !== null) {
            if (option === question.correctAnswer) {
                optionElement.classList.add('correct');
            } else if (option === userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex] !== question.correctAnswer) {
                optionElement.classList.add('wrong');
            }
        }

        optionElement.addEventListener('click', () => selectOption(optionElement));

        optionsContainer.appendChild(optionElement);
    });

    // If this question was already answered, show the result
    if (userAnswers[currentQuestionIndex] !== null) {
        const isCorrect = userAnswers[currentQuestionIndex] === question.correctAnswer;
        resultElement.textContent = isCorrect
            ? "Correct! Good job! 🎉"
            : `Wrong answer, sorry! The correct answer is: ${question.correctAnswer}`;
        resultElement.className = isCorrect ? 'result correct' : 'result wrong';
        nextBtn.style.display = 'block';
    } else {
        // Reset state for new question
        selectedOption = null;
        answerSubmitted = false;
        resultElement.textContent = '';
        resultElement.className = 'result';
        nextBtn.style.display = 'none';
    }

    questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;

    initializeProgressBar(); 

    resultElement.textContent = '';
    resultElement.className = 'result';
    nextBtn.style.display = 'none';
    answered = false;
    optionsContainer.style.pointerEvents = 'auto';
}

// Handle option selection
function selectOption(optionElement) {
    if (answerSubmitted || userAnswers[currentQuestionIndex] !== null) return;

    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selected class to clicked option
    optionElement.classList.add('selected');
    selectedOption = optionElement.dataset.option;

    // Automatically check the answer when an option is selected
    checkAnswer();
    updateProgress();
}

function checkAnswer() {
    if (!selectedOption || answerSubmitted || userAnswers[currentQuestionIndex] !== null) return;

    answerSubmitted = true;
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    // Store user's answer
    userAnswers[currentQuestionIndex] = selectedOption;

    // Update score if correct
    if (isCorrect) {
        score++;
    }

    // Show correct/wrong answers
    document.querySelectorAll('.option').forEach(opt => {
        if (opt.dataset.option === currentQuestion.correctAnswer) {
            opt.classList.add('correct');
        } else if (opt.dataset.option === selectedOption && !isCorrect) {
            opt.classList.add('wrong');
        }
    });

    // Show result
    resultElement.textContent = isCorrect
        ? "Correct! Good job! 🎉"
        : `Wrong answer, sorry! The correct answer is: ${currentQuestion.correctAnswer}`;
    resultElement.className = isCorrect ? 'result correct' : 'result wrong';

    // Update the progress bar
    updateProgress();

    // Force the Next button to be visible
    nextBtn.style.display = 'block';
    nextBtn.style.visibility = 'visible';
    scoreDisplay.textContent = `Score: ${score} out of ${currentQuestionIndex + 1}`;
}

// Move to next question
function nextQuestion() {
    // First check if we need to submit the current answer
    if (!answerSubmitted && selectedOption) {
        checkAnswer();
        return;
    }

    // Then move to next question
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

// Start the app
init();