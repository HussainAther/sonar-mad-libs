const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { words, style } = req.body;
  const prompt = `Write a ${style.toLowerCase()} story using these words: ${words.join(', ')}. Include real facts and cite your sources.`;

  try {
    const response = await axios.post(
      'https://api.perplexity.ai/sonar', // Example endpoint
      {
        query: prompt,
        model: 'sonar-pro', // Use the specific model you’re approved for
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SONAR_API_KEY}`,
        },
      }
    );

    res.json({ story: response.data.output || 'No story generated.' });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch from Sonar API' });
  }
});

module.exports = router;

