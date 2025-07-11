import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FloorShownOnSmall } from "../FloorShownOnSmall";

export const TracksPageMobile = () => {
  return (
    <div className="snap-start w-screen h-screen" id="room2">
      <div className="relative w-full h-full bg-gradient-to-b from-[#281004] to-[#5b1e19] overflow-hidden">
        <h1 className="mt-[10vh] mb-4 font-cormo font-bold text-5xl text-gold absolute left-1/2 -translate-x-1/2">
          Tracks
        </h1>
        
        <div className="grid grid-cols-2 gap-y-[5vh] pl-4 my-[22vh] relative z-10">
          {/* Crypt of Data – Left */}
          <div className="flex justify-end mr-[2vw]">
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src="/tracks/crypt_of_data.svg"
                  alt="Crypt of Data"
                  className="w-[152px] cursor-pointer transition-transform duration-300 hover:scale-108 hover:-rotate-2"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-cormo font-semibold text-[3vh]">Crypt of Data</DialogTitle>
                  <DialogDescription className="font-cormo text-[2.5vh] text-black">
                    Dig into the depths of data through visualization, analytics, fintech, Web3 innovation, or wherever the numbers lead you.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Gadget Gallery – Right (overlapping upward) */}
          <div className="flex justify-start -mb-[9vh] ml-[4vw]">
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src="/tracks/gadget_gallery.svg"
                  alt="Gadget Gallery"
                  className="w-[106px] cursor-pointer transition-transform duration-300 hover:scale-108 hover:-rotate-1"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-cormo font-semibold text-[3vh]">The Gadget Gallery</DialogTitle>
                  <DialogDescription className="font-cormo text-[2.5vh] text-black">
                    Show off your hardware hacks, from robots to smart devices and everything in between.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Hall of Illusions – Left */}
          <div className="flex justify-end mr-[3vw]">
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src="/tracks/hall_of_illusions.svg"
                  alt="Hall of Illusions"
                  className="w-[142px] cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-2"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-cormo font-semibold text-[3vh]">Hall of Illusions</DialogTitle>
                  <DialogDescription className="font-cormo text-[2.5vh] text-black">
                    Step into a world of immersive tech, interactive media, and creative storytelling that blurs the line between reality and imagination.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Curator’s Cause – Right (overlapping upward) */}
          <div className="flex justify-start -mb-[17vh] ml-[2vw]">
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src="/tracks/curators_cause.svg"
                  alt="Curator’s Cause"
                  className="w-[151px] cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-1"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-cormo font-semibold text-[3vh]">The Curator's Cause</DialogTitle>
                  <DialogDescription className="font-cormo text-[2.5vh] text-black">
                    Build solutions that make a difference, whether it’s improving lives, communities, or the environment through tech.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Emerging – Left */}
          <div className="flex justify-end mr-[3vw]">
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src="/tracks/emerging.svg"
                  alt="Emerging"
                  className="w-[137px] cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-1"
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-cormo font-semibold text-[3vh]">Emerging</DialogTitle>
                  <DialogDescription className="font-cormo text-[2.5vh] text-black">
                    New to hackathons? This track is your launchpad—no experience needed, just curiosity, creativity, and a willingness to build something awesome.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="absolute bottom-[12vh] w-full font-poppins text-center text-white opacity-60 text-sm md:text-base tracking-wide">
          Tap the frames to learn more about each track!
        </div>

        <FloorShownOnSmall />
        <img
          src="/security_camera.svg"
          alt=""
          className="transform-[scaleX(-1)] right-0 absolute top-22 w-[60px] h-auto"
        />
      </div>
    </div>
  );
};
