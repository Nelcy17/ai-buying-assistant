import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Tool from "./pages/Tools"; // ✅ Import the Tool logic component

function LandingPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* ✅ Change 'Home' to 'Tool' so the logic actually runs */}
        <Route path="/tool" element={<Tool />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

