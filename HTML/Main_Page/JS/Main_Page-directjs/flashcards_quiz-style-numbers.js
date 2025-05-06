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
            frontText: "1",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd032915078144d4297e2016420cd93d2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d032915078144d4297e2016420cd93d2&alt=media&optimized=true"
        },

        {
            frontText: "2",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F76e1875707204d78bd83e663dc72356a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=76e1875707204d78bd83e663dc72356a&alt=media&optimized=true"
        },

        {
            frontText: "3",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true"
        },

        {
            frontText: "4",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd66d7209be94c40b3f79c25d106d082%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd66d7209be94c40b3f79c25d106d082&alt=media&optimized=true"
        },

        {
            frontText: "5",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe47908419cfd4fd0a84e9f55e1eb8e8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e47908419cfd4fd0a84e9f55e1eb8e8c&alt=media&optimized=true"
        },

        {
            frontText: "6",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5089f4e1f0d5480d96eb46ad11c1dabc%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5089f4e1f0d5480d96eb46ad11c1dabc&alt=media&optimized=true"
        },

        {
            frontText: "7",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7db247b436bf4ecb8336e18f93461b5a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7db247b436bf4ecb8336e18f93461b5a&alt=media&optimized=true"
        },

        {
            frontText: "8",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffa1a21fd83d54e1e8dd5b0e9a0df1efb%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fa1a21fd83d54e1e8dd5b0e9a0df1efb&alt=media&optimized=true"
        },

        {
            frontText: "9",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd53ae3657600478b8ed781c05aa09bb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d53ae3657600478b8ed781c05aa09bb7&alt=media&optimized=true"
        },

        {
            frontText: "10",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb407e21cce084ae5a0c055a7cf762200%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b407e21cce084ae5a0c055a7cf762200&alt=media&optimized=true"
        },

        {
            frontText: "11",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true"
        },

        {
            frontText: "12",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff75b399a4163499bba950f0f1bc2fc09%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f75b399a4163499bba950f0f1bc2fc09&alt=media&optimized=true"
        },

        {
            frontText: "13",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe4bd8a6532114dc6af5936065dc2e2a6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e4bd8a6532114dc6af5936065dc2e2a6&alt=media&optimized=true"
        },

        {
            frontText: "14",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fefc74a7e5ce34e87ad2276e95a0735d6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=efc74a7e5ce34e87ad2276e95a0735d6&alt=media&optimized=true"
        },

        {
            frontText: "15",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3d8880ab1fa4b538b5730fafee406d3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3d8880ab1fa4b538b5730fafee406d3&alt=media&optimized=true"
        },

        {
            frontText: "16",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0d24e2572969418ab3c85984188de5da%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0d24e2572969418ab3c85984188de5da&alt=media&optimized=true"
        },

        {
            frontText: "17",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F376892c624184e65a4d75cddda95aed8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=376892c624184e65a4d75cddda95aed8&alt=media&optimized=true"
        },

        {
            frontText: "18",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3b18a70499664f8e96b5d6c852f6632f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3b18a70499664f8e96b5d6c852f6632f&alt=media&optimized=true"
        },

        {
            frontText: "19",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7052374dd9c74aa2bb8092acf3fdfa7e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7052374dd9c74aa2bb8092acf3fdfa7e&alt=media&optimized=true"
        },

        {
            frontText: "20",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff67c038bbf3c4ee38b4bddf7f1a1503e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f67c038bbf3c4ee38b4bddf7f1a1503e&alt=media&optimized=true"
        },

        {
            frontText: "30",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffb908eae717c4a56ab677bc582718106%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fb908eae717c4a56ab677bc582718106&alt=media&optimized=true"
        },

        {
            frontText: "40",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F97e52d1e50e747c4857ba2218f97e774%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=97e52d1e50e747c4857ba2218f97e774&alt=media&optimized=true"
        },

        {
            frontText: "50",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffc32d4a30ce94fc3910da4ab6acca607%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fc32d4a30ce94fc3910da4ab6acca607&alt=media&optimized=true"
        },

        {
            frontText: "60",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28609d7020ff48428fbe89ef85a98fe0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28609d7020ff48428fbe89ef85a98fe0&alt=media&optimized=true"
        },

        {
            frontText: "70",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4653b03f4a45412dbc9b9615cb983c6c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4653b03f4a45412dbc9b9615cb983c6c&alt=media&optimized=true"
        },

        {
            frontText: "80",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feb47d20963f440fdae2ddf1cc6648e75%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eb47d20963f440fdae2ddf1cc6648e75&alt=media&optimized=true"
        },

        {
            frontText: "90",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F2a24363806854b74a52ab4c7450b4752%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=2a24363806854b74a52ab4c7450b4752&alt=media&optimized=true"
        },

        {
            frontText: "100",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F25ade37426094a079a567f05af93d9fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=25ade37426094a079a567f05af93d9fe&alt=media&optimized=true"
        },

        {
            frontText: "1 000",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6ad63600af97441ebc54dd044221ee8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6ad63600af97441ebc54dd044221ee8c&alt=media&optimized=true"
        },

        {
            frontText: "10 000",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa5c51acb7335444d8807e92bb5d58127%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a5c51acb7335444d8807e92bb5d58127&alt=media&optimized=true"
        },

        {
            frontText: "1 000 000 (1 million)",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe07d4e748fc341bcbd161ab668ab171b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e07d4e748fc341bcbd161ab668ab171b&alt=media&optimized=true"
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