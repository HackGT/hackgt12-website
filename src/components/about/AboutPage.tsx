export const AboutPage = () => {
  return (
    <div
      id="aboutSection"
      className="relative py-24 lg:py-8 px-16 w-screen flex items-center justify-items-center snap-start bg-gradient-to-b from-[#020F27] to-[#0D3582] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center z-10">
          <div className="order-1 block lg:hidden">
            <h1 className="font-cormo text-[48px] text-[#F1C57C]">About</h1>
          </div>
          <div className="order-3">
            <h1 className="font-cormo text-[25px] lg:text-[60px] text-white font-bold mb-8">
              What is HackGT?
            </h1>
            <p className="text-[20px] text-white font-poppins">
              Shape the future at the 🎪 Circus of Inventions from{" "}
              <span className="underline">Friday, September 26th</span> to{" "}
              <span className="underline">Sunday, September 28th</span>! 🎡 The
              11th edition of our flagship hackathon brings you a transformed
              carnival of creativity for all innovators, builders, and
              visionaries.
            </p>
            <p className="text-[20px] mt-8 text-white font-poppins">
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
            <img src="/about_pics.png" alt="about us!" />
          </div>
        </div>
      </div>

      {/* Decorative elements at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none">
        {/* (added to App.tsx so it works across all 3 rooms) <img
          src="/about_floor.png"
          alt="floor"
          className="absolute bottom-0 w-full object-cover"
        />*/}
        <img
          src="/about_plant.png"
          alt="plant"
          className="absolute bottom-10 left-16 w-[100px] hidden lg:block"
        />
        <img
          src="/about_bear.png"
          alt="bear"
          className="absolute bottom-10 right-1/3 w-[120px] hidden lg:block"
        />
      </div>
    </div>
  );
};
