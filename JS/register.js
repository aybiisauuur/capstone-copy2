import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnlzgGB3lSAn8Xf6H-Bx_bJ9QPK6iWJ80",
  authDomain: "senyashub.firebaseapp.com",
  databaseURL: "https://senyashub-default-rtdb.firebaseio.com",
  projectId: "senyashub",
  storageBucket: "senyashub.firebasestorage.app",
  messagingSenderId: "272537634617",
  appId: "1:272537634617:web:2763ed67c759373fd30ae8",
  measurementId: "G-R6MYXS2Z0G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// password visibility
document.querySelectorAll(".toggle-password").forEach((button) => {
  button.addEventListener("click", function () {
    const input = this.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
    this.textContent = input.type === "password" ? "👁" : "🙈";
  });
});

// Submit button
const signup = document.getElementById("signup_button");
signup.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const retypepass = document.getElementById("retypepass").value;

  if (!name || !email || !password || !retypepass) {
    showModal("Please fill in all fields.");
    return;
  }

  // Check
  if (password !== retypepass) {
    showModal("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
      const fullName = document.getElementById("name").value;
      const gender = document.getElementById("gender").value;

      // Build the profile
      const profileData = {
        FullName: fullName,
        Gender: gender,
        EmailAdd: email,
        bio: "", // to be eddited n lng sa profile page
      };

      try {
        //calling setDoc para ma add sa firebase
        await setDoc(doc(db, "profile_info", uid), profileData);
        showModal("Account created and profile saved!");
        window.location.href = "../HTML/login.html";
      } catch (firestoreError) {
        console.error("Error saving profile:", firestoreError);
        showModal("Account created, but profile save failed.");
      }
    })
    .catch((error) => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      showModal(
        "An account with this email already exists. Please sign in instead."
      );
    });
});

// function ng modals
function showModal(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("message");
  modalMessage.textContent = message;
  modal.style.display = "block";
}

function hideModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("close").addEventListener("click", hideModal);

// Optional: close modal if user clicks outside content
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    hideModal();
  }
});
