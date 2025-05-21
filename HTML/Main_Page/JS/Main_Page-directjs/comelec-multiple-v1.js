import runGemini from './greetings-mchoice-v2.js';

const allQuestions = [
    // A: common words
    {//change, correct, update
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faf3900620ef14f288f075a674a5b1068%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=af3900620ef14f288f075a674a5b1068&alt=media&optimized=true",
        context: "Voter registration terms 📝",
        options: [
            {
                choice: "Change / Correct / Update",
                correct: true,
                feedback: "Correct! 🎯 Both hands are in an X handshape, then twist your hands as if you are flipping or changing positions",
                imageDescription: "Hand making circular motion in X handshape"
            },
            {
                choice: "Round",
                correct: false,
                feedback: "Not quite! 🔄 This sign is about updating information, not shape",
                imageDescription: "N/A"
            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Oops! 🌙 Wrong category - this is about voter registration terms",
                imageDescription: "N/A"
            },
            {
                choice: "New",
                correct: false,
                feedback: "Close! ✨ 'New' is different from 'update/correct' in FSL",
                imageDescription: "N/A"
            }
        ]
    },
    {// New
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Febd1e4d4abfa443fa9a4cb39a38ee8c4%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ebd1e4d4abfa443fa9a4cb39a38ee8c4&alt=media&optimized=true",
        context: "Voter registration status 🆕",
        options: [
            {
                choice: "True",
                correct: false,
                feedback: "Incorrect! ❌ This sign specifically means 'new' registration",
                imageDescription: "N/A"
            },
            {
                choice: "New",
                correct: true,
                feedback: "Perfect! 🌟 New is signed by using your curved hand to scoop into your other flat hand, like you're showing something just arrived",
                imageDescription: "Flat hand moving upward from palm-up position"

            },
            {
                choice: "Good Evening",
                correct: false,
                feedback: "Wrong category! 🌆 This is about registration status, not greetings",
                imageDescription: "N/A"
            },
            {
                choice: "What are you doing?",
                correct: false,
                feedback: "Not quite! 🤔 This is a simple sign for 'new'",
                imageDescription: "N/A"
            },
        ],
    },
    {//Transfer
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F618bc80c595b4493ad8acdfa44896729%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=618bc80c595b4493ad8acdfa44896729&alt=media&optimized=true",
        context: "Voter record actions 🔄",
        options: [
            {
                choice: "Letter T",
                correct: false,
                feedback: "Almost! ✋ This is the full word 'transfer', not just the letter",
                imageDescription: "N/A"
            },
            {
                choice: "Go there",
                correct: false,
                feedback: "Not quite! 🚶 This sign is about transferring voter records",
                imageDescription: "N/A"
            },
            {
                choice: "Transfer",
                correct: true,
                feedback: "Excellent! 🔄 This is done by moving both hands in a T handshape, as if shifting something from one place to another",
                imageDescription: "Hands moving in T handshape showing transfer action"
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "Wrong category! 👋 This is about voter administration actions",
                imageDescription: "N/A"
            },
        ],
    },
    {//personal information
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6aa2681a8a2a4678a54df8ec1cf73e01%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6aa2681a8a2a4678a54df8ec1cf73e01&alt=media&optimized=true",
        context: "Voter registration details 📋",
        options: [
            {
                choice: "Personal",
                correct: false,
                feedback: "Close! 👤 This is the full phrase 'personal information'",
                imageDescription: "N/A"
            },
            {
                choice: "Good Afternoon",
                correct: false,
                feedback: "Wrong category! ☀️ This is about voter details, not greetings",
                imageDescription: "N/A"
            },
            {
                choice: "Form",
                correct: false,
                feedback: "Almost! 📄 This refers specifically to personal details, not the form itself",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: true,
                feedback: "Correct! 📋 This is made by doing handshape P pointing to yourself to show personal, then spreading both hands in front of you as if showing or laying out details, to represent information.",
                imageDescription: "Hand moving in small circle near chest"
            },
        ],
    },
    {// Deactivated
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F75266a9a3ae547239c9004a62573e14d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=75266a9a3ae547239c9004a62573e14d&alt=media&optimized=true",
        context: "Voter record status ⚠️",
        options: [
            {
                choice: "Deactivated",
                correct: true,
                feedback: "Exactly! ⚠️ This is shown by making a motion like closing or turning off something",
                imageDescription: "Hand making downward cutting motion"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "Close! 📁 This shows the record is specifically deactivated",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "Not quite! 👤 This refers to record status, not personal details",
                imageDescription: "N/A"
            },
            {
                choice: "Voter",
                correct: false,
                feedback: "Almost! 🗳️ This shows the voter record's inactive status",
                imageDescription: "N/A"
            },
        ],
    },
    {// Voter
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true",
        context: "Voter identification 🗳️",
        options: [
            {
                choice: "Vote",
                correct: false,
                feedback: "Close! ✋ This is the person ('voter') not the action ('vote')",
                imageDescription: "N/A"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "Not quite! 📁 This specifically identifies a voter",
                imageDescription: "N/A"
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "Almost! 👤 This is about voter identity, not personal details",
                imageDescription: "N/A"
            },
            {
                choice: "Voter",
                correct: true,
                feedback: "Perfect! 🗳️ You recognized the sign for 'voter', by handshape V and placing both flat hands upright (palms facing each other) and moving them down together, as if outlining the shape of a person.",
                imageDescription: "Hand making V shape near chest"
            },
        ],
    },
    {//Certificate
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true",
        context: "Voter documents 📜",
        options: [
            {
                choice: "Letter C",
                correct: false,
                feedback: "Almost! ✋ This is the full word 'certificate', not just the letter",
                imageDescription: "N/A"
            },
            {
                choice: "Certificate",
                correct: true,
                feedback: "Correct! 📜 This is done by creating C handshape",
                imageDescription: "Hands mimicking holding and presenting a document"
            },
            {
                choice: "Record",
                correct: false,
                feedback: "Close! 📁 This is specifically a certificate document",
                imageDescription: "N/A"
            },
            {
                choice: "Top of the Morning",
                correct: false,
                feedback: "Wrong category! ☀️ This is about voter documents, not greetings",
                imageDescription: "N/A"
            },
        ],
    },
    {//VOTE 
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true",
        context: "Voting action 🗳️",
        options: [
            {
                choice: "Vote",
                correct: true,
                feedback: "Exactly! ✅ You recognized the sign for casting a vote, creating V handshape and mimicking dropping ballot into a box",
                imageDescription: "Hand mimicking dropping a ballot into a box"
            },
            {
                choice: "Voter",
                correct: false,
                feedback: "Close! 👤 This is the action ('vote') not the person ('voter')",
                imageDescription: "N/A"
            },
            {
                choice: "What?",
                correct: false,
                feedback: "Not quite! ❓ This is about the voting action",
                imageDescription: "N/A"
            },
            {
                choice: "Letter V",
                correct: false,
                feedback: "Almost! ✋ This is the full word 'vote', not just the letter",
                imageDescription: "N/A"
            },
        ],
    },
    // register
    {
        "video": "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6cce7bb8ddd24c6e91563b168cd0bc3a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6cce7bb8ddd24c6e91563b168cd0bc3a&alt=media&optimized=true",
        "options": [
            {
                choice: "Form",
                correct: false,
                feedback: "Not quite, try again! The sign for Form looks different.",
                imageDescription: "Hands held flat and open, showing the shape of a paper form."
            },
            {
                choice: "Record",
                correct: false,
                feedback: "Almost there! The sign for Record is different.",
                imageDescription: "One hand making a shape like holding a device or writing to show recording."
            },
            {
                choice: "Personal Information",
                correct: false,
                feedback: "Close, but that’s not the sign here. Personal Information uses a different gesture.",
                imageDescription: "Pointing to the chest then spreading hands to show information."
            },
            {
                choice: "Register",
                correct: true,
                feedback: "Good job! ✅ You chose the sign for Register.",
                imageDescription: "Hands moving as if filling out a form, showing the action of registering."
            }
        ]
    },
    {
        "video": "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1331af5563e24fbabbf27b168782cda3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1331af5563e24fbabbf27b168782cda3&alt=media&optimized=true",
        "options": [
            {
                choice: "Form",
                correct: false,
                feedback: "❌ Not quite! The sign for Form is different.",
                imageDescription: "Hands open flat, showing the shape of a paper form."
            },
            {
                choice: "Sign Language",
                correct: false,
                feedback: "❌ Nope! That’s not the sign for Sign Language.",
                imageDescription: "Hands moving near the face to represent communication."
            },
            {
                choice: "Signature",
                correct: true,
                feedback: "✅ Great! You picked the sign for Signature ✍️.",
                imageDescription: "Dominant hand mimics writing a signature on the palm of the other hand."
            },
            {
                choice: "You're welcome",
                correct: false,
                feedback: "❌ Try again! This sign means something else.",
                imageDescription: "Hand moves forward with W handshape from the chest as a polite gesture."
            }
        ]
    },
    // B: Registration Process
    {//How may I help you?
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fcd89d3b3810e483f83dcc8633c5bbec2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=cd89d3b3810e483f83dcc8633c5bbec2&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: true,
                feedback: "✅ Good! This is the sign for 'How may I help you?'.",
                imageDescription: "Hands moving forward with a questioning expression."
            },
            {
                choice: "You Are?",
                correct: false,
                feedback: "❌ Not this one. Try again!",
                imageDescription: "Pointing gesture asking 'You are?'"
            },
            {
                choice: "Help",
                correct: false,
                feedback: "❌ Nope! This sign means 'Help' which looks different.",
                imageDescription: "One hand lifting the other to show help."
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "❌ Not correct. The sign for 'Goodbye' is different.",
                imageDescription: "Hand waving to say goodbye."
            },
        ],
    },
    {//put signature
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8073ed7c263941f5aacbd09663624a42%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8073ed7c263941f5aacbd09663624a42&alt=media&optimized=true",
        options: [
            {
                choice: "Please put your signature.",
                correct: true,
                feedback: "✅ Correct! This is the sign for 'Please put your signature.' ✍️",
                imageDescription: "Dominant hand mimics writing on the other hand",
            },
            {
                choice: "Please",
                correct: false,
                feedback: "❌ Not this one. The sign for 'Please' is different",
                imageDescription: "Flat hand moving in a circular motion on chest"
            },
            {
                choice: "Help",
                correct: false,
                feedback: "❌ Nope! This sign means 'Help' which looks different",
                imageDescription: "One hand lifting the other as a helping gesture."
            },
            {
                choice: "Goodbye",
                correct: false,
                feedback: "❌ Not correct. This sign is for 'Goodbye'",
                imageDescription: "Hand waving side to side."
            },
        ],
    },
    {//take picture
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F356740339ed748b99a44d96daa7a9451%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=356740339ed748b99a44d96daa7a9451&alt=media&optimized=true",
        options: [
            {
                choice: "Picture",
                correct: false,
                feedback: "❌ Not this one. The sign for 'Picture' is different.",
                imageDescription: "Hands framing a photo shape."
            },
            {
                choice: "We will take your picture.",
                correct: true,
                feedback: "✅ Well done! This sign means 'We will take your picture.' 📸",
                imageDescription: "Hands mimicking holding a camera and taking a photo"
            },
            {
                choice: "We will scan your thumbprint.",
                correct: false,
                feedback: "❌ Nope! This sign means scanning thumbprint",
                imageDescription: "Hand pressing thumb onto a scanner"
            },
            {
                choice: "Smile",
                correct: false,
                feedback: "❌ Not correct. This sign means 'Smile'",
                imageDescription: "Hand movement near mouth to show smiling"
            },
        ],
    },
    {//registered abroad
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F946bbe19dd3145f89a7d2e893b43f935%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=946bbe19dd3145f89a7d2e893b43f935&alt=media&optimized=true",
        options: [
            {
                choice: "Are you registered in SK (Sangguniang Kabataan)?",
                correct: false,
                feedback: "❌ This is not the sign for SK registration.",
                imageDescription: "Fingerspell SK registration."
            },
            {
                choice: "Are you registered in Baguio City?",
                correct: false,
                feedback: "❌ Not correct for this sign.",
                imageDescription: "Gesture for Baguio handshape B and shivering mimicking coldness, to show Baguio is a cold place"
            },
            {
                choice: "Are you registered abroad?",
                correct: true,
                feedback: "✅ Correct! This sign means 'Are you registered abroad?'. 🌍",
                imageDescription: "Hand pointing outward indicating abroad, doing sign for 'other' and 'country', with C handshape circular motion near elbow"
            },
            {
                choice: "Register",
                correct: false,
                feedback: "❌ Not the sign for 'Register' here.",
                imageDescription: "Sign for registration R handshape"
            },
        ],
    },
    {//record deactivated
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F46b9dc2953db4495ae59626a951e0f7c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=46b9dc2953db4495ae59626a951e0f7c&alt=media&optimized=true",
        options: [
            {
                choice: "Register",
                correct: false,
                feedback: "❌ This sign is not for 'Register'.",
                imageDescription: "Sign for registration R handshape"
            },
            {
                choice: "You record is active.",
                correct: false,
                feedback: "❌ This sign is not for active records.",
                imageDescription: "Hand gesture indicating active."
            },
            {
                choice: "Record",
                correct: false,
                feedback: "❌ Not correct for 'Record'.",
                imageDescription: "Sign for record with open hands going down"
            },
            {
                choice: "Your record is deactivated / inactive.",
                correct: true,
                feedback: "✅ Correct! This sign means 'Your record is deactivated or inactive.' ❌",
                imageDescription: "Hands closing or stopping action."
            },
        ],
    },
    {//application for reactivation
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F864e8ef786584c3ba01d2e48da8fbfb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=864e8ef786584c3ba01d2e48da8fbfb7&alt=media&optimized=true",
        options: [
            {
                choice: "Your application type is not new, it is for reactivation.",
                correct: true,
                feedback: "✅ Correct! This means your application is for reactivation.",
                imageDescription: "Hands showing reactivation sign as if reopening something with both hands facing down and reopening"
            },
            {
                choice: "You record is active.",
                correct: false,
                feedback: "❌ This sign means something else.",
                imageDescription: "Sign indicating active record."
            },
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "❌ Not the sign for asking help here.",
                imageDescription: "Questioning hand gesture"
            },
            {
                choice: "Your record is deactivated / inactive.",
                correct: false,
                feedback: "❌ Different sign, try again!",
                imageDescription: "Inactive record gesture with hands placed downward and imitating closing gesture"
            },
        ],
    },
    {//capture thumbprints
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e6c1869bb234b868130f2866f9e694b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e6c1869bb234b868130f2866f9e694b&alt=media&optimized=true",
        options: [
            {
                choice: "We will take your picture.",
                correct: false,
                feedback: "❌ This sign is for scanning thumbprints.",
                imageDescription: "Gesture taking picture"
            },
            {
                choice: "We will scan your thumbprint and index prints.",
                correct: true,
                feedback: "✅ Correct! This sign means scanning thumb and index prints. 👍",
                imageDescription: "Hand showing scanning of thumb and index fingers"
            },
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "❌ This sign means something else.",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Scan your fingerprint",
                correct: false,
                feedback: "❌ Different sign from this one, not quite close",
                imageDescription: "Not complete sentence"
            },
        ],
    },
    { // have valid id
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F16c9959c12004a33911a5664f10adab2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=16c9959c12004a33911a5664f10adab2&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "❌ This sign does not mean 'How may I help you?'. Try again!",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Your record is deactivated/inactive.",
                correct: false,
                feedback: "❌ This sign is not 'Your record is deactivated/inactive.' Please try another option.",
                imageDescription: "Hands making a stopping or closing gesture"
            },
            {
                choice: "Do you have a valid ID?",
                correct: true,
                feedback: "✅ Correct! This is the sign for 'Do you have a valid ID?'.",
                imageDescription: "Hand gestures mimicking showing or presenting an ID card, fingerspelling ID"
            },
            {
                choice: "Please fill out the form.",
                correct: false,
                feedback: "❌ This sign means 'Please fill out the form,' which is different from the video.",
                imageDescription: "Hand motion indicating writing or filling a form"
            }
        ]
    },
    {//registered in Baguio
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8d0e9627c9b849348f359352c6df3010%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8d0e9627c9b849348f359352c6df3010&alt=media&optimized=true",
        options: [
            {
                choice: "Are you registered in SK (Sangguniang Kabataan)?",
                correct: false,
                feedback: "❌ This is not the sign for SK registration.",
                imageDescription: "Fingerspell 'S' and 'K' near the chest and 'R' for register"
            },
            {
                choice: "Are you registered in Baguio City?",
                correct: true,
                feedback: "✅ Correct! This is the FSL sign for 'Are you registered in Baguio City?'",
                imageDescription: "Gesture for Baguio handshape B and shivering mimicking coldness, to show Baguio is a cold place"
            },
            {
                choice: "Are you registered abroad?",
                correct: false,
                feedback: "❌ This sign refers to being registered outside the country. Try again!",
                imageDescription: "Hand pointing outward indicating abroad, doing sign for 'other' and 'country', with C handshape circular motion near elbow"
            },
            {
                choice: "Register",
                correct: false,
                feedback: "❌ This sign means 'Register' in general, not the specific question asked.",
                imageDescription: "Hand signing a writing motion or enlisting gesture"
            },
        ],
    },
    {//registered in SK
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F88702384bd504672b5101b55ddb942c2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=88702384bd504672b5101b55ddb942c2&alt=media&optimized=true",
        options: [
            {
                choice: "Are you registered in SK (Sangguniang Kabataan)?",
                correct: true,
                feedback: "✅ Correct! This is the FSL sign for asking about SK registration",
                imageDescription: "Fingerspell 'S' and 'K' near the chest and 'R' for register"
            },
            {
                choice: "Are you registered in Baguio City?",
                correct: false,
                feedback: "❌ Not correct for this sign.",
                imageDescription: "Gesture for Baguio handshape B and shivering mimicking coldness, to show Baguio is a cold place"
            },
            {
                choice: "Are you registered abroad?",
                correct: false,
                feedback: "❌ Not correct for this sign.",
                imageDescription: "Hand pointing outward indicating abroad, doing sign for 'other' and 'country', with C handshape circular motion near elbow"
            },
            {
                choice: "Register",
                correct: false,
                feedback: "❌ This sign means 'Register' in general, not the specific question asked.",
                imageDescription: "Sign for registration R handshape"
            },
        ],
    },
    {//fill out the form
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true",
        options: [
            {
                choice: "Do you have a valid ID?",
                correct: false,
                feedback: "Wrong ❌ Try again!",
                imageDescription: "Hand gestures mimicking showing or presenting an ID card, fingerspelling ID"
            },
            {
                choice: "Please fill out the form.",
                correct: true,
                feedback: "✅ Correct! This is the FSL sign for filling out a form",
                imageDescription: "Hand motion indicating writing or filling a form"
            },
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "❌ This sign does not mean 'How may I help you?'. Try again!",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Please put your signature.",
                correct: false,
                feedback: "This sign does indicate putting your signature ❌ Try again! ✍️",
                imageDescription: "Dominant hand mimics writing on the other hand",
            },
        ],
    },
    {//voters certificate released when approved
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd82613bc7a4f5e8e65fef195ac079e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd82613bc7a4f5e8e65fef195ac079e&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "❌ This sign does not mean 'How may I help you?'. Try again!",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Once approved, your voter’s certificate will be released.",
                correct: true,
                feedback: "Correct! ✅ This is the FSL sign for certificate release after approval",
                imageDescription: "Hand gesture suggesting approval followed by a motion of giving or releasing a document"
            },
            {
                choice: "Please check if your personal information is correct.",
                correct: false,
                feedback: "❌ This sign is used to verify personal information, not the correct answer in this context",
                imageDescription: "Hand motion resembling checking or scanning over a document, followed by gestures pointing to oneself"
            },
            {
                choice: "Please put your signature.",
                correct: false,
                feedback: "This sign does indicate putting your signature ❌ Try again! ✍️",
                imageDescription: "Dominant hand mimics writing on the other hand",
            },
        ],
    },
    {//how long present barangay
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F21e3da74fcb84f84b60fb07a2260559d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=21e3da74fcb84f84b60fb07a2260559d&alt=media&optimized=true",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "❌ This sign does not mean 'How may I help you?'. Try again!",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Are you registered abroad?",
                correct: false,
                feedback: "❌ Not correct for this sign.",
                imageDescription: "Hand pointing outward indicating abroad, doing sign for 'other' and 'country', with C handshape circular motion near elbow"
            },
            {
                choice: "How long have you been residing in your present barangay?",
                correct: true,
                feedback: "Correct! This asks how long have you been living in present barangay",
                imageDescription: "Sign 'HOW' by using thumbs going in opposite direction, followed by 'LONG' using a slow upward motion from wrist to shoulder with L handshape, and 'LIVE' by doing Y handshape facing down near chest, then sign 'BARANGAY' by outlining a small community or group with both hands."
            },
            {
                choice: "Please put your signature.",
                correct: false,
                feedback: "This sign does indicate putting your signature ❌ Try again! ✍️",
                imageDescription: "Dominant hand mimics writing on the other hand",
            },
        ],
    },
    {//resident 6 months
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe255026b24fc41eeae6d7549a8cf38d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e255026b24fc41eeae6d7549a8cf38d7&alt=media&optimized=true",
        context: "Voter residency requirement 🏠",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "Not quite! ❓ This explains residency requirements",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Are you registered abroad?",
                correct: false,
                feedback: "Wrong question! ✈️ This is about local residency duration",
                imageDescription: "Hand pointing outward indicating abroad, doing sign for 'other' and 'country', with C handshape circular motion near elbow"
            },
            {
                choice: "How long have you been residing in your present barangay?",
                correct: false,
                feedback: "Close! ⏳ This states the 6-month requirement",
                imageDescription: "Sign 'HOW' by using thumbs going in opposite direction, followed by 'LONG' using a slow upward motion from wrist to shoulder with L handshape, and 'LIVE' by doing Y handshape facing down near chest, then sign 'BARANGAY' by outlining a small community or group with both hands."
            },
            {
                choice: "If you are a registered voter, you must be a resident for at least 6 months.",
                correct: true,
                feedback: "Correct! ⏳ You identified the 6-month residency requirement explanation",
                imageDescription: "Hand showing six fingers then pointing downward for 'months'"
            },
        ],
    },
    // C: Common answers
    {//registration next year
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F024a9f90929c4c93ac3d3d64cbbb61c3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=024a9f90929c4c93ac3d3d64cbbb61c3&alt=media&optimized=true",
        context: "Registration timeline 📅",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "Not quite! ❓ This is about future registration dates",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Next year",
                correct: false,
                feedback: "Almost! 📅 This is the full statement about registration timing",
                imageDescription: "Sign 'NEXT' by holding one hand flat and moving the other hand in an arc over it to land forward, then sign 'YEAR' by making closed fists with both hands and circling the dominant fist over the non-dominant before placing it on top"
            },
            {
                choice: "The national election will be held next year. ",
                correct: false,
                feedback: "Close! 🗳️ This refers to registration, not the election itself",
                imageDescription: "Sign 'ELECTION' by mimicking placing a ballot into a box, then sign 'NEXT YEAR' using an arc motion forward for 'next' and circling closed fists for 'year'."
            },
            {
                choice: "The next registration will be next year. ",
                correct: true,
                feedback: "Correct! 📅 You identified the future registration period announcement",
                imageDescription: "Hand moving forward while signing 'next year'"
            },
        ],
    },
    {//election next year
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae5fd834e74640faa88ce31d010b3c57%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae5fd834e74640faa88ce31d010b3c57&alt=media&optimized=true",
        context: "Election timeline 🗳️",
        options: [
            {
                choice: "How may I help you?",
                correct: false,
                feedback: "Not quite! ❓ This is about the election schedule",
                imageDescription: "Hands open, palms facing up with questioning expression"
            },
            {
                choice: "Next year",
                correct: false,
                feedback: "Almost! 📅 This is the full statement about election timing",
                imageDescription: "Sign 'NEXT' by holding one hand flat and moving the other hand in an arc over it to land forward, then sign 'YEAR' by making closed fists with both hands and circling the dominant fist over the non-dominant before placing it on top"
            },
            {
                choice: "The national election will be held next year. ",
                correct: true,
                feedback: "Exactly! 🗳️ You recognized the election schedule announcement",
                imageDescription: "Sign 'ELECTION' by mimicking placing a ballot into a box, then sign 'NEXT YEAR' using an arc motion forward for 'next' and circling closed fists for 'year'"
            },
            {
                choice: "The next registration will be next year. ",
                correct: false,
                feedback: "Close! ✏️ This refers to the election, not registration",
                imageDescription: "Sign 'REGISTRATION' with letter R handshape, then sign 'NEXT YEAR' with a forward hand motion followed by circling closed fists"
            },
        ],
    }
];

// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const loadingElement = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const signVideo = document.getElementById('sign-video');
const resultElement = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('question-counter');

// Add modal elements to DOM selection
const resultsModal = document.getElementById('results-modal');
const finalScoreDisplay = document.getElementById('final-score');
const backBtn = document.getElementById('back-btn');
const tryAgainBtn = document.getElementById('try-again-btn');

// Quiz state
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let selectedOption = null;
let answerSubmitted = false;
let userAnswers = [];

let answered = false;
let retryQuestions = [];

// Initialize the app
function init() {
    // Start the quiz immediately
    startQuiz();

    // Set up event listeners
    nextBtn.addEventListener('click', nextQuestion);
}

function initializeProgressBar() {
    progressBar.innerHTML = '';
    questions.forEach((question, index) => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';

        if (index < currentQuestionIndex) {
            // Check if the stored option has correct: true
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer ? userAnswer.correct : false;
            segment.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (index === currentQuestionIndex) {
            segment.classList.add('current');
        }

        progressBar.appendChild(segment);
    });
}

// Start a new quiz
function startQuiz() {
    loadingElement.style.display = 'block';
    quizContainer.style.display = 'none';

    setTimeout(() => {
        // Shuffle all questions and select first 15
        const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
        questions = shuffledQuestions.slice(0, 15);

        // Shuffle options for each selected question while preserving correct answer
        questions = questions.map(question => {
            // Find correct option
            const correctOption = question.options.find(opt => opt.correct);
            // Get all incorrect options
            const incorrectOptions = question.options.filter(opt => !opt.correct);
            // Shuffle incorrect options
            const shuffledIncorrect = [...incorrectOptions].sort(() => Math.random() - 0.5);
            // Random position for correct answer (0 to length of shuffled array)
            const correctPosition = Math.floor(Math.random() * (shuffledIncorrect.length + 1));

            // Insert correct answer at random position
            const finalOptions = [
                ...shuffledIncorrect.slice(0, correctPosition),
                correctOption,
                ...shuffledIncorrect.slice(correctPosition)
            ];

            return {
                ...question,
                options: finalOptions
            };
        });

        currentQuestionIndex = 0;
        score = 0;
        userAnswers = new Array(questions.length).fill(null);
        answered = false;

        initializeProgressBar();

        loadingElement.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
        scoreDisplay.textContent = '';
    }, 800);
}

function updateProgress(isCorrect) {
    const segments = progressBar.querySelectorAll('.progress-segment');
    const currentSegment = segments[currentQuestionIndex];
    currentSegment.classList.add(isCorrect ? 'correct' : 'incorrect');
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = "What is the sign language shown above?";
    signVideo.src = question.video;
    signVideo.load();

    optionsContainer.innerHTML = '';
    question.options.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        const choiceText = document.createElement('p');
        choiceText.textContent = option.choice;
        optionElement.appendChild(choiceText);

        optionElement.dataset.correct = option.correct;
        optionElement.addEventListener('click', () => handleOptionClick(optionElement, option));
        optionsContainer.appendChild(optionElement);
    });

    questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;

    // Fix this line - was using currentQuestion instead of currentQuestionIndex
    initializeProgressBar(); // This will update the progress bar correctly

    resultElement.textContent = '';
    resultElement.className = 'result';
    nextBtn.style.display = 'none';
    answered = false;
    optionsContainer.style.pointerEvents = 'auto';
}

async function getAIFeedback(mistakenSign, correctSign, context = "sign language recognition") {
    const userQuery = `Context: ${context}
Mistaken Sign: ${mistakenSign}
Correct Sign: ${correctSign}`;

    try {
        const feedback = await runGemini(userQuery);
        return feedback;
    } catch (error) {
        console.error("Error from Gemini:", error);
        return "Sorry, I couldn't generate feedback at this time.";
    }
}

async function handleOptionClick(optionElement, option) {
    if (answered) return;

    answered = true;
    optionsContainer.style.pointerEvents = 'none';
    nextBtn.style.display = 'flex';

    const isCorrect = option.correct;
    const question = questions[currentQuestionIndex];
    const correctOption = question.options.find(opt => opt.correct);

    if (isCorrect) {
        score++;
    }

    userAnswers[currentQuestionIndex] = option;
    updateProgress(isCorrect);

    if (resultElement) {
        resultElement.textContent = isCorrect ?
            `✅ Correct! ${option.feedback}` :
            `❌ Incorrect. ${option.feedback}`;
    }

    // Highlight selected option
    optionElement.classList.add(isCorrect ? 'correct' : 'wrong');

    // Highlight correct answer if wrong was selected
    if (!isCorrect) {
        const correctOptionElement = Array.from(optionsContainer.children).find(
            el => el.dataset.correct === 'true'
        );
        if (correctOptionElement) {
            correctOptionElement.classList.add('correct');
        }

        // Create loading spinner for AI feedback
        const aiLoadingSpinner = document.createElement('div');
        aiLoadingSpinner.className = 'ai-loading-spinner';
        aiLoadingSpinner.innerHTML = `
            <div class="spinner"></div>
            <span>Getting AI feedback...</span>
        `;
        resultElement.appendChild(document.createElement('br'));
        resultElement.appendChild(aiLoadingSpinner);

        // Get AI feedback for wrong answers
        try {
            const aiFeedback = await getAIFeedback(
                option.imageDescription,
                correctOption.imageDescription,
                question.context || "sign language recognition"
            );

            // Remove loading spinner
            aiLoadingSpinner.remove();

            // Create a new element for AI feedback
            const aiFeedbackElement = document.createElement('div');
            aiFeedbackElement.className = 'ai-feedback';
            aiFeedbackElement.innerHTML = `<strong>AI Feedback:</strong> ${aiFeedback}`;

            // Append after the result
            resultElement.appendChild(aiFeedbackElement);
        } catch (error) {
            console.error('Error getting AI feedback:', error);
            // Remove loading spinner and show error message
            aiLoadingSpinner.remove();
            const errorElement = document.createElement('div');
            errorElement.className = 'ai-feedback-error';
            errorElement.textContent = "Couldn't load AI feedback. Please try again.";
            resultElement.appendChild(errorElement);
        }
    }

    scoreDisplay.textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;

    // Hide next button again until next answer
    nextBtn.style.display = 'none';

    showQuestion();
}

// End of quiz
function endQuiz() {
    questionText.textContent = "Quiz completed!";
    optionsContainer.innerHTML = '';
    signVideo.src = '';
    resultElement.textContent = '';
    resultElement.className = 'result';
    nextBtn.style.display = 'none';

    // Show modal with final score
    finalScoreDisplay.textContent = `Your score: ${score} out of ${questions.length}`;
    resultsModal.style.display = 'flex';
}

// Event listeners for modal buttons
backBtn.addEventListener('click', () => {
    resultsModal.style.display = 'none';
    window.history.back();
});

tryAgainBtn.addEventListener('click', () => {
    resultsModal.style.display = 'none';
    startQuiz(); // This will reshuffle questions and reset the quiz
});

init();