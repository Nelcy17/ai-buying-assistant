import extractQuery from "../utils/extractQuery.js";
import { getFilteredProducts } from "../services/productService.js";
import buildPrompt from "../utils/promptBuilder.js";
import { getAIResponse } from "../services/aiService.js";

export const handleQuery = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const { budget, category } = extractQuery(query);
    const products = getFilteredProducts(budget, category);

    // ✅ THIS WAS MISSING
    const prompt = buildPrompt(query, products);
    const aiResponse = await getAIResponse(prompt);

    res.json({
      extracted: { budget, category },
      products,
      ai: aiResponse
    });

  } catch (error) {
    console.error("🔥 ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

