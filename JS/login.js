import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnlzgGB3lSAn8Xf6H-Bx_bJ9QPK6iWJ80",
  authDomain: "senyashub.firebaseapp.com",
  databaseURL: "https://senyashub-default-rtdb.firebaseio.com",
  projectId: "senyashub",
  storageBucket: "senyashub.firebasestorage.app",
  messagingSenderId: "272537634617",
  appId: "1:272537634617:web:2763ed67c759373fd30ae8",
  measurementId: "G-R6MYXS2Z0G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// password visibility
document.querySelectorAll('.toggle-password').forEach(button => {
  button.addEventListener('click', function () {
    const input = this.previousElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
    this.textContent = input.type === 'password' ? '👁' : '🙈';
  });
});

// Submit button
const signup = document.getElementById('signup');
signup.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    showModal("Please fill in all fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // alert("Logging in..."); //avoid too many alerts. distracting. dapat deretso at error lang mag aaleert
      window.location.href = "../HTML/login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showModal("It looks like you don’t have an account yet. Register to get started.");
    });
});

// function ng modals
function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('close').addEventListener('click', hideModal);

// Optional: close modal if user clicks outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        hideModal();
    }
});
