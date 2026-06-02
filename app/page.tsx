import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-6">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
