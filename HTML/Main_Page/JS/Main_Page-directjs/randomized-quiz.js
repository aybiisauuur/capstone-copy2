import runGemini from './greetings-mchoice-v2.js';

// At least 30 Questions 
const questionsData = [
    // greetings
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Nice to Meet you", "Good Evening"],
        correct: "Nice to Meet you"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Long time no see", "Good Evening"],
        correct: "Long time no see"
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"See you Later\"?",
        options: [
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3777c6e27e3f42999eaebbbd9a6c1af8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3777c6e27e3f42999eaebbbd9a6c1af8&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true"
        ],
        correct: 2
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"Take Care\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa02fcbe819a24d88bea5918decc1e7c1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a02fcbe819a24d88bea5918decc1e7c1&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7a3d592fbc7241739897b3d7336a1b74%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7a3d592fbc7241739897b3d7336a1b74&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3777c6e27e3f42999eaebbbd9a6c1af8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3777c6e27e3f42999eaebbbd9a6c1af8&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3ef3cd35689b42f280a7c2be69efc380%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3ef3cd35689b42f280a7c2be69efc380&alt=media&optimized=true"
        ],
        correct: 0
    },
    //good evening
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff29e00c1818c45d5b3cabcb8ebee33b0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f29e00c1818c45d5b3cabcb8ebee33b0&alt=media&optimized=true",
        correct: true,
        caption: "Good evening"
    },
    //youre welcome
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1330f800fdd3413ca8ee1edb4e30484a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1330f800fdd3413ca8ee1edb4e30484a&alt=media&optimized=true",
        correct: true,
        caption: "You're Welcome"
    },
    //thank you
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3ef3cd35689b42f280a7c2be69efc380%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3ef3cd35689b42f280a7c2be69efc380&alt=media&optimized=true",
        correct: true,
        caption: "Thank you"
    },
    //good morning
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8a331bdfb150415a93cd7ded28cd38a2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8a331bdfb150415a93cd7ded28cd38a2&alt=media&optimized=true",
        correct: true,
        caption: "Good Morning"
    },
    // Questions
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5462c54d4b494113be5805bb98f8a083%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5462c54d4b494113be5805bb98f8a083&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Where do you live?", "Where are you from?", "Where?"],
        correct: "Where are you from?"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc7bb3d9a5dd54ba5875b95c91b381b3d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c7bb3d9a5dd54ba5875b95c91b381b3d&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["What?", "Where are you from?", "What time is it?"],
        correct: "What time is it?"
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"What are you doing?\" ?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9e199843ced94714bfd3e7535b8b9f82%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9e199843ced94714bfd3e7535b8b9f82&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F72ada87ecfc548df94317bbf3f127957%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=72ada87ecfc548df94317bbf3f127957&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true"
        ],
        correct: 2 // Changed from 3 to 2 (zero-based index)
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"Where are you going?\" ?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F24e928cbba594eb6ad79b7ca8f0d8481%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=24e928cbba594eb6ad79b7ca8f0d8481&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F58e1520b8349490ea59fb6c517164746%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=58e1520b8349490ea59fb6c517164746&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7e5977ff886d4841af8086cdf6ca2336%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7e5977ff886d4841af8086cdf6ca2336&alt=media&optimized=true"
        ],
        correct: 3 // Changed from 3 to 2 (zero-based index)
    },
    // how old are you
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F136be3a00e8943a68a786b15fa63fff6%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=136be3a00e8943a68a786b15fa63fff6&alt=media&optimized=true",
        correct: true,
        caption: "How old are you?"
    },
    // where do you live
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F345add533ac84c7599493c02a7766ab7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=345add533ac84c7599493c02a7766ab7&alt=media&optimized=true",
        correct: true,
        caption: "Where do you live?"
    },
    // what is your name
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbb7fcf30b9a145a1b0b3dcc7988ab909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bb7fcf30b9a145a1b0b3dcc7988ab909&alt=media&optimized=true",
        correct: true,
        caption: "What is your name?"
    },
    // what 
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Faea548e6c24a4551a40b0a9dc8fe373d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=aea548e6c24a4551a40b0a9dc8fe373d&alt=media&optimized=true",
        correct: true,
        caption: "What?"
    },
    // conversation
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"Deaf\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true"
        ],
        correct: 0
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"Hearing\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true"
        ],
        correct: 1
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"Hard-of-Hearing\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true"
        ],
        correct: 2
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Yes/Agree", "No/Disagree", "Shaking"],
        correct: "Yes/Agree"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Yes/Agree", "No/Disagree", "Shaking"],
        correct: "No/Disagree"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["What is your name?", "My name is___.", "Good Evening"],
        correct: "My name is___."
    },
    // COMELEC Phrases
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"Vote\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true"
        ],
        correct: 1
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for \"Voter\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F28ecb2fb7ed3465da85f76c228355228%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=28ecb2fb7ed3465da85f76c228355228&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff2e2862975a34d998cb355ce845fa274%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f2e2862975a34d998cb355ce845fa274&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8ef2c0eefca04b2c91e4264e89a9f854%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8ef2c0eefca04b2c91e4264e89a9f854&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F021b9de71d5b40d6afcd08c3362b149e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=021b9de71d5b40d6afcd08c3362b149e&alt=media&optimized=true"
        ],
        correct: 2
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F46b9dc2953db4495ae59626a951e0f7c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=46b9dc2953db4495ae59626a951e0f7c&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Deactivated", "Your record is deactivated/inactive.", "Your application type is not new, it is for reactivation."],
        correct: "Your record is deactivated/inactive."
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F16c9959c12004a33911a5664f10adab2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=16c9959c12004a33911a5664f10adab2&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Do you have a valid ID?", "We will take your picture.", "We will scan your thumbprint and index prints."],
        correct: "Do you have a valid ID?"
    },
    // registered voter for 6 months
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe255026b24fc41eeae6d7549a8cf38d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e255026b24fc41eeae6d7549a8cf38d7&alt=media&optimized=true",
        correct: true,
        caption: "If you are a registered voter, you must be a resident for 6 months."
    },
    // next registration next year
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F024a9f90929c4c93ac3d3d64cbbb61c3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=024a9f90929c4c93ac3d3d64cbbb61c3&alt=media&optimized=true",
        correct: true,
        caption: "Next registration will be next year."
    },
    // how may i help you
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fcd89d3b3810e483f83dcc8633c5bbec2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=cd89d3b3810e483f83dcc8633c5bbec2&alt=media&optimized=true",
        correct: true,
        caption: "How may I help you?"
    },
    // please fill out the form
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4003df5a5f364905ba4ff95c75e12d46%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4003df5a5f364905ba4ff95c75e12d46&alt=media&optimized=true",
        correct: true,
        caption: "Please fill out the form."
    },
    // Letters and Numbers
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for the letter \"G\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F62e09cc0c727427bb995cc959baaa951%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=62e09cc0c727427bb995cc959baaa951&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6f261a2fc88d4a459ff0229ad9f350db%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6f261a2fc88d4a459ff0229ad9f350db&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F12ea87b8d6f04cafa323c0fe3c4c3ad7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=12ea87b8d6f04cafa323c0fe3c4c3ad7&alt=media&optimized=true"
        ],
        correct: 0
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for the letter \"E\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F290cea0025474b589dc5cb8eb49f3ba9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=290cea0025474b589dc5cb8eb49f3ba9&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F09d452abb113431c964f677706fdf206%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=09d452abb113431c964f677706fdf206&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4b6e7e1bcee8420bbf510c7861ce36e1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4b6e7e1bcee8420bbf510c7861ce36e1&alt=media&optimized=true"
        ],
        correct: 1
    },
    {
        type: "video-multiple-choice",
        question: "Which video shows the Sign Language for the letter \"D\"?",
        options: [
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6073f9a673414f869083f07dff1b3a62%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6073f9a673414f869083f07dff1b3a62&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9947ca53a38d4c12be5dffa6c417b1c9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9947ca53a38d4c12be5dffa6c417b1c9&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true"
        ],
        correct: 2
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F25ade37426094a079a567f05af93d9fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=25ade37426094a079a567f05af93d9fe&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["100", "1000", "1 000 000 (1 million)"],
        correct: "100"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6ad63600af97441ebc54dd044221ee8c%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6ad63600af97441ebc54dd044221ee8c&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["100", "1000", "1 000 000 (1 million)"],
        correct: "1000"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe07d4e748fc341bcbd161ab668ab171b%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e07d4e748fc341bcbd161ab668ab171b&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["100", "1000", "1 000 000 (1 million)"],
        correct: "1 000 000 (1 million)"
    },
];


// DOM Elements
const questionsContainer = document.getElementById('questions');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const progressText = document.querySelector('.progress');
const resultsContainer = document.querySelector('.results');
const navigationContainer = document.querySelector('.navigation');
const spinner = document.getElementById('loading-spinner');
const container = document.querySelector('.container');

// Quiz State
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let selectedOption = null;
let answerSubmitted = false;
let userAnswers = [];

// Configuration
const config = {
    shuffleQuestions: true,
    totalQuestions: 20
};

// Initialize the app
function init() {
    startQuiz();
}

function startQuiz() {
    // Show loading spinner
    if (spinner) spinner.style.display = 'flex';

    // Hide questions temporarily
    document.getElementById('questions').style.display = 'none';
    document.querySelector('.progress').style.display = 'none';
    document.querySelector('.results').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
    document.querySelector('.progress-bar').style.display = 'none';

    setTimeout(() => {
        questions = [...questionsData];

        if (config.shuffleQuestions) {
            questions = shuffleArray(questions).slice(0, config.totalQuestions);
        } else {
            questions = questions.slice(0, config.totalQuestions);
        }

        renderQuestions();
        showQuestion(currentQuestionIndex);
        initializeProgressBar();
        nextButton.disabled = true;

        // Hide spinner when done
        if (spinner) spinner.style.display = 'none';
    }, 800);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initializeProgressBar() {
    progressBar.innerHTML = '';
    questions.forEach((question, index) => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';

        if (index < currentQuestionIndex) {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer ? userAnswer.correct : false;
            segment.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (index === currentQuestionIndex) {
            segment.classList.add('current');
        }

        progressBar.appendChild(segment);
    });
}

function renderQuestions() {
    const container = document.getElementById('questions');
    container.innerHTML = '';

    questions.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);
        container.appendChild(questionElement);
    });

    // Show questions again
    container.style.display = 'block';
    progressText.style.display = 'block';
    nextButton.style.display = 'flex';
    progressBar.style.display = 'flex';
}

function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.id = `question-${index}`;

    const typeHeader = `<div class="question-type">${question.type.replace('-', ' ').toUpperCase()}</div>`;
    let content = typeHeader + getQuestionContent(question, index);

    questionDiv.innerHTML = content;
    return questionDiv;
}

function getQuestionContent(question, index) {
    switch (question.type) {
        case 'video':
            return getVideoQuestionContent(question, index);
        case 'video-multiple-choice':
            return getVideoMultipleChoiceContent(question, index);
        case 'flashcard':
            return getFlashcardContent(question, index);
        default:
            return getDefaultQuestionContent(question, index);
    }
}

function getVideoQuestionContent(question, index) {
    return `
        <div class="video-container">
            <video controls controlsList="nodownload">
                <source src="${question.video}" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
        </div>
        <h3>${question.question}</h3>
        <div class="options">
            ${question.options.map((option, i) => `
                <div class="option" data-index="${i}">${option}</div>
            `).join('')}
        </div>
        <button class="final-answer" data-index="${index}">Final Answer</button>`;
}

function getVideoMultipleChoiceContent(question, index) {
    return `
        <h3>${question.question}</h3>
        <div class="video-options-grid">
            ${question.options.map((videoUrl, i) => `
                <div class="option video-option" data-index="${i}">
                    <video controls controlsList="nodownload">
                        <source src="${videoUrl}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            `).join('')}
        </div>
        <button class="final-answer" data-index="${index}">Final Answer</button>`;
}

function getFlashcardContent(question, index) {
    return `
        <div class="flashcard" data-index="${index}">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h3>${question.front} Click to flip the flashcard.</h3>
                </div>
                <div class="flashcard-back">
                    <video controls controlsList="nodownload">
                        <source src="${question.video}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        </div>
        <div class="flashcard-caption" style="display: none;">
            ${question.caption}
        </div>
        <div class="flashcard-controls" style="display: none;">
            <button class="flashcard-correct" data-index="${index}"> ✔ I understood</button>
            <button class="flashcard-wrong" data-index="${index}">✘ Need help</button>
        </div>`;
}

function getDefaultQuestionContent(question, index) {
    return `
        <h3>${question.question}</h3>
        <div class="options">
            ${question.options.map((option, i) => `
                <div class="option" data-index="${i}">${option}</div>
            `).join('')}
        </div>`;
}

function updateProgress(current) {
    progressText.textContent = `Question ${current} of ${questions.length}`;
}

function setupEventListeners() {
    // Event delegation for option clicks
    questionsContainer.addEventListener('click', (e) => {
        const option = e.target.closest('.option');
        if (option) {
            const questionElement = option.closest('.question');
            const questionIndex = parseInt(questionElement.id.split('-')[1]);
            const optionIndex = parseInt(option.dataset.index);
            selectAnswer(questionIndex, optionIndex);
        }

        const finalAnswerBtn = e.target.closest('.final-answer');
        if (finalAnswerBtn) {
            const questionIndex = parseInt(finalAnswerBtn.dataset.index);
            lockAnswer(questionIndex);
        }

        const flashcard = e.target.closest('.flashcard');
        if (flashcard) {
            const questionIndex = parseInt(flashcard.dataset.index);
            toggleFlashcard(questionIndex);
        }

        const correctBtn = e.target.closest('.flashcard-correct');
        if (correctBtn) {
            const questionIndex = parseInt(correctBtn.dataset.index);
            markFlashcardCorrect(questionIndex);
        }

        const wrongBtn = e.target.closest('.flashcard-wrong');
        if (wrongBtn) {
            const questionIndex = parseInt(wrongBtn.dataset.index);
            markFlashcardWrong(questionIndex);
        }
    });

    // Next button event listener
    nextButton.addEventListener('click', nextQuestion);
}

function toggleFlashcard(index) {
    const questionElement = document.getElementById(`question-${index}`);
    if (!questionElement) return;

    const card = questionElement.querySelector('.flashcard');
    if (!card) return;

    card.classList.toggle('flipped');

    const caption = questionElement.querySelector('.flashcard-caption');
    const video = card.querySelector('video');
    const controls = questionElement.querySelector('.flashcard-controls');

    if (card.classList.contains('flipped')) {
        // Hide caption initially
        if (caption) caption.style.display = 'none';

        if (video) {
            video.currentTime = 0;
            video.play().catch(e => console.log("Video play failed:", e));

            // Show caption when video ends
            video.onended = () => {
                if (caption) {
                    caption.style.display = 'block';
                    setTimeout(() => {
                        caption.classList.add('show');
                    }, 10);
                }
            };
        }

        // Show controls when flipped
        if (controls) controls.style.display = 'flex';
    } else {
        // Hide caption and controls when unflipped
        if (caption) caption.style.display = 'none';
        if (controls) controls.style.display = 'none';

        if (video) {
            video.pause();
            video.onended = null;
        }
    }
}

function markFlashcardCorrect(index) {
    const questionElement = document.getElementById(`question-${index}`);
    const card = questionElement.querySelector('.flashcard');
    const video = card ? card.querySelector('video') : null;

    if (video) video.pause();

    userAnswers[index] = { correct: true };
    score++;

    updateProgressBar(index, true);
    nextQuestion();
}

function markFlashcardWrong(index) {
    const questionElement = document.getElementById(`question-${index}`);
    const card = questionElement.querySelector('.flashcard');
    const video = card ? card.querySelector('video') : null;

    if (video) video.pause();

    userAnswers[index] = { correct: false };

    updateProgressBar(index, false);
    nextQuestion();
}

function showQuestion(index) {
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.getElementById(`question-${index}`).classList.add('active');
    updateProgress(index + 1);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        nextButton.disabled = true;
        initializeProgressBar();
    } else {
        showResults();
    }
}

function selectAnswer(questionIndex, answerIndex) {
    const question = questions[questionIndex];
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');

    options.forEach(opt => opt.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
    question.selected = answerIndex;

    if (question.type === 'video' || question.type === 'video-multiple-choice') {
        questionElement.querySelector('.final-answer').disabled = false;
    } else {
        nextButton.disabled = false;
    }
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

function lockAnswer(questionIndex) {
    const question = questions[questionIndex];
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');
    const finalAnswerBtn = questionElement.querySelector('.final-answer');

    finalAnswerBtn.classList.add('hidden');
    options.forEach(opt => opt.style.pointerEvents = 'none');

    const isCorrect = question.type === 'video-multiple-choice'
        ? question.selected === question.correct
        : question.options[question.selected] === question.correct;

    if (isCorrect) {
        score++;
        options[question.selected].classList.remove('selected');
        options[question.selected].classList.add('correct-answer');
    }

    userAnswers[questionIndex] = { correct: isCorrect };

    updateProgressBar(questionIndex, isCorrect);
    showFeedback(questionIndex, isCorrect);

    if (!isCorrect) {
        highlightCorrectAnswer(questionIndex);
        
        const feedbackDiv = questionElement.querySelector('.feedback');
        if (feedbackDiv) {
            const aiLoadingSpinner = document.createElement('div');
            aiLoadingSpinner.className = 'ai-loading-spinner';
            aiLoadingSpinner.innerHTML = `
                <div class="spinner"></div>
                <span>Getting AI feedback...</span>
            `;
            feedbackDiv.appendChild(document.createElement('br'));
            feedbackDiv.appendChild(aiLoadingSpinner);

            let mistakenSign, correctSign;
            
            if (question.type === 'video-multiple-choice') {
                mistakenSign = question.options[question.selected];
                correctSign = question.options[question.correct];
            } else {
                mistakenSign = question.options[question.selected];
                correctSign = question.correct;
            }

            getAIFeedback(mistakenSign, correctSign, question.context || "sign language recognition")
                .then(feedback => {
                    aiLoadingSpinner.remove();
                    const aiFeedbackElement = document.createElement('div');
                    aiFeedbackElement.className = 'ai-feedback';
                    aiFeedbackElement.innerHTML = `<strong>AI Feedback:</strong> ${feedback}`;
                    feedbackDiv.appendChild(aiFeedbackElement);
                })
                .catch(error => {
                    console.error('Error getting AI feedback:', error);
                    aiLoadingSpinner.remove();
                    const errorElement = document.createElement('div');
                    errorElement.className = 'ai-feedback-error';
                    errorElement.textContent = "Couldn't load AI feedback. Please try again.";
                    feedbackDiv.appendChild(errorElement);
                });
        }
    }

    nextButton.disabled = false;
}

function highlightCorrectAnswer(questionIndex) {
    const question = questions[questionIndex];
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const options = questionElement.querySelectorAll('.option');

    options.forEach(opt => {
        opt.classList.remove('selected', 'correct-answer');
    });

    if (question.type === 'video-multiple-choice') {
        options[question.correct].classList.add('correct-answer');
    } else {
        const correctIndex = question.options.findIndex(opt => opt === question.correct);
        if (correctIndex >= 0) {
            options[correctIndex].classList.add('correct-answer');
        }
    }

    if (question.selected !== undefined &&
        (question.type === 'video-multiple-choice'
            ? question.selected !== question.correct
            : question.options[question.selected] !== question.correct)) {
        options[question.selected].classList.add('selected');
    }
}

function showFeedback(questionIndex, isCorrect) {
    const questionElement = document.getElementById(`question-${questionIndex}`);
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;

    const existingFeedback = questionElement.querySelector('.feedback');
    if (existingFeedback) existingFeedback.remove();

    feedbackDiv.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect! Correct answer is highlighted.';
    questionElement.appendChild(feedbackDiv);
}

function updateProgressBar(index, isCorrect) {
    const segments = progressBar.querySelectorAll('.progress-segment');
    if (index < segments.length) {
        segments[index].classList.remove('current', 'correct', 'incorrect');
        segments[index].classList.add(isCorrect ? 'correct' : 'incorrect');

        if (index + 1 < segments.length) {
            segments[index + 1].classList.add('current');
        }
    }
}

function showResults() {
    resultsContainer.style.display = 'block';
    questionsContainer.style.display = 'none';
    progressText.style.display = 'none';
    progressBar.style.display = 'none';
    navigationContainer.style.display = 'none';

    resultsContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You scored ${score} out of ${questions.length}.</p>
        <button id="restartButton">Try Again</button>
    `;

    document.getElementById('restartButton').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    questionsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    questionsContainer.style.display = 'flex';
    progressText.style.display = 'block';
    progressBar.style.display = 'flex';
    navigationContainer.style.display = 'flex';
    nextButton.disabled = true;

    startQuiz();
}

// Initialize the quiz when the page loads
window.onload = function() {
    init();
    setupEventListeners();
};

// Expose necessary functions to the global scope
window.restartQuiz = restartQuiz;