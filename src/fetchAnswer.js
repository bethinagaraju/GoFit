async function fetchAnswer(prompt) {
  try {
    // const apiKey = "AIzaSyCZdbexw8-79pcrTQ5qVpZilad2ZlqpjqU";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCZdbexw8-79pcrTQ5qVpZilad2ZlqpjqU`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a fitness assistant. Only answer questions related to fitness, diets, nutriations and exercises fitness-related questions, including workout plans, diet tips, and exercise suggestions.. If the question is unrelated, politely respond: 'I can only help with fitness-related questions.'\n\nUser: ${prompt}`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    if (data.candidates) {
      return data.candidates[0]?.content?.parts[0]?.text || "No response from AI";
    } else {
      throw new Error("Invalid API Response");
    }
  } catch (error) {
    console.error("API Error:", error);
    return "Failed to fetch response";
  }
}


export default fetchAnswer;
