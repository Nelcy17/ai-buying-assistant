import fs from "fs";

// load JSON manually (ESM safe)
const products = JSON.parse(
  fs.readFileSync(new URL("../data/products.json", import.meta.url))
);

export function getFilteredProducts(budget, category) {
  return products.filter((p) => {
    const matchBudget = budget ? p.price <= budget : true;
    const matchCategory = category ? p.category === category : true;

    return matchBudget && matchCategory;
  });
}


