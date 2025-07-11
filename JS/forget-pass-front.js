// Simple frontend-only forget password solution
// Replace the firebaseConfig below with your actual Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyCnlzgGB3lSAn8Xf6H-Bx_bJ9QPK6iWJ80",
  authDomain: "senyashub.firebaseapp.com",
  projectId: "senyashub",
  storageBucket: "senyashub.firebasestorage.app",
  messagingSenderId: "272537634617",
  appId: "1:272537634617:web:2763ed67c759373fd30ae8",
  measurementId: "G-R6MYXS2Z0G",
  databaseURL: "https://senyashub-default-rtdb.firebaseio.com/",
};

// Import Firebase modules from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

// Initialize Firebase
let app, auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  alert('Firebase configuration error. Please check your config values.');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully!');
    
    // Get DOM elements
    const sendEmailBtn = document.getElementById('signup');
    const emailInput = document.getElementById('email');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close');
    const exitBtn = document.getElementById('exitBtn');
    const okBtn = document.getElementById('okBtn');
    const messageElement = document.getElementById('message');

    // Check if all elements exist
    if (!sendEmailBtn || !emailInput || !modal || !modalContent || !closeBtn || !exitBtn || !okBtn || !messageElement) {
        console.error('Some required elements are missing from the DOM');
        alert('Page elements missing. Please check your HTML structure.');
        return;
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

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showModal('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        setButtonLoading(true);

        try {
            console.log('Sending password reset email to:', email);
            
            // Send password reset email
            await sendPasswordResetEmail(auth, email);

            console.log('✅ Password reset email sent successfully');
            showModal('Password reset email sent successfully! Please check your email inbox and spam folder.', 'success');
            emailInput.value = ''; // Clear input
            
            // Auto-redirect after 5 seconds
            setTimeout(() => {
                window.location.href = './login.html';
            }, 5000);

        } catch (error) {
            console.error('❌ Error sending password reset email:', error);
            
            let errorMessage = 'An error occurred while sending the password reset email.';
            
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'No user found with this email address.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Please enter a valid email address.';
                    break;
                case 'auth/too-many-requests':
                    errorMessage = 'Too many requests. Please wait a few minutes before trying again.';
                    break;
                case 'auth/network-request-failed':
                    errorMessage = 'Network error. Please check your internet connection.';
                    break;
                case 'auth/configuration-not-found':
                    errorMessage = 'Firebase configuration error. Please check your setup.';
                    break;
                default:
                    errorMessage = error.message || errorMessage;
            }
            
            showModal(errorMessage, 'error');
        } finally {
            setButtonLoading(false);
        }
    });

    // Handle Enter key
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendEmailBtn.click();
        }
    });

    // Button loading state
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
        modalContent.className = 'modal-content';
        
        if (type === 'error') {
            modalContent.classList.add('error');
        } else if (type === 'success') {
            modalContent.classList.add('success');
        }
        
        modal.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                hideModal();
            }, 5000);
        }
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    // Event listeners for modal
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal();
    });

    exitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = './index.html';
    });

    okBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal();
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    modalContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    console.log('✅ Frontend-only forgot password script loaded successfully');
});