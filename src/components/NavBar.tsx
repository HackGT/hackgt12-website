import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const NavBar = () => {
  return (
    <nav className="z-100 fixed w-full top-0">
      <div className="hidden lg:block relative w-full">
        <SpotlightImage className="left-70" type="right" />
        <SpotlightImage className="left-170" type="right" />
        <SpotlightImage className="right-60" type="left" />
      </div>

      <div className="hidden lg:flex max-w-7xl z-100 mx-auto mt-12 flex justify-center gap-16 items-center">
        <NavLink title="Home" href="#" />
        <NavLink title="About" href="#aboutSection" />
        <NavLink title="Tracks" href="#tracksSection" />
        <NavLink title="Schedule" href="#scheduleSection" />
        <NavLink title="FAQ" href="#faqsSection" />
        <NavLink title="Sponsors" href="#sponsorsSection" />
      </div>

      <MobileNavMenu className="flex lg:hidden" />
    </nav>
  );
};
const MobileNavMenu = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Handle scroll to change isAtTop state
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  };

  useEffect(() => {
    // Set initial state based on current scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={twMerge(
        "max-w-7xl mx-auto flex-col justify-between items-center px-4 py-2 transition-all",
        isAtTop ? "" : "backdrop-blur-md", // Apply background and blur here when not at top
        className
      )}
    >
      <div className="flex items-center w-full justify-between">
        <div className="text-theme-gold text-3xl font-bold">HackGT 12 Logo</div>

        <button
          className="relative hover:cursor-pointer w-10 h-10 flex flex-col justify-center items-center focus:outline-none" // Add relative positioning and flex for bars
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {/* Top bar */}
          <span
            className={twMerge(
              "block w-8 h-1 bg-theme-gold rounded-full transition-all duration-300 ease-in-out",
              isOpen ? "rotate-45 translate-y-2.5" : ""
            )}
          ></span>
          {/* Middle bar */}
          <span
            className={twMerge(
              "block w-8 h-1 bg-theme-gold rounded-full transition-all duration-300 ease-in-out my-1.5", // Added margin for spacing
              isOpen ? "opacity-0" : "" // Fade out
            )}
          ></span>
          {/* Bottom bar */}
          <span
            className={twMerge(
              "block w-8 h-1 bg-theme-gold rounded-full transition-all duration-300 ease-in-out",
              isOpen ? "-rotate-45 -translate-y-2.5" : "" // Rotate and move up
            )}
          ></span>
        </button>
      </div>

      {/* Navigation Links - conditionally rendered based on isOpen */}
      <div
        className={twMerge(
          "top-full left-0 w-full z-40 transition-opacity ease-in-out",
          isOpen ? "opacity-100 h-fit" : "opacity-0 h-0"
        )}
      >
        <div className="flex flex-col items-center gap-6">
          <NavLink title="Home" href="#" />
          <NavLink title="About" href="#aboutSection" />
          <NavLink title="Tracks" href="#tracksSection" />
          <NavLink title="Schedule" href="#scheduleSection" />
          <NavLink title="FAQ" href="#faqsSection" />
          <NavLink title="Sponsors" href="#sponsorsSection" />
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <a
      href={href}
      className="font-cormo w-full text-center text-[24px] lg:text-[40px] text-theme-gold hover:text-[#f2a11b]"
    >
      {title}
    </a>
  );
};

const SpotlightImage = ({
  className,
  type,
}: {
  className: string;
  type: string;
}) => {
  let src = "/spotlight_to_right.png";
  if (type === "left") {
    src = "/spotlight_to_left.png";
  }
  return (
    <img
      src={src}
      className={twMerge("absolute w-50 pointer-events-none", className)}
    />
  );
};
