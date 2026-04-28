import axios from "axios";

export async function getAIResponse(prompt) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("AI RAW RESPONSE:", response.data); 

    const raw = response.data?.choices?.[0]?.message?.content;

    if (!raw) throw new Error("Empty AI response");

    const cleaned = raw.replace(/```json|```/g, "").trim();

    return JSON.parse(cleaned);

  } catch (error) {
    console.error("🔥 FULL AI ERROR:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("Message:", error.message);

    return {
      error: true,
      debug: error.response?.data || error.message
    };
  }
}




