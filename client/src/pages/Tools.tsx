import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";
import BestPick from "../components/BestPick";
import Recommendations from "../components/Recommendations";
import ComparisonTable from "../components/ComparisonTable";
import Summary from "../components/Summary";

import { sendQuery } from "../services/api";
import type { ApiResponse } from "../types";

export default function Tool() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const location = useLocation();

  const handleSearch = async (query: string) => {
    if (!query) return;

    setLoading(true);
    try {
      const res = await sendQuery(query);
      setData(res);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    console.log("SEARCH TRIGGERED:", query);
  };

  useEffect(() => {
  console.log("STATE:", location.state);
}, []);

useEffect(() => {
  const query = location.state?.query;
  if (query) {
    handleSearch(query);
    window.history.replaceState({}, document.title);
  }
}, [location.state]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center">
        What Should I Buy?
      </h1>

      {/* Search */}
      <SearchBox onSearch={handleSearch} />

      {loading && (
        <p className="text-center text-gray-500">Thinking...</p>
      )}

      {data && (
        <div className="space-y-6">

          {/* Extracted Info */}
          <div className="bg-gray-100 p-4 rounded-lg flex justify-between">
            <p><strong>Budget:</strong> ₹{data.extracted?.budget}</p>
          </div>

          {/* 🏆 Best Pick */}
          <BestPick data={data} />

          {/* 🤖 AI Recommendations */}
          <Recommendations data={data} />

          {/* 📊 Comparison Table */}
          <ComparisonTable products={data.products} />

          {/* 💡 Summary */}
          <Summary summary={data.ai?.summary} />

          {/* 🛍️ All Products */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              🛒 All Options
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {data.products?.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </div>
          </div>

          {data?.ai?.error && (
            <p className="text-red-500 text-center">
              AI is temporarily unavailable. Showing basic results.
            </p>
          )}

        </div>
      )}
    </div>
  );
}





