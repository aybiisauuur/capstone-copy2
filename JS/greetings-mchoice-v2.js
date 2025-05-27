import { GoogleGenerativeAI,HarmCategory,HarmBlockThreshold } from "https://esm.sh/@google/generative-ai";

// const MODEL_NAME = "gemini-1.5-pro";
const MODEL_NAME = "models/gemini-2.5-flash-preview-04-17";
const API_KEY = "AIzaSyATctNVqgore2AdbdwuZhdeiY3ryvTGuIk"; // account ni faith calica pag naubos yung quota change the env
async function run(userQuery) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const generationConfig = {
    temperature: 0.2,
    topP: 1,
    topK: 1,
    maxOutputTokens: 2048,
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

const sensyaPrompt = `
You are Haru, an AI sign language tutor for Filipino Sign Language (FSL). When given a mistaken sign and the correct sign, your job is to:
- Correctly describe the FSL sign for the word.
- Break it down into clear, simple bullet points (1 sentence each).
- Provide a Tagalog version of the description after the English one.
- Include a short practice activity.
- End with words of encouragement.
- Use bullet formatting only.
- Add line breaks after each bullet point.

Example response format:

"Hello there! I'm Haru, your FSL tutor assistant. The correct sign for 'HELLO' is:

How to sign it (English):
- Place your flat hand at your forehead.
- Move it outward in a short salute motion.

Paano ito gawin (Tagalog):
- Ilagay ang flat hand sa noo.
- Igala ito palabas na parang nag-sa-salute.


Practice Exercise:
- Try doing the sign 5 times in the mirror each morning!
You're doing great! Keep it up and let me know what you'd like to learn next. 😊

Now here’s the feedback for:

Context: ${userQuery}

Let's start:
`;

const chat = model.startChat({
    // history: [],
    generationConfig,
    safetySettings, 
})

const result = await chat.sendMessage(sensyaPrompt);
const response = await result.response;
console.log(response.text());
return response.text();
}

export default run;