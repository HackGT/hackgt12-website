import { FloorShownOnSmall } from "../FloorShownOnSmall";
import './style.css';

export const AboutPage = (props: {addHingeAnimation: boolean}) => {
  return (
    <section className="w-full h-full relative py-24 lg:py-8 px-16 flex items-center justify-items-center snap-start bg-gradient-to-b from-[#020F27] to-[#0D3582] overflow-hidden">
      
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 items-center z-10">
        
        <div className="order-1 lg:hidden mb-4">
          <h1 className="font-cormo font-bold text-5xl text-gold text-center mb-2">
            About
          </h1>
        </div>

        <div className="order-3 mb-35 lg:mb-0">
          <h1 className="font-cormo text-[24px] text-white font-bold mb-4 mt-8 lg:hidden">
            What is HackGT?
          </h1>
          <h1 className="hidden lg:block font-cormo text-4xl lg:text-[8vh] text-white font-bold mb-6 leading-tight">
            About HackGT
          </h1>
          <p className="text-base md:text-[15px] xl:text-[20px] text-white font-poppins">
            HackGT, HexLabs' annual 36-hour hackathon, is returning to Georgia
            Tech — and this time, it's after hours. From{" "}
            <span className="underline">Friday, September 26th</span> to{" "}
            <span className="underline">Sunday, September 28th</span>, we're
            turning the Klaus Advanced Computing Building into a place where
            creativity, curiosity, and code come alive.
          </p>
          <p className="text-base md:text-[15px] xl:text-[20px] mt-5 text-white font-poppins">
            Each year, HackGT welcomes over 1500+ hackers from around the
            world to tackle novel challenges, win exciting prizes, and make
            lasting connections! HackGT's halls will be open to everyone,
            regardless of background, experience, or skill level, to showcase
            their innovative ideas. Hackers can expect a thrilling weekend
            filled with networking opportunities, top-tier prizes, engaging
            mini-events, and lots of swag!
          </p>
        </div>

        {/* images */}
        <div className="sm:w-3/4 md:w-3/5 lg:w-full xl:w-5/6 my-auto order-2 lg:order-last flex flex-col justify-center justify-self-center">
          <div className="w-full h-1/2 flex justify-center items-end">
            <img
              src="/about/about_pic_1.svg"
              alt="about us!"
              className={`w-1/2 mt-2 lg:mt-0 opacity-0 transition-opacity duration-200 ${props.addHingeAnimation ? "fall-down-hinge-topleft" : ""}`}
            />
            <img
              src="/about/about_pic_2.png"
              alt="about us!"
              className={`w-1/2 mt-2 lg:mt-0 opacity-0 transition-opacity duration-200 ${props.addHingeAnimation ? "fall-down-hinge-topright" : ""}`}
            />
          </div>
          <div className="w-full h-1/2 flex justify-center items-center">
            <img
              src="/about/about_pic_3.svg"
              alt="about us!"
              className={`w-5/6 mt-2 lg:mt-0 opacity-0 transition-opacity duration-200 ${props.addHingeAnimation ? "fall-down-hinge-topleft" : ""}`}
            />
          </div>
        </div>

      </div>

      {/* Decorative elements at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none">
        <img
          src="/about/about_plant.svg"
          alt="plant"
          className="absolute bottom-[3vh] left-16 w-[140px] "
        />
        <img
          src="/about/about_bear.webp"
          alt="bear"
          className="hidden lg:block absolute bottom-[3.6vh] z-40 right-3/10 lg:w-[220px]"
        />
        <img
          src="/about/about_bear_mobile.webp"
          alt="bear"
          className="lg:hidden absolute bottom-[3.6vh] z-40 right-3/10 w-[150px]"
        />
        <FloorShownOnSmall />
      </div>
    </section>
  );
};
