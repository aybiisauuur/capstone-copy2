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
You are a helpful FSL tutor. Help a student understand a mistake in identifying a sign language gesture.

Context: ${userQuery}

Please explain clearly:
- What the mistake was
- How to improve next time
- Keep it short and use emojis to help

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