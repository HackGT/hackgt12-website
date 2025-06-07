export const HeroPage = () => {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#0B2557] to-[#795DEC] overflow-hidden">
      <img
        src="/bg-column.svg"
        className="absolute top-0 left-[60%] h-full object-cover z-0"
        alt="Background column"
      />

      <div className="absolute top-0 h-full w-[48vw] min-w-[320px] z-10 flex items-end justify-center ml-[4vw]">
        <img
          src="/home-entrance.svg"
          className="absolute bottom-0 w-full h-auto max-h-[calc(100vh-160px)]"
          alt="Entrance Arch"
        />

        <div className="z-20 flex flex-col items-center justify-start w-full text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src="/home-logo.svg" alt="Logo" className="w-[40px] md:w-[60px]" />
              <h1 className="font-cormo font-bold text-4xl md:text-6xl text-theme-gold">
                HackGT 12
              </h1>
            </div>
            <h2 className="font-poppins text-theme-gold text-lg md:text-2xl mb-4">
              midnights at the museum
            </h2>
            <button className="bg-theme-gold font-cormo font-bold text-[#771500] cursor-pointer rounded-3xl px-7 py-1 text-lg md:text-2xl hover:brightness-110 transition">
              Register
            </button>
          </div>
          <img
            src="/home-stanchion.svg"
            className="w-[48%] z-10"
            alt="Stanchion"
          />
        </div>
      </div>

      <img
        src="/dino.svg"
        className="absolute right-0 bottom-0 w-[55vw] max-w-[800px] max-h-[calc(100vh-130px)] z-10"
        alt="Dino"
      />
    </section>
  );
};



