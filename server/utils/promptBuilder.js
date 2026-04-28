function buildPrompt(query, products) {
  return `
You are a product recommendation AI.

User Query:
"${query}"

Available Products:
${JSON.stringify(products)}

TASK:
- Pick best 3 products
- Explain why
- Compare them

STRICT RULES:
- ONLY use given products
- DO NOT invent anything
- KEEP response SHORT
- RETURN ONLY JSON

FORMAT:
{
  "recommendations": [
    {
      "name": "",
      "reason": ""
    }
  ],
  "summary": ""
}
`;
}

export default buildPrompt;
