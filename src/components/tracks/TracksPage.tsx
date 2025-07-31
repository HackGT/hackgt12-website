import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

export const TracksPage = () => {
  const [isHallOpen, setIsHallOpen] = useState(false);
  const [isGadgetOpen, setIsGadgetOpen] = useState(false);
  const [isEmergingOpen, setIsEmergingOpen] = useState(false);
  const [isCuratorOpen, setIsCuratorOpen] = useState(false);
  const [isCryptOpen, setIsCryptOpen] = useState(false);

  return (
    <div className="snap-start w-screen h-screen" id="room2">
      <div className="relative w-full h-full bg-gradient-to-b from-[#281004] to-[#5b1e19] overflow-hidden">

        <div className="absolute inset-0 translate-y-[10vh]">
          {/* Hall of Illusions */}
          <Dialog open={isHallOpen} onOpenChange={setIsHallOpen}>
            {!isHallOpen && (
              <DialogTrigger asChild>
                <img
                  src="/tracks/hall_of_illusions.svg"
                  alt="Hall of Illusions"
                  className="absolute top-[10%] lg:right-[73%] xl:right-[69%] w-[32vh] max-w-[288px] min-w-[120px] translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-2"
                />
              </DialogTrigger>
            )}
            <DialogContent imageSrc="/tracks/dialog/hall_of_illusions.png" paddingX={18}>
              <DialogHeader>
                <DialogTitle>
                  HALL OF ILLUSIONS
                </DialogTitle>
                <DialogDescription>
                  Step into a world of immersive tech, interactive media, and
                  creative storytelling that blurs the line between reality and
                  imagination.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* The Gadget Gallery */}
          <Dialog open={isGadgetOpen} onOpenChange={setIsGadgetOpen}>
            {!isGadgetOpen && (
              <DialogTrigger asChild>
                <img
                  src="/tracks/gadget_gallery.svg"
                  alt="The Gadget Gallery"
                  className="absolute top-[5%] left-[50%] w-[23vh] max-w-[192px] min-w-[100px] -translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:-rotate-1"
                />
              </DialogTrigger>
            )}
            <DialogContent imageSrc="/tracks/dialog/gadget_gallery.png" isVertical={true} paddingX={22}>
              <DialogHeader>
                <DialogTitle>
                  THE GADGET GALLERY
                </DialogTitle>
                <DialogDescription>
                  Show off your hardware hacks, from robots to smart devices and
                  everything in between.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Emerging */}
          <Dialog open={isEmergingOpen} onOpenChange={setIsEmergingOpen}>
            {!isEmergingOpen && (
              <DialogTrigger asChild>
                <img
                  src="/tracks/emerging.svg"
                  alt="Emerging"
                  className="absolute top-[15%] lg:left-[73%] xl:left-[69%] w-[32vh] max-w-[281px] min-w-[120px] -translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-1"
                />
              </DialogTrigger>
            )}
            <DialogContent imageSrc="/tracks/dialog/emerging.png" paddingX={18}>
              <DialogHeader>
                <DialogTitle>
                  EMERGING
                </DialogTitle>
                <DialogDescription>
                  New to hackathons? This track is your launchpad—no experience
                  needed, just curiosity, creativity, and a willingness to build
                  something awesome.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* The Curator's Cause */}
          <Dialog open={isCuratorOpen} onOpenChange={setIsCuratorOpen}>
            {!isCuratorOpen && (
              <DialogTrigger asChild>
                <img
                  src="/tracks/curators_cause.svg"
                  alt="The Curator’s Cause"
                  className="absolute top-[38%] lg:right-[64%] xl:right-[61%] w-[35vh] max-w-[326px] min-w-[150px] translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:rotate-1"
                />
              </DialogTrigger>
            )}
            <DialogContent imageSrc="/tracks/dialog/curators_cause.png" paddingX={24}>
              <DialogHeader>
                <DialogTitle>
                  THE CURATOR&#8217;S CAUSE
                </DialogTitle>
                <DialogDescription>
                  Build solutions that make a difference, whether it’s improving
                  lives, communities, or the environment, through tech.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Crypt of Data */}
          <Dialog open={isCryptOpen} onOpenChange={setIsCryptOpen}>
            {!isCryptOpen && (
              <DialogTrigger asChild>
                <img
                  src="/tracks/crypt_of_data.svg"
                  alt="Crypt of Data"
                  className="absolute top-[47%] lg:right-[35%] xl:right-[38%] w-[33vh] max-w-[306px] min-w-[140px] translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-108 hover:-rotate-2"
                />
              </DialogTrigger>
            )}
            <DialogContent imageSrc="/tracks/dialog/crypt_of_data.png" paddingX={19}>
              <DialogHeader>
                <DialogTitle>
                  CRYPT OF DATA
                </DialogTitle>
                <DialogDescription>
                  Dig into the depths of data through visualization, analytics,
                  fintech, Web3 innovation, or wherever the numbers lead you.
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
