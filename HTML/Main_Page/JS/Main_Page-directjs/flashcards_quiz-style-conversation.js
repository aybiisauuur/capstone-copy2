document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const flashcard = document.querySelector('.flashcard');
    const video = document.querySelector('.card-video');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('previous-button');
    const shuffleButton = document.getElementById('shuffle-button');
    const resetButton = document.getElementById('reset-button');
    const understoodBtn = document.getElementById('understood-btn');
    const practiceBtn = document.getElementById('practice-btn');
    const summaryContainer = document.getElementById('summary-container');
    const tryAgainBtn = document.getElementById('try-again-btn');
    const flashcardContainer = document.querySelector('.flashcard-container');
    const instructionText = document.querySelector('p');
    const feedbackButtons = document.querySelector('.feedback-buttons');
    const buttonGroups = document.querySelectorAll('.button-group');

    // Flashcards data - add your questions here
    let flashcards = [
        {
            frontText: "Deaf",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true"
        },

        {
            frontText: "Filipino Sign Language (FSL)",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true"
        },

        {
            frontText: "Hard-of-Hearing",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true"
        },

        {
            frontText: "Hearing",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true"
        },

        {
            frontText: "My name is ____.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true"
        },

        {
            frontText: "Yes/Agree",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true"
        },

        {
            frontText: "No/Disagree",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true"
        },

    ];

    const originalFlashcards = [...flashcards]; // Copy for reset functionality
    let currentCardIndex = 0;
    let cardStatus = {}; // Tracks card status ('understood' or 'practice')
    let viewedCards = new Set(); // Tracks viewed cards

    // Initialize the flashcard
    function updateFlashcard() {
        flashcard.classList.remove('flipped');
        video.pause();
        video.currentTime = 0;
        document.querySelector('.front h2').textContent = flashcards[currentCardIndex].frontText;
        video.querySelector('source').src = flashcards[currentCardIndex].videoSrc;
        video.load();
        viewedCards.add(currentCardIndex);
    }

    // Check if all cards have been viewed
    function checkCompletion() {
        return viewedCards.size === flashcards.length;
    }

    // Show summary screen
    function showSummary() {
        // Hide flashcard elements
        flashcardContainer.style.display = 'none';
        instructionText.style.display = 'none';
        feedbackButtons.style.display = 'none';
        buttonGroups.forEach(group => {
            group.style.display = 'none';
        });

        // Prepare and show summary
        prepareSummaryContent();
        summaryContainer.style.display = 'block';
    }

    // Prepare summary content
    function prepareSummaryContent() {
        summaryContainer.innerHTML = '<h3>Flashcard Summary</h3>';

        // Initialize cardStatus if needed
        if (!cardStatus) cardStatus = {};

        // Calculate stats
        const totalCards = flashcards.length;
        let understoodCount = 0;
        let practiceCount = 0;
        const understoodCards = [];
        const practiceCards = [];

        // Process all flashcards
        flashcards.forEach((card, index) => {
            if (cardStatus[index] === undefined) {
                cardStatus[index] = 'practice';
            }

            if (cardStatus[index] === 'understood') {
                understoodCount++;
                understoodCards.push(card);
            } else {
                practiceCount++;
                practiceCards.push(card);
            }
        });

        const percentageUnderstood = Math.round((understoodCount / totalCards) * 100);

        // Add stats
        const statsElement = document.createElement('div');
        statsElement.className = 'summary-stats';
        statsElement.innerHTML = `
            <p>You marked <strong>${understoodCount}</strong> cards as <span class="understood-text">I understood</span>, 
            and <strong>${practiceCount}</strong> cards as <span class="practice-text">Needs Practice</span>.</p>
        `;
        summaryContainer.appendChild(statsElement);

        // Add feedback message
        const feedbackElement = document.createElement('div');
        feedbackElement.className = 'feedback-message';

        let feedbackText = '';
        let feedbackClass = '';

        if (percentageUnderstood === 100) {
            feedbackText = 'Perfect! You understood everything. Remember to continue practicing!';
            feedbackClass = 'perfect-feedback';
        } else if (percentageUnderstood >= 80) {
            feedbackText = 'Great job! Keep practicing and you\'ll get there!';
            feedbackClass = 'great-feedback';
        } else if (percentageUnderstood >= 50) {
            feedbackText = 'More practice! Let\'s go!';
            feedbackClass = 'good-feedback';
        } else if (percentageUnderstood >= 25) {
            feedbackText = 'Keep on practicing and you\'ll get there!';
            feedbackClass = 'ok-feedback';
        } else {
            feedbackText = 'Go practice! Please open the modules.';
            feedbackClass = 'poor-feedback';
        }

        // Add both classes to the element
        feedbackElement.classList.add('feedback-message', feedbackClass);
        feedbackElement.innerHTML = `<p>${feedbackText}</p>`;

        feedbackElement.innerHTML = `<p>${feedbackText}</p>`;
        summaryContainer.appendChild(feedbackElement);

        // Create lists container
        const listsContainer = document.createElement('div');
        listsContainer.className = 'summary-lists-container';

        // Understood list
        if (understoodCards.length > 0) {
            const understoodListContainer = document.createElement('div');
            understoodListContainer.className = 'summary-list-container';
            understoodListContainer.innerHTML = '<h4 class="understood-header">Understood:</h4>';
            const understoodList = document.createElement('div');
            understoodList.className = 'summary-list';

            understoodCards.forEach(card => {
                const item = document.createElement('div');
                item.className = 'summary-item understood-item';
                item.textContent = card.frontText;
                understoodList.appendChild(item);
            });

            understoodListContainer.appendChild(understoodList);
            listsContainer.appendChild(understoodListContainer);
        }

        // Practice list
        if (practiceCards.length > 0) {
            const practiceListContainer = document.createElement('div');
            practiceListContainer.className = 'summary-list-container';
            practiceListContainer.innerHTML = '<h4 class="practice-header">Needs Practice:</h4>';
            const practiceList = document.createElement('div');
            practiceList.className = 'summary-list';

            practiceCards.forEach(card => {
                const item = document.createElement('div');
                item.className = 'summary-item practice-item';
                item.textContent = card.frontText;
                practiceList.appendChild(item);
            });

            practiceListContainer.appendChild(practiceList);
            listsContainer.appendChild(practiceListContainer);
        }

        summaryContainer.appendChild(listsContainer);

        // Add try again button
        const tryAgainBtn = document.createElement('button');
        tryAgainBtn.id = 'try-again-btn';
        tryAgainBtn.className = 'try-again-btn';
        tryAgainBtn.textContent = 'Try Again';
        tryAgainBtn.addEventListener('click', resetToFlashcards);
        summaryContainer.appendChild(tryAgainBtn);
    }

    // Reset to flashcards view
    function resetToFlashcards() {
        summaryContainer.style.display = 'none';
        currentCardIndex = 0;
        viewedCards = new Set();
        cardStatus = {};

        // Show all flashcard elements
        flashcardContainer.style.display = 'block';
        instructionText.style.display = 'block';
        feedbackButtons.style.display = 'flex';
        navigationButtons.forEach(row => row.style.display = 'flex');
        buttonGroups

        updateFlashcard();
    }

    // Event listeners
    flashcard.addEventListener('click', function () {
        this.classList.toggle('flipped');
        if (this.classList.contains('flipped')) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });

    nextButton.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        updateFlashcard();
    });

    prevButton.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        updateFlashcard();
    });

    shuffleButton.addEventListener('click', () => {
        // Shuffle the flashcards array
        for (let i = flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
        }
        currentCardIndex = 0;
        updateFlashcard();
    });

    resetButton.addEventListener('click', () => {
        flashcards = [...originalFlashcards];
        currentCardIndex = 0;
        cardStatus = {};
        viewedCards = new Set();
        summaryContainer.style.display = 'none';

        // Show all elements
        flashcardContainer.style.display = 'block';
        instructionText.style.display = 'block';
        feedbackButtons.style.display = 'flex';
        buttonGroups.forEach(group => group.style.display = 'flex');

        updateFlashcard();
    });

    understoodBtn.addEventListener('click', () => {
        if (!cardStatus) cardStatus = {};
        cardStatus[currentCardIndex] = 'understood';
        viewedCards.add(currentCardIndex);

        if (!checkCompletion()) {
            nextButton.click();
        } else {
            showSummary();
        }
    });

    practiceBtn.addEventListener('click', () => {
        if (!cardStatus) cardStatus = {};
        cardStatus[currentCardIndex] = 'practice';
        viewedCards.add(currentCardIndex);

        if (!checkCompletion()) {
            nextButton.click();
        } else {
            showSummary();
        }
    });

    tryAgainBtn.addEventListener('click', resetToFlashcards);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            flashcard.classList.toggle('flipped');
            if (flashcard.classList.contains('flipped')) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
        if (e.code === 'ArrowRight') nextButton.click();
        if (e.code === 'ArrowLeft') prevButton.click();
    });

    // Initialize
    updateFlashcard();
});