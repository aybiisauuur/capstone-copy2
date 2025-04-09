document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const OPENAI_API_KEY = 'sk-proj-...'; // very long key

  const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
  
  const video = document.getElementById("quiz-video");
  const replayButton = document.getElementById("replay-button");
  const optionsContainer = document.querySelector(".Options-container");
  

  let answered = false;
  let currentAttempt = 1;
  const maxAttempts = 2;
  let progressBars = { first: null, second: null };

  const allQuestions = [
      {//goodMorning
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdaaf40ef88e84bb6b94952f07a98a26c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=daaf40ef88e84bb6b94952f07a98a26c&alt=media&optimized=true",
        context: "Identifying morning greeting signs",
        options: [
          {
            image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",
            correct: true,
            feedback: "Correct! The upward palm movement represents sunrise 🌅",
            imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
          },
          {
            image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",
            correct: false,
            feedback: "This horizontal motion indicates afternoon ↔️ not morning",
            imageDescription: "Flat hand moving horizontally across chest level"
          },
          {
            image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",
            correct: false,
            feedback: "Downward motion is used for evening 🌙 not morning",
            imageDescription: "Hand moves downward from forehead with palm facing body"
          },
          {
            image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",
            correct: false,
            feedback: "waving hands signify 'Goodbye'👋",
            imageDescription: "Hands height close to face, waving"
          }
        ]
    },
    {//goodAfternoon
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd97c585713d542dda1cb425550c76f0c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d97c585713d542dda1cb425550c76f0c&alt=media&optimized=true",
      context: "Identifying afternoon greeting signs",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",
        correct: false,
        feedback: "The movement is not related, the upward motion signifies rising 🌅",
        imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",
        correct: true,
        feedback: "Correct! The horizontal movement indicates afternoon ↔️",
        imageDescription: "Flat hand moving horizontally across chest level"
        
        },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",
        correct: false,
        feedback: "Downward motion is used for evening 🌙 not morning",
        imageDescription: "Hand moves downward from forehead with palm facing body"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",
        correct: false,
        feedback:  "waving hands signify 'Goodbye'👋",
        imageDescription: "Hands height close to face, waving"
      },
      ],
    },
    {//goodEvening
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",
        correct: false,
        feedback: "The movement is not related, the upward motion signifies rising 🌅",
        imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",
        correct: false,
        feedback: "This horizontal motion indicates afternoon ↔️ not morning",
        imageDescription: "Flat hand moving horizontally across chest level"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",
        correct: true,
        feedback: "Correct! The downward motion indicates evening 🌙",
        imageDescription: "Hand moves downward from forehead with palm facing body"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",
        correct: false,
        feedback: "waving hands signify 'Goodbye'👋",
        imageDescription: "Hands height close to face, waving"
      },
      ],
    },
    {//goodbye
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdba4a7e655e04153ae79ebc7ff9e22a6%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=dba4a7e655e04153ae79ebc7ff9e22a6&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",
        correct: false,
        feedback: "The movement is not related, the upward motion signifies rising 🌅",
        imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",
        correct: false,
        feedback: "This horizontal motion indicates afternoon ↔️ not morning",
        imageDescription: "Flat hand moving horizontally across chest level"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",
        correct: false,
        feedback: "Downward motion is used for evening 🌙 not morning",
        imageDescription: "Hand moves downward from forehead with palm facing body"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",
        correct: true,
        feedback:  "waving hands signify 'Goodbye'👋",
        imageDescription: "Hands height close to face, waving"
      },
      ],
    },
    {//Hi/hello
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd702dd1b2538458098cba218905c9987%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d702dd1b2538458098cba218905c9987&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee9623bd1fb34f299937e7b766cde70c",
        correct: true,
        feedback: "Correct! The upward motion indicates 'Hi'🙋‍♂️",
        imageDescription: "Hand rises diagonally from shoulder height, palm facing up"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0cc9dbe371fa42ecad85a18dd44eb4f4",
        correct: false,
        feedback: "This horizontal motion indicates afternoon ↔️ not morning",
        imageDescription: "Flat hand moving horizontally across chest level"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d",
        correct: false,
        feedback: "Downward motion is used for evening 🌙 not morning",
        imageDescription: "Hand moves downward from forehead with palm facing body"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",
        correct: false,
        feedback: "waving hands signify 'Goodbye'👋",
        imageDescription: "Hands height close to face, waving"
      },
      ],
    },
    {//Thankyou
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F03895f6b3e8f40edb3a7f85b4f742329",
        correct: false,
        feedback: "Hands meeting in the middle indicates 'Nice to meet'🤝",
        imageDescription: "Sweeping the hands and fingers pointing and meeting together in the middle"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0cc9dbe371fa42ecad85a18dd44eb4f4",
        correct: false,
        feedback: "This horizontal motion indicates afternoon ↔️ not morning",
        imageDescription: "Flat hand moving horizontally across chest level"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d",
        correct: false,
        feedback: "Downward motion is used for evening 🌙 not morning",
        imageDescription: "Hand moves downward from forehead with palm facing body"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fcaeeff5c062242c2b98ec1c01db4dd6e",
      correct: true,
      feedback: "Correct! The upward motion indicates 'Thank you'☺️",
      imageDescription: "Hands in front of the persons chin, palm facing each other moving fro and back"
    },
      ],
    },
    {//YoureWelcome
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F03895f6b3e8f40edb3a7f85b4f742329",
        correct: false,
        feedback: "Hands meeting in the middle indicates 'Nice to meet'🤝",
        imageDescription: "Sweeping the hands and fingers pointing and meeting together in the middle"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F54697f4dfe8b424dbebc145297d19ad8",
        correct: true,
        feedback: "Correct! The upward motion indicates 'You're welcome'🤗",
        imageDescription: "Three fingers up from the chin and curving towards the belly"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F45fddb82d4a24da9b91db901efdecc9e",
        correct: false,
        feedback: "Downward motion is used for evening 🌙 not morning",
        imageDescription: "Hand moves downward from forehead with palm facing body"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F59628e384cea47cbbd4271409f20735f",
        correct: false,
        feedback: "Not a formal sign for 'You're Welcome'😌",
        imageDescription: "Not a formal Filipino Sign Language (FSL) sign"
      },
      ],
    },
    {//takecare
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9aa5c6e3c22a488c81ea9b78cd9d0a51%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=9aa5c6e3c22a488c81ea9b78cd9d0a51&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F3ef37707f8be497ea5bc41d8e0c1db5c",
        correct: true,
        feedback: "Correct! Hands on top of each other indicates 'Take care'🫂",
        imageDescription: "Hands on the side, on top of each other circling in front"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F4f2555bd89f944f187bdfb0de698ea60",
        correct: false,
        feedback: "not a greeting 'Are you ok?'😑",
        imageDescription: "Not a greeting more like a question"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fbe92bc4f62b149aa9406e2fbe0a8af13",
        correct: false,
        feedback: "not a greeting 'What?'🙄",
        imageDescription: "hands palm facing right up, doing a circular motion stationary to position"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F020a48b4ff484fcab6c03c9ae3d5e04c",
        correct: false,
        feedback: "Not greeting more like an action 'mixing' 🥣",
        imageDescription: "Used for something else like baking 'mixing'"
      },
      ],
    },
    {//LongTimeNoSee
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F03895f6b3e8f40edb3a7f85b4f742329",
        correct: false,
        feedback:"Hands meeting in the middle indicates 'Nice to meet'🤝",
        imageDescription: "Sweeping the hands and fingers pointing and meeting together in the middle"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F4f2555bd89f944f187bdfb0de698ea60",
        correct: false,
        feedback: "not a greeting more like an action of respect 'Salute'😑",
        imageDescription: "use to give respect to military or authority"
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d",
          correct: false,
          feedback: "waving motion is used for saying goodbye 👋 not seeing someone for a long time",
          imageDescription: "Hand waving from face height"
        },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7888824f70614803834c2ccae7e15b7e",
          correct: true,
          feedback: "Correct! The upward motion indicates 'Long time no see'🤷‍♂️",
          imageDescription: "Hands in front of the persons chin, palm facing each other moving fro and back"
        },
      ],
    },
    {//Seeyoulater
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd6bc29feeb1c4c8ba8cb47a40043a6e2",
        correct: false,
        feedback: "Is an indication of saying to see you in a location 📌",
        imageDescription: "Not much of a greeting sign",
      },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F4f2555bd89f944f187bdfb0de698ea60",
          correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fcdd4402b0d2048509ae614a695c9a18b",
          correct: true,
          feedback: "Correct! The action indication of seeing and motion of afternoon/later 'See you later'👋",
          imageDescription: "Pointing to the eye and motioning it upwards to the middle"
        },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9fa995778624418aa77effed293d4556",
        correct: false,
        feedback: "Correct! The upward motion indicates 'You're welcome'🤗",
        imageDescription: "Three fingers up from the chin and curving towards the belly"
      },
      ],
    },
    {//Nicetomeetyou
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F1588edd7d4a0462db20ea1ec7095a374",
          correct: true,
          feedback: "Correct! The upward motion indicates 'Nice to meet you'🤗",
          imageDescription: "Hands in front of the persons chin, palm facing each other moving fro and back",
        },
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fe238ac31364149dc9a6b1b1a56c405c8",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F1b513c5316cf4cf68090e058ec2edab1",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F6334972c503047c0aa6e856090dc1ad5",correct: false,},
      ],
    },
  ];

  let currentQuestions = allQuestions.slice();
  let currentQuestionIndex = 0;
  let retryQuestions = [];


  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-container';
  const firstProgressWrapper = document.createElement('div');
  firstProgressWrapper.className = 'progress-wrapper';
  const firstLabel = document.createElement('div');
  firstLabel.className = 'progress-label';
  firstLabel.textContent = 'First Attempt';
  progressBars.first = document.createElement('div');
  progressBars.first.className = 'progress-bar';
  firstProgressWrapper.append(firstLabel, progressBars.first);

  const secondProgressWrapper = document.createElement('div');
  secondProgressWrapper.className = 'progress-wrapper';
  secondProgressWrapper.style.display = 'none';
  const secondLabel = document.createElement('div');
  secondLabel.className = 'progress-label';
  secondLabel.textContent = 'Second Attempt';
  progressBars.second = document.createElement('div');
  progressBars.second.className = 'progress-bar';
  secondProgressWrapper.append(secondLabel, progressBars.second);

  progressContainer.append(firstProgressWrapper, secondProgressWrapper);
  document.querySelector('.quiz').insertBefore(progressContainer, document.querySelector('.next-container'));

  function initializeProgressBars() {
    progressBars.first.innerHTML = '';
    progressBars.second.innerHTML = '';
    allQuestions.forEach(() => {
      const segment = document.createElement('div');
      segment.className = 'progress-segment';
      progressBars.first.appendChild(segment);
    });
  }

  function updateProgress(isCorrect) {
    const currentBar = currentAttempt === 1 ? progressBars.first : progressBars.second;
    const segments = currentBar.querySelectorAll('.progress-segment');
    const currentSegment = segments[currentQuestionIndex];
    if (currentAttempt === 1) {
      currentSegment.classList.add(isCorrect ? 'correct' : 'incorrect');
    } else {
      currentSegment.classList.add(isCorrect ? 'retry-correct' : 'incorrect');
    }
  }

  async function getAIFeedback(wrongDesc, correctDesc, context) {
    console.log('Sending AI request...', { wrongDesc, correctDesc, context });
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an expert sign language tutor giving constructive feedback.'
            },
            {
              role: 'user',
              content: `I chose: '${wrongDesc}', but the correct sign was: '${correctDesc}' in the context of: '${context}'. Help me understand why.`
            }
          ],
          temperature: 0.7
        })
      });
  
      const data = await response.json();
      console.log('AI response:', data);
      return data?.choices?.[0]?.message?.content || '🤖 No response from the AI.';
    } catch (error) {
      console.error('OpenAI feedback error:', error);
      return '⚠️ Could not connect to OpenAI. Please check your internet or API key.';
    }
  }

  function handleOptionClick(event) {
    if (answered) return;
    const optionDiv = event.currentTarget;
    if (!optionDiv || !optionDiv.hasAttribute("data-correct")) return;
  
    answered = true;
    optionsContainer.style.pointerEvents = 'none';
    nextButton.style.display = 'flex';
  
    const isCorrect = optionDiv.getAttribute('data-correct') === 'true';
    const question = currentQuestions[currentQuestionIndex];
    const optionIndex = Array.from(optionDiv.parentNode.children).indexOf(optionDiv);
    const selectedOption = question.options[optionIndex];
    const correctOption = question.options.find(opt => opt.correct);
  
    const initialFeedbackEl = document.getElementById('initial-feedback');
    const analysisStatusEl = document.getElementById('analysis-status');
    initialFeedbackEl.className = 'initial-feedback';
    analysisStatusEl.className = 'analysis-status';
    initialFeedbackEl.innerHTML = isCorrect
      ? `✅ <strong>Correct!</strong><br>${selectedOption.feedback}`
      : `⚠️ <strong>Needs Practice:</strong><br>${selectedOption.feedback}`;
    initialFeedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');
  
    const overlay = optionDiv.querySelector(".overlay");
    if (overlay) overlay.classList.add(isCorrect ? "correct" : "incorrect");
    optionDiv.classList.add(isCorrect ? "correct" : "incorrect");
  
    updateProgress(isCorrect);
  
    if (!isCorrect) {
      analysisStatusEl.style.display = 'flex';
      setTimeout(() => {
        analysisStatusEl.innerHTML = `
          <div class="loading-spinner"></div>
          <span class="analysis-text">Analyzing your mistake...</span>`;
        analysisStatusEl.classList.add('loading');
      }, 1000);
  
      setTimeout(async () => {
        const aiResponse = await getAIFeedback(
          selectedOption.imageDescription,
          correctOption.imageDescription,
          question.context || 'greeting signs'
        );
        analysisStatusEl.classList.remove('loading');
        analysisStatusEl.innerHTML = `
          🕵️ <strong>Expert Analysis:</strong>
          <div class="ai-feedback">${aiResponse}</div>
          <div class="practice-tip">💡 Practice Tip: ${correctOption.feedback}</div>`;
      }, 1000);
  
      if (!retryQuestions.includes(question)) {
        retryQuestions.push(question);
      }
    }
  }
  


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

  function loadQuestion(questionIndex) {
    answered = false;
    optionsContainer.style.pointerEvents = 'auto';
    const question = currentQuestions[questionIndex];
    video.src = question.video;
    video.load();
    optionsContainer.innerHTML = "";
    const initialFeedbackEl = document.getElementById('initial-feedback');
    const analysisStatusEl = document.getElementById('analysis-status');
    initialFeedbackEl.innerHTML = '';
    analysisStatusEl.innerHTML = '';
    analysisStatusEl.style.display = 'none';
  
    question.options.forEach((optionData, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add(`Option_${String.fromCharCode(65 + index)}`);
      optionDiv.setAttribute("data-correct", optionData.correct);
      const img = document.createElement("img");
      img.src = optionData.image;
      img.alt = `Option ${String.fromCharCode(65 + index)}`;
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      optionDiv.appendChild(img);
      optionDiv.appendChild(overlay);
      optionDiv.addEventListener("click", handleOptionClick);
      optionsContainer.appendChild(optionDiv);
    });
  }

  currentQuestions = shuffleArray([...allQuestions]);

  const nextButton = document.getElementById('next-button');
  nextButton.style.display = 'none';
  nextButton.addEventListener('click', () => {
    console.log("Next button clicked");
    const initialFeedbackEl = document.getElementById('initial-feedback');
    const analysisStatusEl = document.getElementById('analysis-status');
    if (initialFeedbackEl) {
      initialFeedbackEl.innerHTML = '';
      initialFeedbackEl.className = 'initial-feedback';
    }
    if (analysisStatusEl) {
      analysisStatusEl.innerHTML = '';
      analysisStatusEl.className = 'analysis-status';
    }

    document.querySelectorAll('.Options-container > div').forEach(option => {
      option.classList.remove('correct', 'incorrect');
      const overlay = option.querySelector('.overlay');
      if (overlay) overlay.classList.remove('correct', 'incorrect');
    });

    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuestions.length) {
      if (retryQuestions.length > 0 && currentAttempt < maxAttempts) {
        currentAttempt++;
        secondProgressWrapper.style.display = 'block';
        progressBars.second.innerHTML = '';
        retryQuestions.forEach(() => {
          const segment = document.createElement('div');
          segment.className = 'progress-segment';
          progressBars.second.appendChild(segment);
        });
        currentQuestions = [...retryQuestions];
        retryQuestions = [];
        currentQuestionIndex = 0;
      } else {
        alert("Quiz completed!");
        currentAttempt = 1;
        currentQuestionIndex = 0;
        initializeProgressBars();
        secondProgressWrapper.style.display = 'none';
      }
    }

    loadQuestion(currentQuestionIndex);
    nextButton.style.display = 'none';
  });

  initializeProgressBars();
  loadQuestion(currentQuestionIndex);

  replayButton.addEventListener("click", function () {
    video.currentTime = 0;
    video.play();
    replayButton.classList.remove("visible");
    replayButton.classList.add("hidden");
  });
});
