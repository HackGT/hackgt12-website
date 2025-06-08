import { useEffect, useRef, useState } from "react"; // Import useState
import "./App.css";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./components/about/AboutPage";
import { HeroPage } from "./components/hero/HeroPage";
import { FAQSection } from "./components/faq/FAQSection";
import { SponsorsSection } from "./components/sponsors/SponsorsSection";
import { Footer } from "./components/footer/Footer";
import TimelinePage from "./components/timeline/TimelinePage";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false); // State to track screen size

  useEffect(() => {
    // Function to check screen size against Tailwind's 'lg' breakpoint (1024px)
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      if (!isLargeScreen) return; // Only apply horizontal scroll on large screens

      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const rect = container.getBoundingClientRect();
      const startY = window.scrollY + rect.top;
      const scrollY = window.scrollY;
      const scrollProgress = scrollY - startY;

      // Ensure maxScroll calculation accounts for potential differences in container height if not explicitly 300vh
      const maxScroll = container.offsetHeight - window.innerHeight;
      const percent = Math.min(scrollProgress / maxScroll, 1);

      content.style.transform = `translateX(-${percent * 200}vw)`;
    };

    if (isLargeScreen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      // If not a large screen, ensure any previous transform is reset
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(0)`;
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLargeScreen]); // Re-run effect when isLargeScreen changes

  return (
    <div>
      <NavBar />
      {/* Vertical scroll before */}

      <HeroPage />

      {/* Horizontal scroll section */}
      <section
        ref={containerRef}
        // Conditionally apply h-[300vh] for horizontal scroll effect on large screens
        className={`relative ${isLargeScreen ? "h-[300vh]" : "h-auto"}`}
      >
        <div className="sticky top-0 overflow-hidden lg:h-screen h-fit">
          <div
            ref={contentRef}
            // Conditionally apply horizontal scroll styles on large screens
            className={`position-relative snap-x bg-green-400 transition-transform ease-out scroll-smooth ${
              isLargeScreen ? "flex w-[300vw]" : "block w-full"
            }`}
          >
            <AboutPage />

            <img
              className="pillar1 hidden lg:block"
              src="/about_pillar.png"
            ></img>

            <div
              className="w-screen snap-start h-screen bg-blue-400 flex items-center justify-center text-4xl"
              id="room2"
            >
              Room 2
            </div>

            <img
              className="pillar2 hidden lg:block"
              src="/about_pillar.png"
            ></img>

            <TimelinePage />
          </div>

          <img
            src="/about_floor.png"
            alt="________"
            className="horiz-scroll-floor hidden lg:block"
          />
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
