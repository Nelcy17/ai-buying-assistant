// src/services/api.ts
import  type { ApiResponse } from "../types";

export const sendQuery = async (query: string): Promise<ApiResponse> => {
  const response = await fetch("http://localhost:5000/api/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from backend");
  }

  return response.json();
};



