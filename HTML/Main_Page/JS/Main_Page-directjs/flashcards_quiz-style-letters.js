document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const flashcard = document.querySelector('.flashcard');
    const video = document.querySelector('.card-video');
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
    const loadingElement = document.getElementById('loading');
    const loadingText = document.getElementById('loading-text');
    const flashcardInstruction = document.getElementById('instruction');
    
    // Flashcards data - add your questions here
    let flashcards = [
        {
            frontText: "A",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5fccd86c89ca4a819eff4375249c331f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5fccd86c89ca4a819eff4375249c331f&alt=media&optimized=true"
        },

        {
            frontText: "B",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F290cea0025474b589dc5cb8eb49f3ba9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=290cea0025474b589dc5cb8eb49f3ba9&alt=media&optimized=true"
        },

        {
            frontText: "C",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F54011d16d83f43a0b08e29cb4bd3b85a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=54011d16d83f43a0b08e29cb4bd3b85a&alt=media&optimized=true"
        },

        {
            frontText: "D",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true"
        },

        {
            frontText: "E",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F09d452abb113431c964f677706fdf206%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=09d452abb113431c964f677706fdf206&alt=media&optimized=true"
        },

        {
            frontText: "F",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd2f028d37e4e808c8f62e7bca974d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd2f028d37e4e808c8f62e7bca974d7&alt=media&optimized=true"
        },

        {
            frontText: "G",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F62e09cc0c727427bb995cc959baaa951%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=62e09cc0c727427bb995cc959baaa951&alt=media&optimized=true"
        },

        {
            frontText: "H",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F12ea87b8d6f04cafa323c0fe3c4c3ad7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=12ea87b8d6f04cafa323c0fe3c4c3ad7&alt=media&optimized=true"
        },

        {
            frontText: "I",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F65a19409f4ca49778f42efa65a2e0437%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=65a19409f4ca49778f42efa65a2e0437&alt=media&optimized=true"
        },

        {
            frontText: "J",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6f261a2fc88d4a459ff0229ad9f350db%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6f261a2fc88d4a459ff0229ad9f350db&alt=media&optimized=true"
        },

        {
            frontText: "K",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6073f9a673414f869083f07dff1b3a62%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6073f9a673414f869083f07dff1b3a62&alt=media&optimized=true"
        },

        {
            frontText: "L",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9947ca53a38d4c12be5dffa6c417b1c9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9947ca53a38d4c12be5dffa6c417b1c9&alt=media&optimized=true"
        },

        {
            frontText: "M",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true"
        },

        {
            frontText: "N",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true"
        },

        {
            frontText: "O",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc650704d906a47629b5319f1d8bcbb92%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c650704d906a47629b5319f1d8bcbb92&alt=media&optimized=true"
        },

        {
            frontText: "P",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fda68ed21db654f09ac842fb09d54d55e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=da68ed21db654f09ac842fb09d54d55e&alt=media&optimized=true"
        },

        {
            frontText: "Q",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4b6e7e1bcee8420bbf510c7861ce36e1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4b6e7e1bcee8420bbf510c7861ce36e1&alt=media&optimized=true"
        },

        {
            frontText: "R",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F17fd031f360441939b33a4e72139a8fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=17fd031f360441939b33a4e72139a8fe&alt=media&optimized=true"
        },

        {
            frontText: "S",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5e99509e621f453cbc99f84d2cc8d0f3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5e99509e621f453cbc99f84d2cc8d0f3&alt=media&optimized=true"
        },

        {
            frontText: "T",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true"
        },

        {
            frontText: "U",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true"
        },

        {
            frontText: "V",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa0bf0d4590df4634afb7ae76bcea3e16%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a0bf0d4590df4634afb7ae76bcea3e16&alt=media&optimized=true"
        },

        {
            frontText: "W",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F471cdb61b53a41b090adbacfca397eea%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=471cdb61b53a41b090adbacfca397eea&alt=media&optimized=true"
        },

        {
            frontText: "X",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F132bfc4a83dc4173bee3c7658289d87f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=132bfc4a83dc4173bee3c7658289d87f&alt=media&optimized=true"
        },

        {
            frontText: "Y",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3b72a4324ea4828b05ab836bd08eead%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3b72a4324ea4828b05ab836bd08eead&alt=media&optimized=true"
        },

        {
            frontText: "Z",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd4f7fae673114c26aa27b18730e530a0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d4f7fae673114c26aa27b18730e530a0&alt=media&optimized=true"
        },

    ];

    const originalFlashcards = [...flashcards]; // Copy for reset functionality
    let currentCardIndex = 0;
    let cardStatus = {}; // Tracks card status ('understood' or 'practice')
    let viewedCards = new Set(); // Tracks viewed cards

    function init() {
        // Start the quiz immediately
        startQuiz();
    }

    function showLoading(show, message = "Preparing your quiz...") {
        // Cache DOM elements
        const instructionElement = document.getElementById('instruction');
        const contentElements = document.querySelectorAll(
            '.flashcard, .instruction-text, .feedback-buttons, .button-group'
        );
    
        if (show) {
            // Show loading state
            loadingElement.style.display = 'flex';
            loadingElement.style.flexDirection = 'column';
            loadingElement.style.alignItems = 'center';
            loadingElement.style.justifyContent = 'center';
            loadingText.textContent = message;
    
            // Hide content
            instructionElement.style.visibility = 'hidden';
            setElementsVisibility(contentElements, false);
        } else {
            // Hide loading state
            loadingElement.style.display = 'none';
            
            // Show content
            instructionElement.style.visibility = 'visible';
            setElementsVisibility(contentElements, true);
        }
    }
    
    // Helper function to set visibility for multiple elements
    function setElementsVisibility(elements, visible) {
        elements.forEach(el => {
            el.style.opacity = visible ? '1' : '0';
            el.style.pointerEvents = visible ? 'auto' : 'none';
        });
    }

    function startQuiz() {
        showLoading(true, "Loading flashcards...");

        // Hide other elements initially
        document.getElementById('instruction').style.visibility = 'hidden';
        document.querySelector('.flashcard').style.visibility = 'hidden';
        document.querySelector('.feedback-buttons').style.visibility = 'hidden';
        document.querySelectorAll('.button-group').forEach(group => {
            group.style.visibility = 'hidden';
        });

        // Simulate loading 
        setTimeout(() => {
            // Initialize your flashcards
            updateFlashcard();

            // Hide loading spinner
            showLoading(false);

            // Show all elements
            document.querySelector('.flashcard').style.visibility = 'visible';
            document.getElementById('instruction').style.visibility = 'visible';
            document.querySelector('p').style.visibility = 'visible';
            document.querySelector('.feedback-buttons').style.visibility = 'visible';
            document.querySelectorAll('.button-group').forEach(group => {
                group.style.visibility = 'visible';
            });

        }, 1500);
    }

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
        flashcardInstruction.style.display = 'none';
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
        summaryContainer.classList.add('summary-animated'); // Add animation class

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

        feedbackElement.classList.add('feedback-message', feedbackClass);
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

        // Animate elements sequentially
        setTimeout(() => {
            statsElement.style.opacity = 1;
            statsElement.style.animation = 'fadeIn 0.5s ease-out forwards';

            setTimeout(() => {
                feedbackElement.style.opacity = 1;
                feedbackElement.style.animation = 'fadeIn 0.5s ease-out forwards';

                setTimeout(() => {
                    listsContainer.style.opacity = 1;
                    listsContainer.style.animation = 'fadeIn 0.5s ease-out forwards';

                    setTimeout(() => {
                        tryAgainBtn.style.opacity = 1;
                        tryAgainBtn.style.animation = 'fadeIn 0.5s ease-out forwards';
                    }, 200);
                }, 200);
            }, 200);
        }, 0);
    }

    function resetToFlashcards() {
        // Show loading spinner with message
        showLoading(true, "Resetting flashcards...");

        // Add a small delay to ensure smooth transition
        setTimeout(() => {
            // Reset all flashcard data
            flashcards = [...originalFlashcards];
            currentCardIndex = 0;
            cardStatus = {};
            viewedCards = new Set();
            summaryContainer.style.display = 'none';

            // Show all flashcard elements
            flashcardContainer.style.display = 'block';
            instructionText.style.display = 'block';
            feedbackButtons.style.display = 'flex';
            buttonGroups.forEach(group => group.style.display = 'flex');

            // Update the flashcard
            updateFlashcard();

            // Hide loading spinner after a brief delay
            setTimeout(() => {
                showLoading(false);
            }, 300);
        }, 800);
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

    shuffleButton.addEventListener('click', () => {
        showLoading(true, "Shuffling cards...");

        // Use setTimeout to allow UI to update before heavy operation
        setTimeout(() => {
            // Your shuffle logic
            for (let i = flashcards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
            }
            currentCardIndex = 0;
            updateFlashcard();

            showLoading(false);
        }, 800); // Small delay to ensure UI updates
    });

    resetButton.addEventListener('click', () => {
        showLoading(true, "Resetting cards...");

        setTimeout(() => {
            flashcards = [...originalFlashcards];
            currentCardIndex = 0;
            cardStatus = {};
            viewedCards = new Set();
            summaryContainer.style.display = 'none';
            updateFlashcard();

            showLoading(false);
        }, 800);
    });

    understoodBtn.addEventListener('click', () => {
        if (!cardStatus) cardStatus = {};
        cardStatus[currentCardIndex] = 'understood';
        viewedCards.add(currentCardIndex);

        if (!checkCompletion()) {
            // Replace nextButton.click() with direct navigation
            currentCardIndex = (currentCardIndex + 1) % flashcards.length;
            updateFlashcard();
        } else {
            showSummary();
        }
    });

    practiceBtn.addEventListener('click', () => {
        if (!cardStatus) cardStatus = {};
        cardStatus[currentCardIndex] = 'practice';
        viewedCards.add(currentCardIndex);

        if (!checkCompletion()) {
            // Replace nextButton.click() with direct navigation
            currentCardIndex = (currentCardIndex + 1) % flashcards.length;
            updateFlashcard();
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
    });

    // Initialize
    init();
});