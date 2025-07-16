import "./App.css";
import "./index.css";

import { useEffect, useRef, useState } from "react"; // Import useState
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
import { SEOMetaTags } from "./components/SEOMetaTags";
import { StructuredData } from "./components/StructuredData";
import { ArrowDown } from "lucide-react";

const HORIZ_SCROLL_SPEED_MULTIPLIER = 0.5;

// when to play the hinge animation on the about page
const ABOUT_PAGE_HINGE_ANIMATION_THRESHOLD = window.innerHeight * 0.7;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollToExploreRef = useRef<HTMLDivElement>(null);

  // the hinge animation should only play once when the user FIRST scrolls there.
  // set to true once they pass the threshold and the animation has played once
  const [aboutPageHingeAnimationDone, setAboutPageHingeAnimationDone] = useState(false);

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

      // only run once
      if (!aboutPageHingeAnimationDone) {
        if (window.scrollY > ABOUT_PAGE_HINGE_ANIMATION_THRESHOLD) {
          setAboutPageHingeAnimationDone(true);
        }
      }

      // first manage the opacity of the scroll-to-explore text
      // this should be applied regardless of screen size
      if (scrollToExploreRef.current) {
        const opacity = 1 - window.scrollY / window.innerHeight;
        scrollToExploreRef.current.style.opacity = `${opacity}`;
        if (opacity <= 0) {
          scrollToExploreRef.current.style.display = "none"; // delete if fully gone (otherwise they can still click)
        } else {
          scrollToExploreRef.current.style.display = "flex";
        }
      }

      // ignore everything else if on mobile since we dont have horiz. scroll there
      if (!isLargeScreen) return;

      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const rect = container.getBoundingClientRect();

      // i did the math trust me bro
      const scrollProgress = -rect.top / (window.innerHeight * (3 / HORIZ_SCROLL_SPEED_MULTIPLIER - 1));
      const clampedScrollProgress = Math.max(Math.min(scrollProgress, 1), 0);
      content.style.transform = `translateX(-${clampedScrollProgress * 200}vw)`;
    };

    window.addEventListener("scroll", handleScroll);
  
    if (!isLargeScreen) {
    // If not a large screen, ensure any previous transform is reset
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(0)`;
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutPageHingeAnimationDone, isLargeScreen]); // Re-run effect when isLargeScreen changes

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
    <div className="relative">
      <SEOMetaTags />
      <StructuredData />
      <NavBar onNavigate={scrollToSection} />
      {/* Vertical scroll before */}

      <div id="home">{isLargeScreen ? <HeroPage /> : <HeroPageMobile />}</div>

      {/* Horizontal scroll section */}
      <section
        ref={containerRef}
        style={{height: isLargeScreen? `${300 / HORIZ_SCROLL_SPEED_MULTIPLIER}vh` : "auto"}}
        className='relative'
      >
        <div className="sticky top-0 overflow-hidden lg:h-screen h-fit">
          <div 
            ref={contentRef}
            className={`relative snap-x bg-green-400 transition-transform ease-out scroll-smooth ${
              isLargeScreen ? "flex w-[300vw]" : "block w-full"
            }`}
          >
            <div id="about">
              <AboutPage addHingeAnimation={aboutPageHingeAnimationDone} />
            </div>

            <img
              className="pillar1 hidden lg:block z-50"
              src="/about/about_pillar.webp"
            ></img>

            <div id="tracks">
              {isLargeScreen? <TracksPage /> : <TracksPageMobile />}
            </div>

            <img
              className="pillar2 hidden lg:block"
              src="/about/about_pillar.webp"
            ></img>

            <div id="schedule">
              {isLargeScreen? <TimelinePage /> : <TimelinePageThin />}
            </div>
          </div>

          <img
            src="/about/about_floor.webp"
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

      {/* the rotating "scroll to explore" text and arrow thing. 
      fades to transparent once they scroll a full page height */}
      <div ref={scrollToExploreRef} className='scroll-arrow-container' onClick={() => scrollToSection("about")}>
        <img src="/hero/scroll_to_explore_text.png" className='circular-text' />
        <div className='arrow-icon-container'>
          <ArrowDown size="4vh" className='arrow-icon' />
        </div>
      </div>
    </div>
  );
}

export default App;
