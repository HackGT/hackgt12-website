import { FloorShownOnSmall } from "../FloorShownOnSmall";

export const AboutPage = () => {
  return (
    <div
      id="aboutSection"
      className="relative py-24 lg:py-8 px-16 w-screen flex items-center justify-items-center snap-start bg-gradient-to-b from-[#020F27] to-[#0D3582] overflow-hidden"
    >
      <div className="max-w-[85vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 items-center z-10">
            <div className="order-1 lg:hidden mb-4">
              <h1 className="font-cormo font-bold text-[48px] text-[#F1C57C]">
                About
              </h1>
            </div>
            <div className="order-3 mb-35 lg:mb-0">
              <h1 className="font-poppins text-[24px] text-white font-bold mb-4 mt-8 lg:hidden">
                What is HackGT?
              </h1>
            <h1 className="hidden lg:block font-cormo text-4xl lg:text-[8vh] text-white font-bold mb-6 leading-tight">
              About HackGT
            </h1>
            <p className="text-base lg:text-[2.4vh] text-white font-poppins">
              Shape the future at the 🎪 Circus of Inventions from{" "}
              <span className="underline">Friday, September 26th</span> to{" "}
              <span className="underline">Sunday, September 28th</span>! 🎡 The
              11th edition of our flagship hackathon brings you a transformed
              carnival of creativity for all innovators, builders, and
              visionaries.
            </p>
            <p className="text-base lg:text-[2.4vh] mt-5 text-white font-poppins">
              Each year, HackGT welcomes over 1500+ hackers 🤹 from around the
              world to tackle novel challenges, win exciting prizes, and make
              lasting connections 🎠! HackGT's stage will be open to everyone,
              regardless of background, experience, or skill level, to showcase
              their innovative ideas. 🎢 Hackers can expect a thrilling weekend
              filled with networking opportunities, top-tier prizes, engaging
              mini-events, and lots of swag! 🏆
            </p>
            </div>

          <div className="order-2 lg:order-last justify-self-center">
            <img src="/about_pics.svg" alt="about us!" className="w-auto max-h-[70vh] mt-2 lg:mt-0" />
          </div>
        </div>
      </div>

      {/* Decorative elements at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none">
        <img
          src="/about_plant.png"
          alt="plant"
          className="absolute bottom-[3vh] left-16 w-[100px] "
        />
        <img
          src="/about_bear.png"
          alt="bear"
          className="absolute bottom-[3.6vh] z-40 right-1/3 w-[120px]"
        />
        <FloorShownOnSmall />
      </div>
    </div>
  );
};
