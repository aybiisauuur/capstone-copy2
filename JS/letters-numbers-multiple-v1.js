import runGemini from './greetings-mchoice-v2.js';

// Letters A-M and Numbers 1-16
const allQuestions = [
    {//A
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5fccd86c89ca4a819eff4375249c331f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5fccd86c89ca4a819eff4375249c331f&alt=media&optimized=true",
        context: "Letter A in sign language 👋",
        options: [
            {
                choice: "A",
                correct: true,
                feedback: "Great job! 👍 That's the letter A in ASL (American Sign Language)",
                imageDescription: "Hand held up with fingers together and thumb pressed against the side"
            },
            {
                choice: "B",
                correct: false,
                feedback: "Oops! ❌ That's not the letter A. Try again!",
                imageDescription: "Different hand shape than letter A"
            },
            {
                choice: "C",
                correct: false,
                feedback: "Not quite! ✋ The letter A looks different in ASL",
                imageDescription: "Incorrect hand formation"
            },
            {
                choice: "D",
                correct: false,
                feedback: "Close, but no! 🤔 Remember the thumb position for A",
                imageDescription: "Similar but incorrect hand position"
            }
        ]
    },
    {// B
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F290cea0025474b589dc5cb8eb49f3ba9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=290cea0025474b589dc5cb8eb49f3ba9&alt=media&optimized=true",
        context: "Letter B in sign language ✋",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "Nope! ❌ The letter B has all fingers extended",
                imageDescription: "Hand with fingers together (incorrect for B)"
            },
            {
                choice: "B",
                correct: true,
                feedback: "Perfect! 🎉 You recognized the letter B correctly!",
                imageDescription: "Hand with palm facing out and fingers extended straight up"

            },
            {
                choice: "C",
                correct: false,
                feedback: "Not quite! ✋ The letter B doesn't curve the fingers",
                imageDescription: "Hand with curved fingers (incorrect)"
            },
            {
                choice: "D",
                correct: false,
                feedback: "Almost! 🤏 But the thumb should be tucked for B",
                imageDescription: "Hand with thumb extended (incorrect)"
            },
        ],
    },
    {//C
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F54011d16d83f43a0b08e29cb4bd3b85a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=54011d16d83f43a0b08e29cb4bd3b85a&alt=media&optimized=true",
        context: "Letter C in sign language 🤙",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "No! ❌ The letter C curves the fingers into a C shape",
                imageDescription: "Flat hand (incorrect for C)"
            },
            {
                choice: "B",
                correct: false,
                feedback: "Not quite! ✋ The letter C isn't straight like B",
                imageDescription: "Straight fingers (incorrect)"
            },
            {
                choice: "C",
                correct: true,
                feedback: "Excellent! 👏 You got the curved C shape right!",
                imageDescription: "Hand forming a C shape with curved fingers"
            },
            {
                choice: "D",
                correct: false,
                feedback: "Close! 🤏 But C has more curve than this",
                imageDescription: "Partial curve (incorrect)"
            },
        ],
    },
    {//D
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true",
        context: "Letter D in sign language 👉",
        options: [
            {
                choice: "A",
                correct: false,
                feedback: "No! ❌ The letter D points upward with index finger",
                imageDescription: "Closed fist (incorrect)"
            },
            {
                choice: "B",
                correct: false,
                feedback: "Not quite! ✋ D uses just one extended finger",
                imageDescription: "All fingers extended (incorrect)"
            },
            {
                choice: "C",
                correct: false,
                feedback: "Almost! 🤏 But D points up, not curved like C",
                imageDescription: "Curved hand (incorrect)"
            },
            {
                choice: "D",
                correct: true,
                feedback: "Perfect! 🎯 You nailed the D sign!",
                imageDescription: "Index finger pointing up with other fingers curled"
            },
        ],
    },
    {// E
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F09d452abb113431c964f677706fdf206%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=09d452abb113431c964f677706fdf206&alt=media&optimized=true",
        context: "Letter E in sign language ✊",
        options: [
            {
                choice: "E",
                correct: true,
                feedback: "Awesome! 👍 That's the letter E with fingers curled down",
                imageDescription: "Hand with fingers curled down over thumb"
            },
            {
                choice: "F",
                correct: false,
                feedback: "Not quite! ❌ E has all fingers curled, not just two",
                imageDescription: "Two fingers touching thumb (incorrect)"
            },
            {
                choice: "G",
                correct: false,
                feedback: "Oops! ✋ G points sideways, E curls all fingers",
                imageDescription: "Index finger pointing sideways (incorrect)"
            },
            {
                choice: "H",
                correct: false,
                feedback: "Close! 🤏 But E curls all fingers together",
                imageDescription: "Two fingers extended (incorrect)"
            },
        ],
    },
    {// F
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd2f028d37e4e808c8f62e7bca974d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd2f028d37e4e808c8f62e7bca974d7&alt=media&optimized=true",
        options: [
            {
                choice: "E",
                correct: false,
                feedback: "Not quite! ❌ E has all fingers curled, not just two",
                imageDescription: "Hand with fingers curled down over thumb"
            },
            {
                choice: "F",
                correct: true,
                feedback: "Correct! Good job!",
                imageDescription: "Form the letter 'F' by touching the tip of the index finger and thumb together, while the other three fingers are extended upward."
            },
            {
                choice: "G",
                correct: false,
                feedback: "❌ Try again! That's not the correct letter.",
                imageDescription: "👉 Extend the index finger and thumb parallel to each other to form the letter 'G'"
            },
            {
                choice: "H",
                correct: false,
                feedback: "No feedback available",
                imageDescription: "N/A"
            },
        ],
    },
    {//G
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F62e09cc0c727427bb995cc959baaa951%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=62e09cc0c727427bb995cc959baaa951&alt=media&optimized=true",
        options: [
            {
                choice: "E",
                correct: false,
                feedback: "Not quite! ❌ E has all fingers curled, not just two",
                imageDescription: "Hand with fingers curled down over thumb"
            },
            {
                choice: "F",
                correct: false,
                feedback: "Not quite! ❌ F is formed with three fingers",
                imageDescription: "Form the letter 'F' by touching the tip of the index finger and thumb together, while the other three fingers are extended upward."
            },
            {
                choice: "G",
                correct: true,
                feedback: "Awesome! 👍 That's the letter G with index finger extended and thumb is parallel",
                imageDescription: "👉 Extend the index finger and thumb parallel to each other to form the letter 'G'"
            },
            {
                choice: "H",
                correct: false,
                feedback: "❌ Nope, try again! 🤞",
                imageDescription: "✌️ Two fingers extended side by side, representing the letter H"
            },
        ],
    },
    {//H
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F12ea87b8d6f04cafa323c0fe3c4c3ad7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=12ea87b8d6f04cafa323c0fe3c4c3ad7&alt=media&optimized=true",
        options: [
            {
                choice: "E",
                correct: false,
                feedback: "Not quite! ❌ E has all fingers curled, not just two",
                imageDescription: "Hand with fingers curled down over thumb"
            },
            {
                choice: "F",
                correct: false,
                feedback: "Not quite! ❌ F is formed with three fingers",
                imageDescription: "Form the letter 'F' by touching the tip of the index finger and thumb together, while the other three fingers are extended upward."
            },
            {
                choice: "G",
                correct: false,
                feedback: "❌ Nope, try again! 🤞",
                imageDescription: "👉 Extend the index finger and thumb parallel to each other to form the letter 'G'"
            },
            {
                choice: "H",
                correct: true,
                feedback: "Correct, great job!",
                imageDescription: "✌️ Two fingers extended side by side, representing the letter H"
            },
        ],
    },
    {//I
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F65a19409f4ca49778f42efa65a2e0437%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=65a19409f4ca49778f42efa65a2e0437&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: true,
                feedback: "✅ Correct! Well done! 👏",
                imageDescription: "Pinky finger extended upward, other fingers curled down — the sign for letter I"
            },
            {
                choice: "J",
                correct: false,
                feedback: "❌ Not quite! Try again! 👉 Draw the letter J with your pinky",
                imageDescription: "Pinky finger draws a 'J' shape in the air"
            },
            {
                choice: "K",
                correct: false,
                feedback: "❌ Nope! Keep practicing! ✌️ The sign for K is two fingers extended",
                imageDescription: "Index and middle fingers extended upward, thumb between them — sign for letter K"
            },
            {
                choice: "L",
                correct: false,
                feedback: "❌ Close! 👍 The sign for L looks like an 'L' shape with your hand",
                imageDescription: "Thumb and index finger form an L shape, other fingers curled"
            },
        ],
    },
    {// J
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6f261a2fc88d4a459ff0229ad9f350db%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6f261a2fc88d4a459ff0229ad9f350db&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: false,
                feedback: "❌ Nope! Keep practicing! ✌️ The sign for I is pinky finger extended upward",
                imageDescription: "Pinky finger extended upward, other fingers curled down — the sign for letter I"
            },
            {
                choice: "J",
                correct: true,
                feedback: "✅ Correct! Well done! 👏",
                imageDescription: "Pinky finger draws a 'J' shape in the air"
            },
            {
                choice: "K",
                correct: false,
                feedback: "❌ Nope! Keep practicing! ✌️ The sign for K is two fingers extended",
                imageDescription: "Index and middle fingers extended upward, thumb between them — sign for letter K"
            },
            {
                choice: "L",
                correct: false,
                feedback: "❌ Close! 👍 The sign for L looks like an 'L' shape with your hand",
                imageDescription: "Thumb and index finger form an L shape, other fingers curled"
            },
        ],
    },
    {// K
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6073f9a673414f869083f07dff1b3a62%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6073f9a673414f869083f07dff1b3a62&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: false,
                feedback: "❌ Nope! Keep practicing! ✌️ The sign for I is pinky finger extended upward",
                imageDescription: "Pinky finger extended upward, other fingers curled down — the sign for letter I"
            },
            {
                choice: "J",
                correct: false,
                feedback: "❌ Not quite! Try again! 👉 Draw the letter J with your pinky",
                imageDescription: "Pinky finger draws a 'J' shape in the air"
            },
            {
                choice: "K",
                correct: true,
                feedback: "✅ Correct! Well done! 👏",
                imageDescription: "Index and middle fingers extended upward, thumb between them — sign for letter K"
            },
            {
                choice: "L",
                correct: false,
                feedback: "❌ Close! 👍 The sign for L looks like an 'L' shape with your hand",
                imageDescription: "Thumb and index finger form an L shape, other fingers curled"
            },
        ],
    },
    {// L
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9947ca53a38d4c12be5dffa6c417b1c9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9947ca53a38d4c12be5dffa6c417b1c9&alt=media&optimized=true",
        options: [
            {
                choice: "I",
                correct: false,
                feedback: "❌ Nope! Keep practicing! ✌️ The sign for I is pinky finger extended upward",
                imageDescription: "Pinky finger extended upward, other fingers curled down — the sign for letter I"
            },
            {
                choice: "J",
                correct: false,
                feedback: "❌ Not quite! Try again! 👉 Draw the letter J with your pinky",
                imageDescription: "Pinky finger draws a 'J' shape in the air"
            },
            {
                choice: "K",
                correct: false,
                feedback: "❌ Nope! Keep practicing! ✌️ The sign for K is two fingers extended",
                imageDescription: "Index and middle fingers extended upward, thumb between them — sign for letter K"
            },
            {
                choice: "L",
                correct: true,
                feedback: "✅ Correct! Well done! 👏",
                imageDescription: "Thumb and index finger form an L shape, other fingers curled"
            },
        ],
    },
    {// M
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true",
        options: [
            {
                choice: "M",
                correct: true,
                feedback: "✅ Correct! Nice! ✋ The thumb is tucked under the three fingers — this is M",
                imageDescription: "Three fingers folded over the thumb forming the letter M"
            },
            {
                choice: "N",
                correct: false,
                feedback: "❌ Not quite! The letter N has two fingers over the thumb ✌️",
                imageDescription: "Two fingers folded over the thumb forming the letter N"
            },
            {
                choice: "O",
                correct: false,
                feedback: "❌ Nope! The letter O forms a circle with all fingers 🤏",
                imageDescription: "All fingers touch to form a round O shape"
            },
            {
                choice: "p",
                correct: false,
                feedback: "❌ Incorrect! The letter P is formed differently 👌",
                imageDescription: "Index finger points downward, middle finger extended, thumb out"
            },
        ],
    },
    {// 1
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd032915078144d4297e2016420cd93d2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d032915078144d4297e2016420cd93d2&alt=media&optimized=true",
        context: "Number 1 in sign language ☝️",
        options: [
            {
                choice: "1",
                correct: true,
                feedback: "Perfect! 🎯 That's the number one with index finger up!",
                imageDescription: "Index finger extended upward"
            },
            {
                choice: "2",
                correct: false,
                feedback: "Not quite! ❌ One uses just the index finger",
                imageDescription: "Two fingers extended (incorrect)"
            },
            {
                choice: "3",
                correct: false,
                feedback: "Oops! ✋ Three fingers would be for number 3",
                imageDescription: "Three fingers extended (incorrect)"
            },
            {
                choice: "4",
                correct: false,
                feedback: "Close! 🤏 But one is just a single finger",
                imageDescription: "Four fingers extended (incorrect)"
            },
        ],
    },
    {// 2
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F76e1875707204d78bd83e663dc72356a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=76e1875707204d78bd83e663dc72356a&alt=media&optimized=true",
        options: [
            {
                choice: "1",
                correct: false,
                feedback: "Oops! ✋ Only one finger for number 1",
                imageDescription: "Index finger extended upward"
            },
            {
                choice: "2",
                correct: true,
                feedback: "Perfect! 🎯 That's the number two with index and middle finger up!",
                imageDescription: "Two fingers extended upward"
            },
            {
                choice: "3",
                correct: false,
                feedback: "Oops! ✋ Three fingers would be for number 3",
                imageDescription: "Three fingers extended (incorrect)"
            },
            {
                choice: "4",
                correct: false,
                feedback: "Close! 🤏 But one is just a single finger",
                imageDescription: "Four fingers extended (incorrect)"
            },
        ],
    },
    {// 3
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Feee6e662ad644ef7b7b3d327390529ef%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=eee6e662ad644ef7b7b3d327390529ef&alt=media&optimized=true",
        options: [
            {
                choice: "1",
                correct: false,
                feedback: "Oops! ✋ Only one finger for number 1",
                imageDescription: "Index finger extended upward"
            },
            {
                choice: "2",
                correct: false,
                feedback: "Not quite! ❌ Two fingers upward for number 2",
                imageDescription: "Two fingers extended (incorrect)"
            },
            {
                choice: "3",
                correct: true,
                feedback: "Perfect! 🎯 That's the number three with three fingers extended",
                imageDescription: "Three fingers extended"
            },
            {
                choice: "4",
                correct: false,
                feedback: "Close! 🤏 But three is just three fingers",
                imageDescription: "Four fingers extended (incorrect)"
            },
        ],
    },
    {// 4
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd66d7209be94c40b3f79c25d106d082%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd66d7209be94c40b3f79c25d106d082&alt=media&optimized=true",
        options: [
            {
                choice: "1",
                correct: false,
                feedback: "Oops! ✋ Only one finger for number 1",
                imageDescription: "Index finger extended upward"
            },
            {
                choice: "2",
                correct: false,
                feedback: "Not quite! ❌ Two fingers upward for number 2",
                imageDescription: "Two fingers extended (incorrect)"
            },
            {
                choice: "3",
                correct: false,
                feedback: "Oops! ✋ Three fingers would be for number 3",
                imageDescription: "Three fingers extended (incorrect)"
            },
            {
                choice: "4",
                correct: true,
                feedback: "Perfect! 🎯 That's the number four",
                imageDescription: "Four fingers extended"
            },
        ],
    },
    {// 5
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe47908419cfd4fd0a84e9f55e1eb8e8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e47908419cfd4fd0a84e9f55e1eb8e8c&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: true,
                feedback: "👍 Correct! The hand shows all five fingers open for number 5.",
                imageDescription: "Open hand with all five fingers extended."
            },
            {
                choice: "6",
                correct: false,
                feedback: "❌ Not quite! Number 6 is shown by touching the thumb to the pinky finger.",
                imageDescription: "Thumb touching the pinky finger, other fingers extended."
            },
            {
                choice: "7",
                correct: false,
                feedback: "❌ Nope! Number 7 is thumb touching the ring finger.",
                imageDescription: "Thumb touching the ring finger, other fingers extended."
            },
            {
                choice: "8",
                correct: false,
                feedback: "❌ Incorrect! Number 8 is thumb touching the middle finger.",
                imageDescription: "Thumb touching the middle finger, other fingers extended."
            },
        ],
    },
    {// 6
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5089f4e1f0d5480d96eb46ad11c1dabc%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5089f4e1f0d5480d96eb46ad11c1dabc&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: false,
                feedback: "❌ Not quite! Number 5 is shown by extending all fingers",
                imageDescription: "Open hand with all five fingers extended."
            },
            {
                choice: "6",
                correct: true,
                feedback: "👍 Correct! The thumb touches the pinky finger with others extended",
                imageDescription: "Thumb touching the pinky finger, other fingers extended."
            },
            {
                choice: "7",
                correct: false,
                feedback: "❌ Nope! Number 7 is thumb touching the ring finger.",
                imageDescription: "Thumb touching the ring finger, other fingers extended."
            },
            {
                choice: "8",
                correct: false,
                feedback: "❌ Incorrect! Number 8 is thumb touching the middle finger.",
                imageDescription: "Thumb touching the middle finger, other fingers extended."
            },
        ],
    },
    {// 7
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7db247b436bf4ecb8336e18f93461b5a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7db247b436bf4ecb8336e18f93461b5a&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: false,
                feedback: "❌ Not quite! Number 5 is shown by extending all fingers",
                imageDescription: "Open hand with all five fingers extended."
            },
            {
                choice: "6",
                correct: false,
                feedback: "❌ Not quite! Number 6 is shown by touching the thumb to the pinky finger.",
                imageDescription: "Thumb touching the pinky finger, other fingers extended."
            },
            {
                choice: "7",
                correct: true,
                feedback: "👍 Correct! The thumb touches the ring finger with others extended",
                imageDescription: "Thumb touching the ring finger, other fingers extended."
            },
            {
                choice: "8",
                correct: false,
                feedback: "❌ Incorrect! Number 8 is thumb touching the middle finger.",
                imageDescription: "Thumb touching the middle finger, other fingers extended."
            },
        ],
    },
    {// 8
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffa1a21fd83d54e1e8dd5b0e9a0df1efb%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fa1a21fd83d54e1e8dd5b0e9a0df1efb&alt=media&optimized=true",
        options: [
            {
                choice: "5",
                correct: false,
                feedback: "❌ Not quite! Number 5 is shown by extending all fingers",
                imageDescription: "Open hand with all five fingers extended."
            },
            {
                choice: "6",
                correct: false,
                feedback: "❌ Not quite! Number 6 is shown by touching the thumb to the pinky finger.",
                imageDescription: "Thumb touching the pinky finger, other fingers extended."
            },
            {
                choice: "7",
                correct: false,
                feedback: "❌ Nope! Number 7 is thumb touching the ring finger.",
                imageDescription: "Thumb touching the ring finger, other fingers extended."

            },
            {
                choice: "8",
                correct: true,
                feedback: "👍 Correct! The thumb touches the middle finger with others extended",
                imageDescription: "Thumb touching the middle finger, other fingers extended."
            },
        ],
    },
    {// 9
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd53ae3657600478b8ed781c05aa09bb7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d53ae3657600478b8ed781c05aa09bb7&alt=media&optimized=true",
        options: [
            {
                choice: "9",
                correct: true,
                feedback: "👍 Correct! Number 9 is shown by touching the thumb to the index finger.",
                imageDescription: "Thumb touching the index finger, other fingers extended."
            },
            {
                choice: "10",
                correct: false,
                feedback: "❌ Not quite! Number 10 is shown by making a fist and shaking it.",
                imageDescription: "Closed fist shaking side to side."
            },
            {
                choice: "11",
                correct: false,
                feedback: "❌ Nope! Number 11 is shown by flicking the index finger.",
                imageDescription: "Index finger flicking upward."
            },
            {
                choice: "12",
                correct: false,
                feedback: "❌ Incorrect! Number 12 is shown by flicking the index and middle fingers.",
                imageDescription: "Index and middle fingers flicking upward."
            },
        ],
    },
    {// 10
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb407e21cce084ae5a0c055a7cf762200%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b407e21cce084ae5a0c055a7cf762200&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: true,
                feedback: "🎉 Correct! Number 10 is shown by making a fist and shaking it",
                imageDescription: "Closed fist shaking side to side"
            },
            {
                choice: "20",
                correct: false,
                feedback: "❌ Nope! Number 20 is signed differently using both hands.",
                imageDescription: "Index and thumb extended doing letter 'G' shape shaking and moving forward"
            },
            {
                choice: "30",
                correct: false,
                feedback: "❌ Incorrect! Number 30 involves more finger movements.",
                imageDescription: "Fingers forming '3' shape moving forward"
            },
            {
                choice: "40",
                correct: false,
                feedback: "❌ Not right! Number 40 is signed with a different handshape.",
                imageDescription: "Four fingers extended moving forward"
            },
        ],
    },
    {//11
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: false,
                feedback: "❌ Not quite! Number 10 is shown by making a fist and shaking it.",
                imageDescription: "Closed fist shaking side to side."
            },
            {
                choice: "11",
                correct: true,
                feedback: "🎉 Correct! Number 11 is signed by extending the index finger and flicking it twice.",
                imageDescription: "Index finger extended flicking twice."
            },
            {
                choice: "12",
                correct: false,
                feedback: "❌ Incorrect! Number 12 is signed by extending index and middle fingers.",
                imageDescription: "Index and middle fingers extended and flicked."
            },
            {
                choice: "13",
                correct: false,
                feedback: "❌ No, number 13 uses three fingers.",
                imageDescription: "Index, middle, and ring fingers extended and flicked"
            },
        ],
    },
    {// 12
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff75b399a4163499bba950f0f1bc2fc09%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f75b399a4163499bba950f0f1bc2fc09&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: false,
                feedback: "❌ Not quite! Number 10 is shown by making a fist and shaking it.",
                imageDescription: "Closed fist shaking side to side."
            },
            {
                choice: "11",
                correct: false,
                feedback: "Incorrect! ❌ Number 11 is signed by extending the index finger and flicking it twice.",
                imageDescription: "Index finger extended flicking twice"
            },
            {
                choice: "12",
                correct: true,
                feedback: "Correct! 🎉 Number 12 is signed by extending index and middle fingers.",
                imageDescription: "Index and middle fingers extended and flicked."
            },
            {
                choice: "13",
                correct: false,
                feedback: "❌ No, number 13 uses three fingers.",
                imageDescription: "Index, middle, and ring fingers extended and flicked"
            },
        ],
    },
    {// 13
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe4bd8a6532114dc6af5936065dc2e2a6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e4bd8a6532114dc6af5936065dc2e2a6&alt=media&optimized=true",
        options: [
            {
                choice: "10",
                correct: false,
                feedback: "❌ Not quite! Number 10 is shown by making a fist and shaking it.",
                imageDescription: "Closed fist shaking side to side."
            },
            {
                choice: "11",
                correct: false,
                feedback: "Incorrect! ❌ Number 11 is signed by extending the index finger and flicking it twice.",
                imageDescription: "Index finger extended flicking twice"
            },
            {
                choice: "12",
                correct: false,
                feedback: "❌ Incorrect! Number 12 is signed by extending index and middle fingers.",
                imageDescription: "Index and middle fingers extended and flicked."
            },
            {
                choice: "13",
                correct: true,
                feedback: "Correct! 🎉 number 13 uses three fingers.",
                imageDescription: "Index, middle, and ring fingers extended and flicked"
            },
        ],
    },
    {// 14
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fefc74a7e5ce34e87ad2276e95a0735d6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=efc74a7e5ce34e87ad2276e95a0735d6&alt=media&optimized=true",
        options: [
            {
                choice: "14",
                correct: true,
                feedback: "🎉 Correct! Number 14 is signed by extending the thumb and three fingers.",
                imageDescription: "Thumb and index, middle, ring fingers extended and flicked"
            },
            {
                choice: "15",
                correct: false,
                feedback: "❌ Almost! Number 15 uses the thumb and all four fingers extended.",
                imageDescription: "Open hand with all fingers extended and flicked"
            },
            {
                choice: "4",
                correct: false,
                feedback: "❌ Incorrect! Number 4 is shown by extending four fingers without the thumb.",
                imageDescription: "Index, middle, ring, and pinky fingers extended"
            },
            {
                choice: "5",
                correct: false,
                feedback: "❌ Not quite! Number 5 is an open hand with all fingers spread out.",
                imageDescription: "Open hand with fingers spread"
            },
        ],
    },
    {// 15
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3d8880ab1fa4b538b5730fafee406d3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3d8880ab1fa4b538b5730fafee406d3&alt=media&optimized=true",
        options: [
            {
                choice: "14",
                correct: false,
                feedback: "❌ Not quite! Number 14 is s signed by extending the thumb and three fingers",
                imageDescription: "Thumb and index, middle, ring fingers extended and flicked"
            },
            {
                choice: "15",
                correct: true,
                feedback: "🎉 Correct! Number 14 is signed by extending the thumb and three fingers.",
                imageDescription: "Open hand with all fingers extended and flicked"
            },
            {
                choice: "4",
                correct: false,
                feedback: "Close! 🤏 But three is just three fingers",
                imageDescription: "Four fingers extended (incorrect)"
            },
            {
                choice: "5",
                correct: false,
                feedback: "❌ Not quite! Number 5 is shown by extending all fingers",
                imageDescription: "Open hand with all five fingers extended."
            },
        ],
    },
    {// 16
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0d24e2572969418ab3c85984188de5da%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0d24e2572969418ab3c85984188de5da&alt=media&optimized=true",
        context: "Number 16 in sign language 🤟",
        options: [
            {
                choice: "16",
                correct: true,
                feedback: "Excellent! 🎉 You recognized the number 16 correctly!",
                imageDescription: "Pinky finger touching thumb, then flicking pinky against thumb twice"
            },
            {
                choice: "17",
                correct: false,
                feedback: "Not quite! ❌ 17 has a different movement pattern",
                imageDescription: "Ring finger touching thumb, then flicking ring finger against thumb twice"
            },
            {
                choice: "6",
                correct: false,
                feedback: "Oops! ✋ 6 is just the first part of this sign",
                imageDescription: "Thumb touching the pinky finger, other fingers extended."
            },
            {
                choice: "7",
                correct: false,
                feedback: "Close! 🤏 Number 7 is thumb touching the ring finger",
                imageDescription: "Thumb touching the ring finger, other fingers extended."
            },
        ],
    },
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
        // Shuffle all questions and select first 8
        const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
        questions = shuffledQuestions.slice(0, 15);

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

function handleOptionClick(optionElement, option) {
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

    // Show feedback
    resultElement.innerHTML = isCorrect
        ? `✅ Correct! ${option.feedback}`
        : `❌ Incorrect. ${option.feedback}`;

    // Highlight selected option
    optionElement.classList.add(isCorrect ? 'correct' : 'wrong');

    // If wrong, highlight correct answer and show imageDescription
    if (!isCorrect) {
        const correctOptionElement = Array.from(optionsContainer.children).find(
            el => el.dataset.correct === 'true'
        );
        if (correctOptionElement) {
            correctOptionElement.classList.add('correct');
        }

        // Show correct sign's imageDescription (if available)
        if (correctOption.imageDescription && correctOption.imageDescription !== "N/A") {
            const imageDescriptionElement = document.createElement('div');
            imageDescriptionElement.className = 'image-description';
            imageDescriptionElement.innerHTML = `<strong>Explanation:</strong> ${correctOption.imageDescription}`;
            resultElement.appendChild(document.createElement('br'));
            resultElement.appendChild(imageDescriptionElement);
        }
    }

  scoreDisplay.textContent = `Score: ${score}/${questions.length}`;
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