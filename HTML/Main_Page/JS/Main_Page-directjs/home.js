import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


$(document).ready(function () {
    let allPhraseCards = "";
    let recentModules = [];

    // Load phrases from JSON
    $.getJSON("phrases.json")
        .done(function (data) {
            initializeContent(data);
        })
        .fail(function () {
            console.error("Error loading phrases");
            initializeContent(getMockData());
        });

    function initializeContent(phraseData) {
        // Generate all phrase cards from JSON data
        phraseData.categories.forEach((category) => {
            category.phrases.forEach((phrase) => {
                allPhraseCards += `
          <div class="phrase-card animate__animated animate__fadeInRight" data-video="${phrase.video}">
              <div class="video-thumbnail" style="background-image: url('${phrase.video_thumbnail || phrase.image}')">
                  ${phrase.video ? '<div class="play-icon">▶</div>' : ''}
              </div>
              <h3 class="card-title">${phrase.title}</h3>
          </div>
        `;
            });
        });

        // Set up search functionality
        $(".search-icon").on("click", performSearch);
        $(".search-input").on("keypress", function (e) {
            if (e.key === "Enter") {
                performSearch();
            }
        });

        // Set up video playback
        $(document).on("click", ".phrase-card", function () {
            const videoUrl = $(this).data("video");
            if (videoUrl) {
                showVideoModal(
                    videoUrl,
                    $(this).find(".card-title").text(),
                    $(this).find("p").text()
                );
            }
        });

        // Close modal
        $(".close-modal").on("click", function () {
            $("#videoModal").hide();
            $("#phraseVideo")[0].pause();
        });
    }

    function performSearch() {
        const query = $(".search-input").val().toLowerCase().trim();

        if (!query) {
            // If search is empty, show default content
            $(".info-panel").show();
            $(".recent-section").show();
            $(".main-content").html(allPhraseCards);
            $(".no-results").hide();
            return;
        }

        // Create a temporary div to search through
        const $tempDiv = $("<div>").html(allPhraseCards);
        const $filteredCards = $tempDiv.find(".phrase-card").filter(function () {
            const cardText = $(this).text().toLowerCase();
            return cardText.includes(query);
        });

        // Display results
        if ($filteredCards.length > 0) {
            $(".info-panel").hide();
            $(".recent-section").hide();
            $(".main-content").html($filteredCards);
            $(".no-results").hide();
        } else {
            $(".info-panel").hide();
            $(".recent-section").hide();
            $(".main-content").empty();
            $(".no-results").show();
        }
    }

    function showVideoModal(videoUrl, title, description) {
        const videoPlayer = $("#phraseVideo")[0];
        const modal = $("#videoModal");

        // Reset video source
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoPlayer.src = videoUrl;

        // Set content
        $("#videoTitle").text(title || "");
        $("#videoDescription").text(description || "");

        // Show modal
        modal.show();

        // Scroll to top of modal
        modal.scrollTop(0);

        // Play video when ready
        videoPlayer.oncanplay = function () {
            videoPlayer.play().catch(e => console.log("Autoplay prevented:", e));
        };

        // Handle errors
        videoPlayer.onerror = function () {
            $("#videoTitle").text("Error loading video");
            $("#videoDescription").text("Sorry, we couldn't load the video. Please try again later.");
        };
    }

    // Close modal when clicking outside
    $(window).on("click", function (e) {
        if ($(e.target).is("#videoModal")) {
            const videoPlayer = $("#phraseVideo")[0];
            videoPlayer.pause();
            $("#videoModal").hide();
        }
    });

    // Logout functionality
    $("#logoutBtn").click(function (e) {
        e.preventDefault();
        // Show the custom modal
        $('#logout-modal').css('display', 'block');
    });

    // When user clicks back button
    $('.back-button').click(function () {
        $('#logout-modal').css('display', 'none');
    });

    // When user confirms logout
    $('.logout-button').click(function () {
        signOut(auth).then(() => {
            window.location.href = "login.html";
        }).catch((error) => {
            console.error("Logout error:", error);
            $('#logout-modal').css('display', 'none');
        });
    });

    // Close modal when clicking outside of it (optional)
    $(window).click(function (e) {
        if (e.target === document.getElementById('logout-modal')) {
            $('#logout-modal').css('display', 'none');
        }
    });

    // Search box styling
    $(".search-input")
        .focus(function () {
            $(".search-box").css("border-color", "#004AB3");
        })
        .blur(function () {
            $(".search-box").css("border-color", "#000");
        });

    // Profile dropdown functionality
    $("#profileBtn").on("click", function (e) {
        e.stopPropagation(); // Prevent the click from bubbling up
        $("#profileDropdown").toggle();
    });

    // Close dropdown when clicking elsewhere
    $(document).on("click", function () {
        $("#profileDropdown").hide();
    });

    // Prevent dropdown from closing when clicking inside it
    $("#profileDropdown").on("click", function (e) {
        e.stopPropagation();
    });
});

// Add the image icon
onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const userDocRef = doc(db, "profile_info", user.uid);
            const docSnapshot = await getDoc(userDocRef);
            const data = docSnapshot.data();

            if (data && data.ProfilePicture) {
                const mainPic = document.getElementById("profilePicture");
                const iconPic = document.getElementById("profilePictureIcon");

                if (mainPic) mainPic.src = data.ProfilePicture;
                if (iconPic) iconPic.src = data.ProfilePicture;
            }
        } catch (error) {
            console.error("Failed to load profile picture", error);
        }
    }
});

// Mock data function in case JSON fails to load
function getMockData() {
    return {
        categories: [
            {
                name: "Basic Phrases",
                phrases: [
                    {
                        title: "Hello",
                        description: "A common greeting",
                        video: "path/to/hello.mp4",
                        video_thumbnail: "path/to/hello-thumbnail.jpg"
                    },
                    // Add more mock phrases as needed
                ]
            }
        ]
    };
}