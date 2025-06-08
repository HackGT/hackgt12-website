export const AboutPage = () => {
  return (
    <div
      id="aboutSection"
      className="relative flex items-center justify-items-center py-8 px-16 w-screen snap-start h-screen bg-gradient-to-b from-[#0D3582] to-[#020F27] overflow-hidden"
    >
      <div className="grid grid-cols-2 gap-4 items-center z-10">
        <div>
          <h1 className="font-cormo text-[60px] text-white font-bold mb-4">
            What is HackGT?
          </h1>
          <p className="text-[20px] text-white font-poppins">
            Shape the future at the 🎪 Circus of Inventions from September 27th
            to September 29th! 🎡 The 11th edition of our flagship hackathon
            brings you a transformed carnival of creativity for all innovators,
            builders, and visionaries.
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

        <div className="justify-self-end">
          <img src="/about_pics.png" alt="about us!" />
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
          className="absolute bottom-0 left-16 w-[100px]"
        />
        <img
          src="/about_bear.png"
          alt="bear"
          className="absolute bottom-[200px] right-1/3 w-[120px]"
        />
      </div>
    </div>
  );
};
