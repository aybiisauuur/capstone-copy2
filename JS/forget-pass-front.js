// forgot-pass-front.js

console.log('Script loaded successfully!');
alert('JavaScript file is working!');
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const sendEmailBtn = document.getElementById('signup');
    const emailInput = document.getElementById('email');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close');
    const exitBtn = document.getElementById('exitBtn');
    const okBtn = document.getElementById('okBtn');
    const messageElement = document.getElementById('message');

    // Configuration
    const API_BASE_URL = 'http://localhost:3000';
    
    // Validate that all required elements exist
    const requiredElements = {
        sendEmailBtn: 'Send Email Button',
        emailInput: 'Email Input',
        modal: 'Modal',
        modalContent: 'Modal Content',
        closeBtn: 'Close Button',
        exitBtn: 'Exit Button',
        okBtn: 'OK Button',
        messageElement: 'Message Element'
    };

    for (const [element, name] of Object.entries(requiredElements)) {
        if (!eval(element)) {
            console.error(`${name} not found in DOM`);
            return;
        }
    }

    // Send password reset email
    sendEmailBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Validate email input
        if (!email) {
            showModal('Please enter your email address.', 'error');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showModal('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        setButtonLoading(true);

        try {
            console.log('Sending password reset request for:', email);
            
            const response = await fetch(`${API_BASE_URL}/api/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            });

            const data = await response.json();
            console.log('Response:', data);

            if (data.success) {
                showModal(data.message, 'success');
                emailInput.value = ''; // Clear the input
                
                // Auto-redirect to login page after 5 seconds
                setTimeout(() => {
                    window.location.href = './login.html';
                }, 5000);
            } else {
                showModal(data.message, 'error');
            }

        } catch (error) {
            console.error('Network error:', error);
            showModal('Network error. Please check your internet connection and try again.', 'error');
        } finally {
            setButtonLoading(false);
        }
    });

    // Handle Enter key press in email input
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendEmailBtn.click();
        }
    });

    // Function to set button loading state
    function setButtonLoading(isLoading) {
        if (isLoading) {
            sendEmailBtn.disabled = true;
            sendEmailBtn.innerHTML = '<h3 class="Sign_In-title">Sending...</h3>';
            sendEmailBtn.style.opacity = '0.7';
        } else {
            sendEmailBtn.disabled = false;
            sendEmailBtn.innerHTML = '<h3 class="Sign_In-title">Send Email</h3>';
            sendEmailBtn.style.opacity = '1';
        }
    }

    // Modal functions
    function showModal(message, type = 'info') {
        console.log('Showing modal:', message, type);
        
        messageElement.textContent = message;
        
        // Reset modal classes
        modalContent.className = 'modal-content';
        
        // Add type-specific styling
        if (type === 'error') {
            modalContent.classList.add('error');
        } else if (type === 'success') {
            modalContent.classList.add('success');
        }
        
        // Show modal
        modal.style.display = 'block';
        
        // Auto-close for success messages
        if (type === 'success') {
            setTimeout(() => {
                hideModal();
            }, 5000);
        }
    }

    function hideModal() {
        modal.style.display = 'none';
        console.log('Modal hidden');
    }

    // Close modal when clicking the X button
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        hideModal();
    });

    // Exit button - redirect to index.html
    exitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Redirecting to index.html');
        window.location.href = './index.html';
    });

    // OK button - close modal
    okBtn.addEventListener('click', function(e) {
        e.preventDefault();
        hideModal();
    });

    // Close modal when clicking outside of it
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });

    // Prevent modal content click from closing modal
    modalContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Test API connection on load
    fetch(`${API_BASE_URL}/api/health`)
        .then(response => response.json())
        .then(data => {
            console.log('API Health Check:', data);
        })
        .catch(error => {
            console.error('API Health Check Failed:', error);
        });

    console.log('Forgot password script loaded successfully');
});