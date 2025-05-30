import { useEffect, useRef } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./components/about/AboutPage";
import { Room } from "./components/Room";
import { HeroPage } from "./components/hero/HeroPage";
import { FAQSection } from "./components/faq/FAQSection";
import { SponsorsSection } from "./components/sponsors/SponsorsSection";
import { Footer } from "./components/footer/Footer";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const rect = container.getBoundingClientRect();
      const startY = window.scrollY + rect.top;
      const scrollY = window.scrollY;
      const scrollProgress = scrollY - startY;

      const maxScroll = container.offsetHeight - window.innerHeight;
      const percent = Math.min(scrollProgress / maxScroll, 1);

      content.style.transform = `translateX(-${percent * 200}vw)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar />
      {/* Vertical scroll before */}

      <HeroPage />

      {/* Horizontal scroll section */}
      <section ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            ref={contentRef}
            className="snap-x flex w-[300vw] bg-green-400 h-screen transition-transform ease-out scroll-smooth"
          >
            <AboutPage />
            <div
              className="w-screen snap-start h-screen bg-blue-400 flex items-center justify-center text-4xl"
              id="room2"
            >
              Room 2
            </div>
            <div className="w-screen snap-start h-screen bg-blue-500 flex items-center justify-center text-4xl">
              Room 3
            </div>
          </div>
        </div>
      </section>

      {/* Vertical scroll resumes */}
      <section className=" bg-gradient-to-b from-[#170E5C] to-[#251B73] min-h-screen">
        <div className="p-8 flex flex-col gap-32">
          <FAQSection />
          <SponsorsSection />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
