import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

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

// Check if on profile page or signup page
const isProfilePage = document.getElementById('profileBtn') !== null;
const isSignupPage = document.getElementById('signup_button') !== null;

if (isProfilePage) {
    // Profile dropdown
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('fileInput');
    const logoutModal = document.getElementById('logout-modal');
    const backButton = document.querySelector('.back-button');
    const logoutButton = document.querySelector('.logout-button');

    // Profile dropdown toggle
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });

    // Close
    document.addEventListener('click', () => {
        profileDropdown.classList.remove('show');
    });

    // Logout button click handler
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Show custom modal
            if (logoutModal) {
                logoutModal.style.display = 'block';
            }
        });
    }

    // Back button click handler (closes modal)
    if (backButton) {
        backButton.addEventListener('click', function () {
            if (logoutModal) {
                logoutModal.style.display = 'none';
            }
        });
    }

    // Logout confirmation handler
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            signOut(auth).then(() => {
                window.location.href = "login.html";
            }).catch((error) => {
                console.error("Logout error:", error);
                if (logoutModal) {
                    logoutModal.style.display = 'none';
                }
            });
        });
    }

    // Close modal when clicking outside modal content
    if (logoutModal) {
        logoutModal.addEventListener('click', function (e) {
            if (e.target === logoutModal) { // Clicked on the backdrop (outside modal content)
                logoutModal.style.display = 'none';
            }
        });
    }

    // User authentication monitoring
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const userDocRef = doc(db, "profile_info", user.uid);
                const docSnapshot = await getDoc(userDocRef);

                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    document.getElementById('FullName').value = data.FullName || "";
                    document.getElementById('Gender').value = data.Gender || "prefer-not-to-say";
                    document.getElementById('bio').value = data.bio || "";

                    document.getElementById('userName').textContent = data.FullName || "New User";
                    document.getElementById('userEmail').textContent = data.EmailAdd || user.email || "No email";
                    document.getElementById('EmailAdd').value = user.email || data.EmailAdd || "";
                    document.getElementById('EmailAdd').disabled = true;
                    document.getElementById('EmailAdd').classList.add('disabled-field');

                    // Load profile picture if available
                    if (data.ProfilePicture) {
                        const mainPic = document.getElementById('profilePicture');
                        const iconPic = document.getElementById('profilePictureIcon');

                        if (mainPic) mainPic.src = data.ProfilePicture;
                        if (iconPic) iconPic.src = data.ProfilePicture;
                    }
                } else {
                    console.warn("No profile data found for user.");
                    document.getElementById('userName').textContent = "New User";
                    document.getElementById('userEmail').textContent = user.email || "No email";
                    document.getElementById('EmailAdd').value = user.email || "";
                }
            } catch (error) {
                console.error("Profile load error:", error);
            }
        } else {
            window.location.href = "login.html";
        }
    });

    // Edit profile 
    let originalValues = {};

    editBtn.addEventListener('click', () => {
        // Store original values
        originalValues = {};
        document.querySelectorAll('.profile-details input:not(#EmailAdd), .profile-details select, .profile-details textarea').forEach(element => {
            originalValues[element.id] = element.value;
        });

        // Enable editing (except for email field)
        document.querySelectorAll('.profile-details input:not(#EmailAdd), .profile-details select, .profile-details textarea').forEach(element => {
            element.disabled = false;
        });

        // Keep email field always disabled
        document.getElementById('EmailAdd').classList.add('disabled-field');

        document.getElementById('buttonGroup').style.display = 'block';
        editBtn.style.display = 'none';
    });


    cancelBtn.addEventListener('click', () => {
        // Restore original values (except email)
        Object.entries(originalValues).forEach(([id, value]) => {
            if (id !== 'EmailAdd') {
                document.getElementById(id).value = value;
            }
        });

        // Reset UI functionality (except email)
        document.querySelectorAll('.profile-details input:not(#EmailAdd), .profile-details select, .profile-details textarea').forEach(element => {
            element.disabled = true;
        });

        // Keep email field always disabled
        document.getElementById('EmailAdd').classList.add('disabled-field');

        document.getElementById('buttonGroup').style.display = 'none';
        editBtn.style.display = 'block';
    });

    saveBtn.addEventListener('click', async () => {
        console.log("Save button clicked");

        try {
            const user = auth.currentUser;
            console.log("Current user:", user ? user.uid : "null");

            if (!user) {
                alert("Session expired! Please log in again.");
                return (window.location.href = "login.html");
            }

            // Build profile data
            const profileData = {
                FullName: document.getElementById('FullName').value || "",
                // PhoneNumber: document.getElementById('PhoneNumber').value || "",
                // BirthDate: document.getElementById('BirthDate').value || "",
                Gender: document.getElementById('Gender').value || "prefer-not-to-say",
                // Location: document.getElementById('Location').value || "",
                bio: document.getElementById('bio').value || "",
                lastUpdated: new Date()
            };
            console.log("Profile data:", profileData);

            // Document reference
            const userDocRef = doc(db, "profile_info", user.uid);
            console.log("Document path:", userDocRef.path);

            // Savee
            console.log("Attempting save...");
            await updateDoc(userDocRef, profileData);
            console.log("Save successful!");

            // UI updates 2
            document.querySelectorAll('.profile-details input, .profile-details select, .profile-details textarea').forEach(element => {
                element.disabled = true;
            });

            document.getElementById('buttonGroup').style.display = 'none';
            editBtn.style.display = 'block';
            document.getElementById('userName').textContent = profileData.FullName;

            alert("Profile updated successfully!");
        } catch (error) {
            console.error("SAVE ERROR:", {
                code: error.code,
                message: error.message,
                stack: error.stack
            });
            alert(`Save failed: ${error.message}`);

            if (error.code === "permission-denied") {
                console.warn("Permissions issue - check Firestore rules");
                window.location.reload();
            }
        }
    });

    // Profile picture upload
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Profile picture upload with Base64 storage in Firestore
    fileInput.addEventListener('change', async function () {
        const file = this.files[0];
        if (!file) return;

        const user = auth.currentUser;
        if (!user) {
            alert("Please log in to upload a profile picture");
            return;
        }

        try {
            // Convert image to Base64
            const base64Image = await convertToBase64(file);

            // Check if image is not too large. do not exxxceed
            // ~750KB to be safe (Firestore limit is 1MB)
            if (base64Image.length > 750000) {
                alert("Image is too large. Please choose a smaller image or resize it.");
                return;
            }

            // Save to Firestore directly
            const userDocRef = doc(db, "profile_info", user.uid);
            await updateDoc(userDocRef, {
                ProfilePicture: base64Image
            });

            // Update UI
            const mainPic = document.getElementById('profilePicture');
            const iconPic = document.getElementById('profilePictureIcon');

            if (mainPic) mainPic.src = base64Image;
            if (iconPic) iconPic.src = base64Image;

            alert("Profile picture updated!");
        } catch (error) {
            console.error("Upload failed", error);
            alert("Failed to upload image: " + error.message);
        }
    });

    // converting image to Base64
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
}

// Signup page functionality
if (isSignupPage) {
    // Toggle password visibility
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
        event.preventDefault();

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
                const gender = document.getElementById('gender').value;

                // Build the profile object
                const profileData = {
                    FullName: fullName,
                    Gender: gender,
                    EmailAdd: email,
                    bio: "", // to be edited in profile page added last edited in firestore
                };

                try {
                    // Add to firebase
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
}

//all functionality needs 3sec loading time.