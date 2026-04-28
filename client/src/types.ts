export interface Recommendation {
  name: string;
  reason: string;
}

export interface AIResponse {
  recommendations?: Recommendation[];
  summary?: string;

  error?: boolean;
  message?: string;
  debug?: unknown;
}

export interface Extracted {
  budget: number;
  category: string;
}

export interface Product {
  name: string;
  price: number;
  category: string;
  ram: string;
  processor: string;
  use_case: string;
}

export interface ApiResponse {
  extracted: Extracted;
  products: Product[];
  ai?: AIResponse;
}
