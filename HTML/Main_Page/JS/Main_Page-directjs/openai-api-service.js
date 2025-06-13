// const HF_API_KEY = 'your-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-api-key';
// const HF_MODEL_ENDPOINT = 'https://api-inference.huggingface.com/models/mistralai/Mistral-7B-Instruct-v0.2';
// const HF_MODEL_ENDPOINT = 'https://api-inference.huggingface.com/models/mistralai/Mistral-7B-Instruct-v0.2';

// async function getAIFeedback(wrongDesc, correctDesc, context) {
//   const prompt = `[INST] As a sign language expert, analyze this mistake:
  
// - Context: ${context}
// - User's Sign: ${wrongDesc}
// - Correct Sign: ${correctDesc}

// Provide concise feedback comparing these signs. Include:
// 1. Key differences
// 2. Memory tips
// 3. Common mistakes
// 4. Emojis for engagement [/INST]`;

//   try {
//       const response = await fetch(HF_API_ENDPOINT, {
//           method: 'POST',
//           headers: {
//               'Authorization': `Bearer ${HF_API_KEY}`,
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               inputs: prompt,
//               parameters: {
//                   max_new_tokens: 300,
//                   temperature: 0.65,
//                   top_p: 0.9,
//                   repetition_penalty: 1.2
//               }
//           })
//       });

//       // Handle API errors
//       if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.error || 'API request failed');
//       }

//       const data = await response.json();
//       return data[0]?.generated_text || '🤖 AI response format unexpected';

//   } catch (error) {
//       console.error('Hugging Face service error:', error);
//       return `⚠️ Error: ${error.message}`;
//   }
// }
