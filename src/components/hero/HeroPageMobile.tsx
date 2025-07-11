import './style_mobile.css';

export const HeroPageMobile = () => {
  const INTEREST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdOEgnIwjZbRALua5mK8_RbOdu9d6eWzkUrEYyMmTqQLpvb9g/viewform?usp=preview";
  
  const handleClick = () => {
    window.open(INTEREST_URL, "_blank");
  }

  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#0B2557] to-[#795DEC] overflow-hidden">
      <img
        src="/hero/bg-column-thin.svg"
        className="absolute top-0 left-0 h-[100vh] object-cover z-0"
        alt="bg column"
      />
      <img
        src="/hero/bg-column-thin.svg"
        className="absolute top-0 right-0 h-[100vh] object-cover z-0 translate-x-[50%]"
        alt="bg column"
      />
      
      <div className="absolute w-full flex flex-col items-center text-center mt-[20vh]">
        <div className="flex w-full items-center justify-center text-[8vw] mb-4">
          <img src="/logo.png" alt="HackGT 12" className="w-[0.9em]" />
          <h3 className="hackgt12-text">&ensp;HackGT 12</h3>
        </div>

        <div className="w-full z-5">
          <div>
            <h2 className="title-text">
              MIDNIGHT
            </h2>
            <h2 className="atthe-text">
              a&emsp;t&emsp;&#x2726;&emsp;t&emsp;h&emsp;e
            </h2>
            <h2 className="title-text">
              MUSEUM
            </h2>
          </div>

          <h2 className="font-poppins color-gold text-[4vw] mt-2 mb-8">
            September 26-28, 2025
          </h2>
          <button onClick={handleClick} className="bg-gold font-poppins font-medium text-[#771500] rounded-3xl px-7 py-1 text-[5vw] cursor-pointer hover:brightness-110 transition">
            Interest Form
          </button>
        </div>
      </div>

      <div className="sm:block absolute bottom-0 w-full flex flex-col translate-x-[4%]">
        <div className="relative w-[45%]">
          <img
            src="/hero/hero_entrance.svg"
            className="h-auto w-full"
            alt="Entrance Arch"
          />
          <img
            src="/hero/hero_stanchion.svg"
            className="absolute bottom-0 left-1/2 translate-x-[-50%] w-full"
            alt="Entrance Stanchion"
          />
        </div>
      </div>

      <img
        src="/hero/dino.svg"
        className="absolute right-0 bottom-0 z-10 max-h-[48vh]"
        alt="Dino"
      />
    </section>
  );
};
