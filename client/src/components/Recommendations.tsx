import type { ApiResponse } from "../types";

const Recommendations = ({ data }: { data?: ApiResponse }) => {
  if (!data?.ai?.recommendations) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">🤖 AI Suggestions</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {data.ai.recommendations.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">{item.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
