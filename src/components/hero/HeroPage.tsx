export const HeroPage = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-[#0B2557] to-[#795DEC]">
      <h2 className="font-poppins text-theme-gold font-normal text-[40px]">midnights at the museum</h2>
      <img src="/bg-column.svg" className="absolute top-0 h-full left-[60%]" />
      <img src="/bg-column.svg" className="absolute top-0 h-full -right-20" />
      <img src="/home-entrance.svg" className="absolute bottom-0 w-[40vw] left-[5vw]" />
      {/* <div className="flex flex-row">
        <img src="/home-logo.svg" />
        <h1>HackGT 12</h1>
      </div> */}
      <img src="/home-stanchion.svg" className="absolute bottom-0" />
      <img src="/dino-platform.svg" className="absolute bottom-0 right-0" />
      <img src="/dino.svg" className="absolute right-0 bottom-4" />
    </section>
  );
};
