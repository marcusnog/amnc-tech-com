import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Problems } from "./components/sections/Problems";
import { Solutions } from "./components/sections/Solutions";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
