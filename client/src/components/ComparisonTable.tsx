import type { Product } from "../types.ts";

const ComparisonTable = ({ products }: { products: Product[] }) => {
  if (!products.length) return null;

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-3">📊 Compare Products</h2>

      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Feature</th>
            {products.map((p, i) => (
              <th key={i} className="p-2">{p.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-2 font-semibold">Price</td>
            {products.map((p, i) => (
              <td key={i} className="p-2">₹{p.price}</td>
            ))}
          </tr>

          <tr>
            <td className="p-2 font-semibold">RAM</td>
            {products.map((p, i) => (
              <td key={i} className="p-2">{p.ram}</td>
            ))}
          </tr>

          <tr>
            <td className="p-2 font-semibold">Processor</td>
            {products.map((p, i) => (
              <td key={i} className="p-2">{p.processor}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

