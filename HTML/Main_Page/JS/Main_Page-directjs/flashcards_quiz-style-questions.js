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
            frontText: "What?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true"
        },

        {
            frontText: "Who?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F83a4a5b85f1a4b5ca1514d29bef18e9f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=83a4a5b85f1a4b5ca1514d29bef18e9f&alt=media&optimized=true"
        },

        {
            frontText: "Why?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true"
        },

        {
            frontText: "How?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff7f0065ef91d4ad99d0075eb5d482602%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f7f0065ef91d4ad99d0075eb5d482602&alt=media&optimized=true"
        },

        {
            frontText: "When?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc88eb6b097a046e8b3d5fc051c089ded%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c88eb6b097a046e8b3d5fc051c089ded&alt=media&optimized=true"
        },

        {
            frontText: "Where?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true"
        },

        {
            frontText: "What is your name?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbb7fcf30b9a145a1b0b3dcc7988ab909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bb7fcf30b9a145a1b0b3dcc7988ab909&alt=media&optimized=true"
        },

        {
            frontText: "How old are you?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F136be3a00e8943a68a786b15fa63fff6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=136be3a00e8943a68a786b15fa63fff6&alt=media&optimized=true"
        },

        {
            frontText: "Where do you live?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true"
        },

        {
            frontText: "Where are you from?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5462c54d4b494113be5805bb98f8a083%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5462c54d4b494113be5805bb98f8a083&alt=media&optimized=true"
        },

        {
            frontText: "What time is it?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc7bb3d9a5dd54ba5875b95c91b381b3d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c7bb3d9a5dd54ba5875b95c91b381b3d&alt=media&optimized=true"
        },

        {
            frontText: "How are you?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true"
        },

        {
            frontText: "Do you understand?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1af55d1880b646de85d1f9fab624541e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1af55d1880b646de85d1f9fab624541e&alt=media&optimized=true"
        },

        {
            frontText: "Can you help me?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F64a4f65b9877436cbecb3ec5d804a889%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=64a4f65b9877436cbecb3ec5d804a889&alt=media&optimized=true"
        },

        {
            frontText: "What do you do? (e.g. job/school)",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd7d7ea0c45874ab5ad0956e6e43d443c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d7d7ea0c45874ab5ad0956e6e43d443c&alt=media&optimized=true"
        },

        {
            frontText: "What are you doing?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F72ada87ecfc548df94317bbf3f127957%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=72ada87ecfc548df94317bbf3f127957&alt=media&optimized=true"
        },

        {
            frontText: "Where are you going?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true"
        },

        {
            frontText: "Are you married/single?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F69ab6ce319b04f3982eedb55c99fb8dd%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=69ab6ce319b04f3982eedb55c99fb8dd&alt=media&optimized=true"
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