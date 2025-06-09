import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const TracksPage = () => {
  return (
    <div
      className="snap-start w-screen h-screen"
      id="room2"
    >
      <div className="relative w-full h-full bg-gradient-to-b from-[#281004] to-[#5b1e19] overflow-hidden">
        <div className="absolute inset-0 translate-y-[10vh]">
          {/* Hall of Illusions */}
          <Dialog>
            <DialogTrigger asChild>
              <img
                src="/tracks/hall_of_illusions.svg"
                alt="Hall of Illusions"
                className="absolute top-[10%] right-[69%] w-[32vh] max-w-[288px] min-w-[120px] translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-2"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-cormo font-semibold text-[4vh]">Hall of Illusions</DialogTitle>
                <DialogDescription className="font-cormo text-[3vh] text-black">
                  Step into a world of immersive tech, interactive media, and creative storytelling that blurs the line between reality and imagination.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* The Gadget Gallery */}
          <Dialog>
            <DialogTrigger asChild>
              <img
                src="/tracks/gadget_gallery.svg"
                alt="The Gadget Gallery"
                className="absolute top-[5%] left-[50%] w-[23vh] max-w-[192px] min-w-[100px] -translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:-rotate-1"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-cormo font-semibold text-[4vh]">The Gadget Gallery</DialogTitle>
                <DialogDescription className="font-cormo text-[3vh] text-black">
                  Show off your hardware hacks, from robots to smart devices and everything in between.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Emerging */}
          <Dialog>
            <DialogTrigger asChild>
              <img
                src="/tracks/emerging.svg"
                alt="Emerging"
                className="absolute top-[15%] left-[69%] w-[32vh] max-w-[281px] min-w-[120px] -translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-1"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-cormo font-semibold text-[4vh]">Emerging</DialogTitle>
                <DialogDescription className="font-cormo text-[3vh] text-black">
                  New to hackathons? This track is your launchpad—no experience needed,  just curiosity, creativity, and a willingness to build something awesome.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* The Curator's Cause */}
          <Dialog>
            <DialogTrigger asChild>
              <img
                src="/tracks/curators_cause.svg"
                alt="The Curator’s Cause"
                className="absolute top-[38%] right-[61%] w-[35vh] max-w-[326px] min-w-[150px] translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-1"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-cormo font-semibold text-[4vh]">The Curator's Cause</DialogTitle>
                <DialogDescription className="font-cormo text-[3vh] text-black">
                  Build solutions that make a difference, whether it’s improving lives, communities, or the environment through tech.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Crypt of Data */}
          <Dialog>
            <DialogTrigger asChild>
              <img
                src="/tracks/crypt_of_data.svg"
                alt="Crypt of Data"
                className="absolute top-[47%] right-[38%] w-[33vh] max-w-[306px] min-w-[140px] translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:-rotate-2"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-cormo font-semibold text-[4vh]">Crypt of Data</DialogTitle>
                <DialogDescription className="font-cormo text-[3vh] text-black">
                  Dig into the depths of data through visualization, analytics, fintech, Web3 innovation, or wherever the numbers lead you.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="absolute bottom-[11vh] w-full font-poppins text-center text-white opacity-60 text-sm md:text-base tracking-wide">
          Tap the frames to learn more about each track!
        </div>
      </div>
    </div>
  );
};
