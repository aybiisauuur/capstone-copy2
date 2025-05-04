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

    // Flashcards data - add your questions here
    let flashcards = [
        {
            frontText: "Vote",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true"
        },

        {
            frontText: "Voter",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true"
        },

        {
            frontText: "Register",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true"
        },

        {
            frontText: "Signature",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1331af5563e24fbabbf27b168782cda3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1331af5563e24fbabbf27b168782cda3&alt=media&optimized=true"
        },

        {
            frontText: "New",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true"
        },

        {
            frontText: "Transfer",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F618bc80c595b4493ad8acdfa44896729%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=618bc80c595b4493ad8acdfa44896729&alt=media&optimized=true"
        },

        {
            frontText: "Record",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true"
        },

        {
            frontText: "Personal Information",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true"
        },

        {
            frontText: "Certificate (Voter's Certification)",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true"
        },

        {
            frontText: "Change/Correct/Update",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faf3900620ef14f288f075a674a5b1068%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=af3900620ef14f288f075a674a5b1068&alt=media&optimized=true"
        },

        {
            frontText: "Deactivated",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true"
        },

        {
            frontText: "How may I help you?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fcd89d3b3810e483f83dcc8633c5bbec2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=cd89d3b3810e483f83dcc8633c5bbec2&alt=media&optimized=true"
        },

        {
            frontText: "Are you a registered voter in Baguio City?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8d0e9627c9b849348f359352c6df3010%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8d0e9627c9b849348f359352c6df3010&alt=media&optimized=true"
        },

        {
            frontText: "Are you registered abroad?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F946bbe19dd3145f89a7d2e893b43f935%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=946bbe19dd3145f89a7d2e893b43f935&alt=media&optimized=true"
        },

        {
            frontText: "Are you registered in SK (Sangguniang Kabataan)?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F88702384bd504672b5101b55ddb942c2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=88702384bd504672b5101b55ddb942c2&alt=media&optimized=true"
        },

        {
            frontText: "If you are a registered voter, you must be a resident for at least 6 months.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe255026b24fc41eeae6d7549a8cf38d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e255026b24fc41eeae6d7549a8cf38d7&alt=media&optimized=true"
        },

        {
            frontText: "How long have you been residing in your present barangay?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F21e3da74fcb84f84b60fb07a2260559d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=21e3da74fcb84f84b60fb07a2260559d&alt=media&optimized=true"
        },

        {
            frontText: "Your application type is not new, it is for reactivation.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true"
        },

        {
            frontText: "Your record is deactivated/inactive.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F46b9dc2953db4495ae59626a951e0f7c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=46b9dc2953db4495ae59626a951e0f7c&alt=media&optimized=true"
        },

        {
            frontText: "Please fill out the form.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true"
        },

        {
            frontText: "Do you have a valid ID?",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F16c9959c12004a33911a5664f10adab2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=16c9959c12004a33911a5664f10adab2&alt=media&optimized=true"
        },

        {
            frontText: "Please check if your personal information is correct.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F048fb0f1d784442ebf43cdbfe72b59d0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=048fb0f1d784442ebf43cdbfe72b59d0&alt=media&optimized=true"
        },

        {
            frontText: "We will take your picture.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true"
        },

        {
            frontText: "We will scan your thumbprint and index prints.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e6c1869bb234b868130f2866f9e694b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e6c1869bb234b868130f2866f9e694b&alt=media&optimized=true"
        },

        {
            frontText: "Please put your signature.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8073ed7c263941f5aacbd09663624a42%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8073ed7c263941f5aacbd09663624a42&alt=media&optimized=true"
        },

        {
            frontText: "Once approved, your voter’s certificate will be released.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd82613bc7a4f5e8e65fef195ac079e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd82613bc7a4f5e8e65fef195ac079e&alt=media&optimized=true"
        },

        {
            frontText: "The next registration will be next year.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F024a9f90929c4c93ac3d3d64cbbb61c3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=024a9f90929c4c93ac3d3d64cbbb61c3&alt=media&optimized=true"
        },

        {
            frontText: "The national election will be held next year.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae5fd834e74640faa88ce31d010b3c57%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae5fd834e74640faa88ce31d010b3c57&alt=media&optimized=true"
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
        buttonGroups.forEach(group => group.style.display = 'flex'); // This was missing
        
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
    updateFlashcard();
});