import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const NavBar = ({
  onNavigate,
}: {
  onNavigate: (sectionId: string) => void;
}) => {
  return (
    <nav className="z-100 fixed w-full top-0">
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          position: "fixed",
          top: 0,
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        className="w-18 left-[30px] lg:right-[30px]"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>

      <div className="hidden lg:block relative max-w-7xl mx-auto">
        <SpotlightImage className="left-[22%]" type="right" />
        <SpotlightImage className="left-[50%]" type="right" />
        <SpotlightImage className="right-[22%]" type="left" />
      </div>

      <div className="hidden lg:flex max-w-7xl z-100 mx-auto mt-12 justify-center gap-20 items-center">
        <NavLink title="Home" sectionId="home" onNavigate={onNavigate} />
        <NavLink title="About" sectionId="about" onNavigate={onNavigate} />
        <NavLink title="Tracks" sectionId="tracks" onNavigate={onNavigate} />
        <NavLink title="Schedule" sectionId="schedule" onNavigate={onNavigate} />
        <NavLink title="FAQ" sectionId="faqs" onNavigate={onNavigate} />
        <NavLink title="Sponsors" sectionId="sponsors" onNavigate={onNavigate} />
      </div>

      <MobileNavMenu className="flex lg:hidden" onNavigate={onNavigate} />
    </nav>
  );
};
const MobileNavMenu = ({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate: (sectionId: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={twMerge(
        "max-w-7xl mx-auto flex-col justify-between items-center px-4 py-2 transition-all",
        isOpen ? "backdrop-blur-md bg-[#0004]" : "", // Apply background and blur here when not at top
        className
      )}
    >
      <div className="flex items-center w-full justify-end">
        <button
          className="relative hover:cursor-pointer w-10 h-10 flex flex-col justify-center items-center focus:outline-none" // Add relative positioning and flex for bars
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {/* Top bar */}
          <span
            className={twMerge(
              "block w-8 h-1 bg-gold rounded-full transition-all duration-300 ease-in-out",
              isOpen ? "rotate-45 translate-y-2.5" : ""
            )}
          ></span>
          {/* Middle bar */}
          <span
            className={twMerge(
              "block w-8 h-1 bg-gold rounded-full transition-all duration-300 ease-in-out my-1.5", // Added margin for spacing
              isOpen ? "opacity-0" : "" // Fade out
            )}
          ></span>
          {/* Bottom bar */}
          <span
            className={twMerge(
              "block w-8 h-1 bg-gold rounded-full transition-all duration-300 ease-in-out",
              isOpen ? "-rotate-45 -translate-y-2.5" : "" // Rotate and move up
            )}
          ></span>
        </button>
      </div>

      {/* Navigation Links - conditionally rendered based on isOpen */}
      {isOpen && (
        <div
          className={twMerge(
            "top-full left-0 w-full z-40 transition-opacity ease-in-out",
            isOpen ? "opacity-100 h-fit" : "opacity-0 h-0"
          )}
        >
          <div className="flex flex-col items-center gap-6">
            <NavLink title="Home" sectionId="home" onNavigate={onNavigate} />
            <NavLink title="About" sectionId="about" onNavigate={onNavigate} />
            <NavLink title="Tracks" sectionId="tracks" onNavigate={onNavigate} />
            <NavLink title="Schedule" sectionId="schedule" onNavigate={onNavigate} />
            <NavLink title="FAQ" sectionId="faqs" onNavigate={onNavigate} />
            <NavLink title="Sponsors" sectionId="sponsors" onNavigate={onNavigate} />
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({
  title,
  sectionId,
  onNavigate,
}: {
  title: string;
  sectionId: string;
  onNavigate: (sectionId: string) => void;
}) => {
  return (
    <button
      onClick={() => onNavigate(sectionId)}
      className="font-cormo w-full lg:w-fit text-center text-[1.5rem] lg:text-[3.2vh] font-semibold text-gold hover:brightness-150 transition hover:cursor-pointer "
    >
      {title}
    </button>
  );
};

const SpotlightImage = (props: {className: string, type: "right" | "left"}) => (
  <img
    src={`/spotlights/spotlight_to_${props.type}.png`}
    className={twMerge("absolute w-50 pointer-events-none", props.className)}
  />
);
