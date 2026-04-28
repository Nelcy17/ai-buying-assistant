import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate("/tool", { state: { query } });
  };

  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      
      <h1 className="text-5xl font-bold mb-4">
        Stop Confusion. Buy Smarter.
      </h1>

      <p className="text-lg max-w-xl mx-auto">
        Get AI-powered recommendations, comparisons, and clear decisions in seconds.
      </p>

      {/* 🔥 Direct Search (BEST UX) */}
      <div className="mt-6 max-w-xl mx-auto">
        <SearchBox onSearch={handleSearch} />
      </div>

      {/* Optional fallback CTA */}
      <button
        onClick={() => navigate("/tool")}
        className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Explore Tool →
      </button>

    </section>
  );
}
