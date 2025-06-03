// src/api/ai.js
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const generateAIResponse = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/ai/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};
