import { useEffect, useRef, useState } from "react"; // Import useState
import "./App.css";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./components/about/AboutPage";
import { HeroPage } from "./components/hero/HeroPage";
import { FAQSection } from "./components/faq/FAQSection";
import { SponsorsSection } from "./components/sponsors/SponsorsSection";
import { Footer } from "./components/footer/Footer";
import { TracksPage } from "./components/tracks/TracksPage";
import TimelinePage from "./components/timeline/TimelinePage";
import { TracksPageMobile } from "./components/tracks/TracksPageMobile";
import TimelinePageThin from "./components/timeline/thinscreen/TimelinePageThin";
import { HeroPageMobile } from "./components/hero/HeroPageMobile";

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

  const scrollToSection = (sectionId: string) => {
    if (!isLargeScreen) {
      // For mobile/tablet, use normal scroll behavior
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // For large screens with horizontal scroll
    const container = containerRef.current;
    if (!container) return;

    let targetPercent = 0;
    switch (sectionId) {
      case "about":
        targetPercent = 0; // First section (0%)
        break;
      case "tracks":
        targetPercent = 0.5; // Middle section (50%)
        break;
      case "schedule":
        targetPercent = 1; // Last section (100%)
        break;
      default: {
        // For FAQ and Sponsors, scroll to the vertical section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
    }

    // Calculate the scroll position needed
    const rect = container.getBoundingClientRect();
    const startY = window.scrollY + rect.top;
    const maxScroll = container.offsetHeight - window.innerHeight;
    const targetScrollY = startY + targetPercent * maxScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar onNavigate={scrollToSection} />
      {/* Vertical scroll before */}

      <div id="home">{isLargeScreen ? <HeroPage /> : <HeroPageMobile />}</div>

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
            <div id="about">
              <AboutPage />
            </div>

            <img
              className="pillar1 hidden lg:block z-50"
              src="/about_pillar.webp"
            ></img>

            <div id="tracks">
              <div className="hidden lg:block">
                <TracksPage />
              </div>
              <div className="block lg:hidden">
                <TracksPageMobile />
              </div>
            </div>

            <img
              className="pillar2 hidden lg:block"
              src="/about_pillar.webp"
            ></img>

            <div id="schedule">
              {isLargeScreen ? <TimelinePage /> : <TimelinePageThin />}
            </div>
          </div>

          <img
            src="/about_floor.webp"
            alt="________"
            className="horiz-scroll-floor hidden lg:block"
          />
        </div>
      </section>

      {/* Vertical scroll resumes */}
      <section className=" bg-gradient-to-b from-[#070045] to-[#211B73] min-h-screen">
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
