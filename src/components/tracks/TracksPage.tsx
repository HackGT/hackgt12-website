export const TracksPage = () => {
  return (
    <div
      className="snap-start w-screen h-screen"
      id="room2"
    >
      <div className="relative w-full h-full bg-gradient-to-b from-[#281004] to-[#5b1e19] overflow-hidden">
        <div className="absolute inset-0 translate-y-[10vh]">
          {/* Hall of Illusions */}
          <img
            src="/tracks/hall_of_illusions.svg"
            alt="Hall of Illusions"
            className="absolute top-[10%] right-[69%] w-[32vh] max-w-[288px] min-w-[120px] translate-x-1/2 cursor-pointer"
          />

          {/* The Gadget Gallery */}
          <img
            src="/tracks/gadget_gallery.svg"
            alt="The Gadget Gallery"
            className="absolute top-[5%] left-[50%] w-[23vh] max-w-[192px] min-w-[100px] -translate-x-1/2 cursor-pointer"
          />

          {/* Emerging */}
          <img
            src="/tracks/emerging.svg"
            alt="Emerging"
            className="absolute top-[15%] left-[69%] w-[32vh] max-w-[281px] min-w-[120px] -translate-x-1/2 cursor-pointer"
          />

          {/* The Curator's Cause */}
          <img
            src="/tracks/curators_cause.svg"
            alt="The Curator’s Cause"
            className="absolute top-[38%] right-[61%] w-[35vh] max-w-[326px] min-w-[150px] translate-x-1/2 cursor-pointer"
          />

          {/* Crypt of Data */}
          <img
            src="/tracks/crypt_of_data.svg"
            alt="Crypt of Data"
            className="absolute top-[47%] right-[38%] w-[33vh] max-w-[306px] min-w-[140px] translate-x-1/2 cursor-pointer"
          />
        </div>

        <div className="absolute bottom-[11vh] w-full font-poppins text-center text-white opacity-60 text-sm md:text-base tracking-wide">
          Tap the frames to learn more about each track!
        </div>
      </div>
    </div>
  );
};
