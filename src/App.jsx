import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <section className="min-h-screen" />
    </div>
  );
}

export default App;
