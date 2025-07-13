import './style.css';

export const HeroPage = () => {
  const INTEREST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdOEgnIwjZbRALua5mK8_RbOdu9d6eWzkUrEYyMmTqQLpvb9g/viewform?usp=preview";
  
  const handleClick = () => {
    window.open(INTEREST_URL, "_blank");
  }

  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#0B2557] to-[#795DEC] overflow-hidden">

      <div className="absolute bottom-0 w-full flex flex-col items-center md:translate-x-[-16%] lg:translate-x-[-19%] xl:translate-x-[-20%]">
        <div className="relative w-auto max-h-[calc(100vh-130px)] md:max-h-[calc(100vh-145px)]">
          <img
            src="/hero/hero_entrance.svg"
            className="max-h-[calc(100vh-130px)] w-auto"
            alt="Entrance Arch"
          />

          <img
            src="/hero/hero_stanchion.svg"
            className="absolute bottom-[-4vh] left-1/2 translate-x-[-50%] w-full"
            alt="Entrance Stanchion"
          />

          {/* middle section w text and allat */}
          <div className="font-seasons absolute inset-0 flex flex-col items-center justify-center text-center">

            <div className="flex w-full items-center justify-center text-[5vh] mb-4">
              <img src="/logo.png" alt="HackGT 12" className="w-[0.9em]" />
              <h3 className="color-gold-light">&ensp;HackGT 12</h3>
            </div>

            <h2 className="text-gold text-[11vh] leading-[0.8]">MIDNIGHT</h2>
            <h2 className="text-gold-dark text-[5vh] text-nowrap">a&emsp;t&emsp;&#x2726;&emsp;t&emsp;h&emsp;e</h2>
            <h2 className="text-gold text-[11vh] leading-[0.8]">MUSEUM</h2>

            <h2 className="font-poppins text-gold text-[2.5vh] mt-2 mb-8">September 26-28, 2025</h2>
            <button onClick={handleClick} className="interest-form-btn">Interest Form</button>

          </div>

        </div>
      </div>

      <img
        src="/hero/bg-column.svg"
        className="absolute top-0 left-[60%] h-full object-cover z-0"
        alt="Background column"
      />
      <img
        src="/hero/bg-column.svg"
        className="absolute top-0 right-0 h-full object-cover z-0 translate-x-[50%]"
        alt="Background column"
      />
      <img
        src="/hero/bg-column.svg"
        className="absolute top-0 left-0 h-full object-cover z-0 translate-x-[-20%]"
        alt="Background column"
      />

      <img
        src="/hero/dino.svg"
        className="absolute right-0 bottom-0 md:w-[50vw] xl:w-[55vw] max-w-[800px] max-h-[calc(100vh-130px)] z-10"
        alt="Dino"
      />

      <img
        src="/security_camera.svg"
        className="absolute left-0 top-[25vh] h-[6vh]"
        alt=""
      />

      <img
        src="/hero/hero_plant.svg"
        className="absolute bottom-0 left-0 h-[36vh]"
        alt=""
      />
    </section>
  );
};
