const DEEPSEEK_ENDPOINT = 'https://api.deepseek.com/v1/chat/completions';

async function getAIFeedback(userAnswer, correctAnswer, questionContext) {
const prompt = `As a Filipino Sign Language (FSL) teaching assistant, analyze this mistake:

- Question: ${questionContext}
- User's Answer: ${userAnswer}
- Correct Answer: ${correctAnswer}

Provide concise feedback that:
1. Explains why the answer was incorrect
2. Compares similar signs
3. Gives articulation tips
4. Suggests practice strategies
5. Uses simple language with emoji examples`;

try {
    const response = await fetch('/api/deepseek-proxy', { // Use backend proxy
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{
        role: "user",
        content: prompt
        }],
        temperature: 0.7
})
    });

    const data = await response.json();
    return data.choices[0].message.content;
} catch (error) {
    console.error('AI Feedback Error:', error);
    return "🤖 Our sign language coach is taking a break. Try again later!";
}
}