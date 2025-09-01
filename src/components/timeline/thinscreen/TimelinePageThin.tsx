import React, { useCallback, useEffect, useState } from "react";
import "../tlstyles.css";
import "./tlstyles_thin.css";
import EventCard from "../EventCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EVENTS from "../events.json";
import ThinTimelineObject from "./ThinTimelineObject";
//import { isReady } from "../TimelinePage";

const PageContainer = ({ children }: { children?: React.ReactNode }) => (
  <div
    className={`relative font-cormo w-screen snap-start tlpage-bg flex flex-col items-center justify-center h-screennpm `}
  >
    {children}
  </div>
);

const TimelinePageThin = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const [selectedEventIdx, setSelectedEventIdx] = useState<number>(0);

   const updateIdx = useCallback((newIdx: number) => {
    const numEventsThisDay = EVENTS[selectedDayIdx].length;
    if (newIdx >= numEventsThisDay) {
      if (selectedDayIdx < EVENTS.length - 1) {
        // if we hit the end (rightside) of the day, try to move on to the next day
        setSelectedDayIdx(selectedDayIdx + 1);
        setSelectedEventIdx(0);
      } else {
        // we are on last day, just do nothing lol
        return;
      }
    } else if (newIdx < 0) {
      if (selectedDayIdx > 0) {
        // if we hit the end (leftside) of the day, try to move on to the previous day
        setSelectedDayIdx(selectedDayIdx - 1);
        setSelectedEventIdx(0);
      } else {
        return;
      }
    } else {
      // normal case
      setSelectedEventIdx(newIdx);
    }
  }, [selectedDayIdx]);

  // flash effect when switching selectedEventIdx
  useEffect(() => {
    const ele = document.getElementById(`tl-object-${selectedEventIdx + 1}`);
    ele?.classList.add("flash");
    const t = setTimeout(() => {
      ele?.classList.remove("flash");
    }, 1000); // important: check the flash animations in ./tlstyles.css, should match this timing

    return () => {
      // insta-end animation if they change to another event
      ele?.classList.remove("flash");
      clearTimeout(t);
    };
  }, [selectedEventIdx]);

  /*if (!isReady) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center my-16">
          <h1 className="font-cormo font-bold text-[48px] lg:text-[10vh] color-gold text-center">
            Schedule
          </h1>

          <div className="flex items-center justify-center mt-4">
            <p className="font-poppins text-[20px] lg:text-[30px] text-white">
              coming soon!!!
            </p>
          </div>
        </div>
      </PageContainer>
    );
  }*/

  return (
    <PageContainer>
      <div className="tl-page-thin-container">
        <h1 className="font-cormo font-bold text-5xl color-gold w-full text-center my-4">
          Schedule
        </h1>
        <div className="day-selector-thin">
          {Array.from({ length: EVENTS.length }, (_, i) => i).map((n) => (
            <div
              key={n}
              className={`day-selector-thin-option ${
                selectedDayIdx === n ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedDayIdx(n);
                setSelectedEventIdx(0);
              }}
            >
              Day {n+1}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center">
          <EventCard dayIdx={selectedDayIdx} eventIdx={selectedEventIdx} />
          <div className="flex gap-8 mt-4 items-center justify-center">
            <button
            disabled={selectedEventIdx === 0 && selectedDayIdx === 0}
            className="eventcard-rounded-button-small"
            onClick={() => updateIdx(selectedEventIdx - 1)}>
              <ArrowLeft size="1.75rem" />
            </button>
            <button
            disabled={selectedEventIdx === EVENTS[selectedDayIdx].length - 1 && selectedDayIdx === EVENTS.length - 1}
            className="eventcard-rounded-button-small"
            onClick={() => updateIdx(selectedEventIdx + 1)}>
              <ArrowRight size="1.75rem" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full grow overflow-y-auto">
          {EVENTS[selectedDayIdx].map((ele, index) => (
            <ThinTimelineObject
              onClick={() => setSelectedEventIdx(index)}
              number={index + 1}
              key={`thintlcard-${index}`}
              name={ele.name}
              time={ele.time}
              desc={ele.desc}
              icon_path={ele.icon_path}
            />
          ))}
        </div>
      </div>

      <div className="tl-page-thin-floor-container">
        <div className="flex justify-around items-end">
          {/* yes translateY by vw is intentional here, its cuz the img sizes depend on vw and not vh */}
          <img
            className="w-[40vw] translate-y-[1vw]"
            src="/timeline/timeline_bear.webp"
            alt="beardell!"
          />
          <img
            className="w-[20vw] translate-y-[3vw]"
            src="/timeline/timeline_plant.svg"
            alt="plant"
          />
        </div>
        <img
          className="tl-page-thin-floor"
          src="/about/about_floor.webp"
          alt="______"
        />
      </div>
    </PageContainer>
  );
};

export default TimelinePageThin;
