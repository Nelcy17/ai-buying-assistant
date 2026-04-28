import type { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>RAM: {product.ram}</p>
      <p>Processor: {product.processor}</p>
      <p className="text-sm text-gray-500">
        {product.use_case}
      </p>
    </div>
  );
}
