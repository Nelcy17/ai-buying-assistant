import type { ApiResponse } from "../types";

const BestPick = ({ data }: { data: ApiResponse }) => {
  const best = data.ai?.recommendations?.[0];

  if (!best) return null;

  return (
    <div className="bg-green-200 p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold">🏆 Best Pick</h2>
      <p className="font-semibold mt-2">{best.name}</p>
      <p className="text-sm">{best.reason}</p>
    </div>
  );
};

export default BestPick;

