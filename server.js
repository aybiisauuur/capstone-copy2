// gpt code: ginawa ko DELETE

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // v2 syntax

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const HF_API_KEY = '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';
const HF_ENDPOINT = 'https://api-inference.huggingface.com/models/mistralai/Mistral-7B-Instruct-v0.2';

app.post('/ask-ai', async (req, res) => {
  try {
      const prompt = req.body.prompt;

      const hfResponse = await fetch(HF_ENDPOINT, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${HF_API_KEY}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              inputs: prompt,
              parameters: {
                  max_new_tokens: 100,
                  temperature: 0.7,
                  return_full_text: false
              }
          })
      });

      const raw = await hfResponse.text(); // Read raw text first
      try {
          const data = JSON.parse(raw); // Try parsing
          if (hfResponse.status !== 200) {
              console.error('HuggingFace API error:', data);
              return res.status(hfResponse.status).json({ error: data.error || 'AI error' });
          }
          res.json(data);
      } catch (e) {
          console.error('Invalid JSON returned:', raw);
          res.status(500).json({ error: 'Invalid JSON returned from Hugging Face API' });
      }
  } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
