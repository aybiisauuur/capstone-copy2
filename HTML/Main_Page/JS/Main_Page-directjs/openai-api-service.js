const OPENAI_API_KEY = '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';
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

async function getAIFeedback(wrongDesc, correctDesc, context) {
  const prompt = `As a Filipino Sign Language (FSL) tutor, analyze this mistake:

- Question context: ${context}
- User's Answer: ${wrongDesc}
- Correct Answer: ${correctDesc}

Provide clear and friendly feedback that:
1. Explains the mistake simply
2. Compares the signs
3. Offers tips for improvement
4. Uses examples or emojis if helpful`;

  try {
    const response = await fetch(OPENAI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4', // You can switch to 'gpt-3.5-turbo' if needed
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    return data?.choices?.[0]?.message?.content || '🤖 No response from the AI.';
  } catch (error) {
    console.error('OpenAI feedback error:', error);
    return '⚠️ Could not connect to OpenAI. Please check your internet or API key.';
  }
}
