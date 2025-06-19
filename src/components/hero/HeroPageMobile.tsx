export const HeroPageMobile = () => {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#0B2557] to-[#795DEC] overflow-hidden">
      <img
        src="/bg-column-thin.svg"
        className="absolute top-0 left-0 h-[100vh] object-cover z-0"
        alt="bg column"
      />
      <img
        src="/bg-column-thin.svg"
        className="absolute top-0 right-0 h-[100vh] object-cover z-0 translate-x-[50%]"
        alt="bg column"
      />
      

      <div className="absolute w-full flex flex-col items-center text-center mt-[18vh]">
        <img src="/title.svg" alt="HackGT 12" className="w-[328px] h-auto" />
        <div className="mb-[6%] max-w-full px-4">
          <h2 className="font-poppins text-theme-gold text-2xl mb-1">
            midnight at the museum
          </h2>
          <h2 className="font-poppins text-theme-gold text-2xl mb-4">
            09/26 - 09/28
          </h2>
          <button className="bg-theme-gold font-cormo font-bold text-[#771500] rounded-3xl px-5 py-1 text-4xl cursor-pointer hover:brightness-110 transition">
            Register
          </button>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-0 w-full flex flex-col translate-x-[4%]">
        <div className="relative w-[45%]">
          <img
            src="/home_entrance.svg"
            className="h-auto w-full"
            alt="Entrance Arch"
          />
          <img
            src="/home_stanchion.svg"
            className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[46%]"
            alt="Entrance Stanchion"
          />
        </div>
      </div>

      <img
        src="/dino.svg"
        className="absolute right-0 bottom-0 z-10 max-h-[52vh]"
        alt="Dino"
      />
    </section>
  );
};
