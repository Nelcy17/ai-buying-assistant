import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="border p-2 w-full"
        placeholder="e.g. Best laptop under 60000"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4">
        Search
      </button>
    </form>
  );
}
