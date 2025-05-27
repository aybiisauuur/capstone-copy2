import runGemini from './greetings-mchoice-v2.js';

// Letters A-M and Numbers 1-16
const allQuestions = [
    {//A
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5fccd86c89ca4a819eff4375249c331f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5fccd86c89ca4a819eff4375249c331f&alt=media&optimized=true",
        context: "Letter A in sign language 👋",
        options: [
            {
                choice: "A",
                correct: true,
                feedback: "Great job! 👍 That's the letter A in ASL (American Sign Language)",
                imageDescription: "Hand held up with fingers together and thumb pressed against the side"
            },
            {
                choice: "B",
                correct: false,
                feedback: "Oops! ❌ That's not the letter A. Try again!",
                imageDescription: "Different hand shape than letter A"
            },
            {
                choice: "C",
                correct: false,
                feedback: "Not quite! ✋ The letter A looks different in ASL",
                imageDescription: "Incorrect hand formation"
            },
            {
                choice: "D",
                correct: false,
                feedback: "Close, but no! 🤔 Remember the thumb position for A",
                imageDescription: "Similar but incorrect hand position"
            }
        ]
    },
    {// B
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F290cea0025474b589dc5cb8eb49f3ba9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=290cea0025474b589dc5cb8eb49f3ba9&alt=media&optimized=true",
        context: "Letter B in sign language ✋",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "Nope! ❌ The letter B has all fingers extended",
                imageDescription: "Hand with fingers together (incorrect for B)"
            },
            {
                choice: "B",
                correct: true,
                feedback: "Perfect! 🎉 You recognized the letter B correctly!",
                imageDescription: "Hand with palm facing out and fingers extended straight up"

            },
            {
                choice: "C",
                correct: false,
                feedback: "Not quite! ✋ The letter B doesn't curve the fingers",
                imageDescription: "Hand with curved fingers (incorrect)"
            },
            {
                choice: "D",
                correct: false,
                feedback: "Almost! 🤏 But the thumb should be tucked for B",
                imageDescription: "Hand with thumb extended (incorrect)"
            },
        ],
    },
    {//C
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F54011d16d83f43a0b08e29cb4bd3b85a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=54011d16d83f43a0b08e29cb4bd3b85a&alt=media&optimized=true",
        context: "Letter C in sign language 🤙",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "No! ❌ The letter C curves the fingers into a C shape",
                imageDescription: "Flat hand (incorrect for C)"
            },
            {
                choice: "B",
                correct: false,
                feedback: "Not quite! ✋ The letter C isn't straight like B",
                imageDescription: "Straight fingers (incorrect)"
            },
            {
                choice: "C",
                correct: true,
                feedback: "Excellent! 👏 You got the curved C shape right!",
                imageDescription: "Hand forming a C shape with curved fingers"
            },
            {
                choice: "D",
                correct: false,
                feedback: "Close! 🤏 But C has more curve than this",
                imageDescription: "Partial curve (incorrect)"
            },
        ],
    },
    {//D
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true",
        context: "Letter D in sign language 👉",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "No! ❌ The letter D points upward with index finger",
                imageDescription: "Closed fist (incorrect)"
            },
            {
                choice: "B",
                correct: false,
                feedback: "Not quite! ✋ D uses just one extended finger",
                imageDescription: "All fingers extended (incorrect)"
            },
            {
                choice: "C",
                correct: false,
                feedback: "Almost! 🤏 But D points up, not curved like C",
                imageDescription: "Curved hand (incorrect)"
            },
            {
                choice: "D",
                correct: true,
                feedback: "Perfect! 🎯 You nailed the D sign!",
                imageDescription: "Index finger pointing up with other fingers curled"
            },
        ],
    },
    {// E
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F09d452abb113431c964f677706fdf206%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=09d452abb113431c964f677706fdf206&alt=media&optimized=true",
        context: "Letter E in sign language ✊",
        options: [
            {
                choice: "E",
                correct: true,
                feedback: "Awesome! 👍 That's the letter E with fingers curled down",
                imageDescription: "Hand with fingers curled down over thumb"
            },
            {
                choice: "F",
                correct: false,
                feedback: "Not quite! ❌ E has all fingers curled, not just two",
                imageDescription: "Two fingers touching thumb (incorrect)"
            },
            {
                choice: "G",
                correct: false,
                feedback: "Oops! ✋ G points sideways, E curls all fingers",
                imageDescription: "Index finger pointing sideways (incorrect)"
            },
            {
                choice: "H",
                correct: false,
                feedback: "Close! 🤏 But E curls all fingers together",
                imageDescription: "Two fingers extended (incorrect)"
            },
        ],
    },
    // ... (continuing with the same pattern for all other letters and numbers)
    {// 1
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd032915078144d4297e2016420cd93d2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d032915078144d4297e2016420cd93d2&alt=media&optimized=true",
        context: "Number 1 in sign language ☝️",
        options: [
            {
                choice: "1",
                correct: true,
                feedback: "Perfect! 🎯 That's the number one with index finger up!",
                imageDescription: "Index finger extended upward"
            },
            {
                choice: "2",
                correct: false,
                feedback: "Not quite! ❌ One uses just the index finger",
                imageDescription: "Two fingers extended (incorrect)"
            },
            {
                choice: "3",
                correct: false,
                feedback: "Oops! ✋ Three fingers would be for number 3",
                imageDescription: "Three fingers extended (incorrect)"
            },
            {
                choice: "4",
                correct: false,
                feedback: "Close! 🤏 But one is just a single finger",
                imageDescription: "Four fingers extended (incorrect)"
            },
        ],
    },
    // ... (continuing with the same pattern for all numbers)
    {// 16
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0d24e2572969418ab3c85984188de5da%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0d24e2572969418ab3c85984188de5da&alt=media&optimized=true",
        context: "Number 16 in sign language 🤟",
        options: [
            {
                choice: "16",
                correct: true,
                feedback: "Excellent! 🎉 You recognized the number 16 correctly!",
                imageDescription: "Thumb extended with other fingers closed, then shaking motion"
            },
            {
                choice: "17",
                correct: false,
                feedback: "Not quite! ❌ 17 has a different movement pattern",
                imageDescription: "Similar but incorrect hand movement"
            },
            {
                choice: "6",
                correct: false,
                feedback: "Oops! ✋ 6 is just the first part of this sign",
                imageDescription: "Static hand position (missing movement)"
            },
            {
                choice: "7",
                correct: false,
                feedback: "Close! 🤏 But 16 includes both the handshape and movement",
                imageDescription: "Incorrect number gesture"
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
        questions = shuffledQuestions.slice(0, 15);

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