import { twMerge } from "tailwind-merge";

export const NavBar = () => {
  return (
    <nav className="z-100 fixed w-full top-0">
      <div className="relative w-full">
        <SpotlightImage className="left-70" type="right" />
        <SpotlightImage className="left-170" type="right" />
        <SpotlightImage className="right-60" type="left" />
      </div>
      <div className="max-w-7xl z-100 mx-auto mt-12 flex justify-center gap-24 items-center">
        <NavLink title="Home" href="#" />
        <NavLink title="About" href="#aboutSection" />
        <NavLink title="Tracks" href="#tracksSection" />
        <NavLink title="Schedule" href="#scheduleSection" />
        <NavLink title="FAQ" href="#faqsSection" />
        <NavLink title="Sponsors" href="#sponsorsSection" />
      </div>
    </nav>
  );
};

const NavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <a
      href={href}
      className="font-cormo text-[40px] text-theme-gold hover:text-[#f2a11b]"
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
