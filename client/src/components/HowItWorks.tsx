export default function HowItWorks() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div>
          <h3 className="font-bold">1. Enter Query</h3>
          <p className="text-sm">e.g. laptop under 60k</p>
        </div>

        <div>
          <h3 className="font-bold">2. AI Analyzes</h3>
          <p className="text-sm">Filters & compares</p>
        </div>

        <div>
          <h3 className="font-bold">3. Get Results</h3>
          <p className="text-sm">Clear recommendation</p>
        </div>
      </div>
    </section>
  );
}
