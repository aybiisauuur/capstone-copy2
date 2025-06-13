// Pre-configured FSL videos and AI-generated questions
import runGemini from './greetings-mchoice-v2.js';
const allQuestions = [
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
            const correctAnswer = question.correctAnswer;
            const options = [...question.options];
            
            // Shuffle options
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }
            
            return {
                ...question,
                options: options.map(opt => ({
                    choice: opt,
                    correct: opt === correctAnswer,
                    feedback: opt === correctAnswer ? 
                        `The correct answer is ${correctAnswer}.` : 
                        `The correct answer was ${correctAnswer}.`
                }))
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
    questionText.textContent = question.question; 
    signVideo.src = question.videoUrl;
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
    initializeProgressBar();

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