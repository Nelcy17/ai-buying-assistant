function extractQuery(query) {
  // extract budget (first number found)
  const budgetMatch = query.match(/\d+/);
  const budget = budgetMatch ? parseInt(budgetMatch[0]) : null;

  // basic category detection
  let category = "laptop";
  if (query.toLowerCase().includes("phone")) category = "phone";

  return { budget, category };
}

export default extractQuery;


