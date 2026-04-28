import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">

      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          What Should I Buy?
        </h1>

        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          Stop wasting hours comparing products.  
          Get AI-powered recommendations instantly.
        </p>

        <Link
          to="/tool"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Try Now →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">⚡ Fast Decisions</h3>
          <p>No more endless scrolling and confusion.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">🤖 AI Powered</h3>
          <p>Smart recommendations based on your needs.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">📊 Compare Easily</h3>
          <p>See differences clearly in one place.</p>
        </div>
      </div>

    </div>
  );
}
