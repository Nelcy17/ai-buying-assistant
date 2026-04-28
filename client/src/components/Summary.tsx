const Summary = ({ summary }: { summary?: string }) => {
  if (!summary) return null;

  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="font-bold">💡 Final Verdict</h2>
      <p className="text-sm mt-2">{summary}</p>
    </div>
  );
};

export default Summary;
