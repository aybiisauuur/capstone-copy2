import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

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
const auth = getAuth(app);
const db = getFirestore(app);

// password visibility
document.querySelectorAll('.toggle-password').forEach(button => {
  button.addEventListener('click', function () {
    const input = this.previousElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
    this.textContent = input.type === 'password' ? '👁' : '🙈';
  });
});

// Submit button
const signup = document.getElementById('signup_button');
signup.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const retypepass = document.getElementById('retypepass').value;

  // Check
  if (password !== retypepass) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    const user = userCredential.user;
    const uid = user.uid;
    const fullName = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const birthDate = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;
    const location = document.getElementById('address').value;

    // Build the profile
    const profileData = {
      FullName: fullName,
      PhoneNumber: phone,
      BirthDate: birthDate,
      Gender: gender,
      Location: location,
      EmailAdd: email,
      bio: "", // to be eddited n lng sa profile page
    };

    try {
      //calling setDoc para ma add sa firebase
      await setDoc(doc(db, "profile_info", uid), profileData);
      alert("Account created and profile saved!");
      window.location.href = "index.html";
    } catch (firestoreError) {
      console.error("Error saving profile:", firestoreError);
      alert("Account created, but profile save failed.");
    }
  })
  .catch((error) => {
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    alert(error.message);
  });
  
});

