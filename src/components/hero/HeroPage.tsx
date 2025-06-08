export const HeroPage = () => {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#0B2557] to-[#795DEC] overflow-hidden">
      <img
        src="/bg-column.svg"
        className="absolute top-0 left-[60%] h-full object-cover z-0"
        alt="Background column"
      />

      <div className="absolute bottom-0 w-full flex flex-col items-center translate-x-[-20%]">
        <div className="relative w-auto max-h-[calc(100vh-145px)]">
          <img
            src="/home-entrance.svg"
            className="max-h-[calc(100vh-160px)] w-auto"
            alt="Entrance Arch"
          />

          <img
            src="/home-stanchion.svg"
            className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[50%]"
            alt="Entrance Stanchion"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <img src="/title.svg" alt="HackGT 12" className="w-[86%] h-auto" />
          <div className="mb-[6%] w-full max-w-full px-4">
            <h2 className="font-poppins text-theme-gold text-[3.5vh] mb-[1.2em]">
              midnights at the museum
            </h2>
            <button className="bg-theme-gold font-cormo font-bold text-[#771500] rounded-3xl px-7 py-1 text-[4vh] cursor-pointer hover:brightness-110 transition">
              Register
            </button>
          </div>
        </div>
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



