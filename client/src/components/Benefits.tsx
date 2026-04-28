export default function Benefits() {
  const items = [
    "No more endless searching",
    "Compare products instantly",
    "AI explains pros & cons",
    "Make confident decisions"
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Use This?</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
