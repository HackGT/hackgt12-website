import React, { useCallback, useEffect, useState } from "react";
import "./tlstyles.css";
import EventCard from "./EventCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EVENTS from "./events.json";
import TimelineObject, { type TimelineObject_t } from "./TimelineObject";

export const isReady = true;

const PageContainer = ({ children }: { children?: React.ReactNode }) => (
  <div className="font-cormo w-screen snap-start h-screen tlpage-bg flex items-center justify-center">
    {children}
  </div>
);

/** "reverse merges" an array of events, placing consecutive items
 * in alternating return arrays: 1st ->arr1, 2nd ele -> arr2, 3rd ele -> arr1, ...
 *
 * example:
 * ["one", "two", "three", "four", "five", "six", "seven"]
 * gets turned into
 * ["one", "three", "five", "seven"], ["two", "four", "six"]
 *
 * (this is just for ordering the timeline stuff)
 */
function partitionInto2Arrays<T>(parentArray: T[]): [T[], T[]] {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < parentArray.length; i++) {
    if (i % 2 === 0) arr1.push(parentArray[i]);
    else arr2.push(parentArray[i]);
  }
  return [arr1, arr2];
}

const TimelinePage = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const [selectedEventIdx, setSelectedEventIdx] = useState<number>(0);

  const [timelineHalves, setTimelineHalves] = useState(
    partitionInto2Arrays<TimelineObject_t>(
      EVENTS[selectedDayIdx] as TimelineObject_t[]
    )
  );

  console.log(`timeline page: ${selectedDayIdx}, ${selectedEventIdx}`);

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

  // setup timeline halves
  useEffect(() => {
    const newHalves = partitionInto2Arrays<TimelineObject_t>(
      EVENTS[selectedDayIdx] as TimelineObject_t[]
    );
    setTimelineHalves(newHalves);
    setSelectedEventIdx(
      Math.min(EVENTS[selectedDayIdx].length - 1, selectedEventIdx)
    );
  }, [selectedDayIdx, selectedEventIdx]);

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
        <div className="flex flex-col items-center">
          <h1 className="font-cormo font-bold text-[48px] lg:text-[10vh] color-gold text-center">
            Schedule
          </h1>

          <div className="min-h-[300px] flex items-center justify-center">
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
      <div className="flex flex-col items-center" id="#schedule">
        <div className="flex gap-8 items-center justify-center">
          <button
          disabled={selectedEventIdx === 0 && selectedDayIdx === 0}
          className="eventcard-rounded-button floatleft-on-hover"
          onClick={() => updateIdx(selectedEventIdx - 1)}>
            <ArrowLeft size="2.5rem" />
          </button>
          <EventCard dayIdx={selectedDayIdx} eventIdx={selectedEventIdx} />
          <button
          disabled={selectedEventIdx === EVENTS[selectedDayIdx].length - 1 && selectedDayIdx === EVENTS.length - 1}
          className="eventcard-rounded-button floatright-on-hover"
          onClick={() => updateIdx(selectedEventIdx + 1)}>
            <ArrowRight size="2.5rem" />
          </button>
        </div>

        <div className="timeline-container">
          <div className="timeline-line">
            <div
              style={{
                transform: `translateX(${
                  EVENTS[selectedDayIdx].length % 2 === 0 ? "-3" : 0
                }rem)`,
              }}
              className="timeline-group top"
            >
              {timelineHalves[0].map((ele, index) => (
                <TimelineObject
                  onClick={() => updateIdx(2 * index)}
                  key={`toptl-${index}`}
                  name={ele.name}
                  time={ele.time}
                  desc={ele.desc}
                  icon_path={ele.icon_path}
                  number={2 * index + 1}
                  is_on_top
                />
              ))}
            </div>
            <div
              style={{
                transform: `translateX(${
                  EVENTS[selectedDayIdx].length % 2 === 0 ? "3" : 0
                }rem)`,
              }}
              className="timeline-group bottom"
            >
              {timelineHalves[1].map((ele, index) => (
                <TimelineObject
                  onClick={() => updateIdx(2 * index + 1)}
                  key={`bottomtl-${index}`}
                  name={ele.name}
                  time={ele.time}
                  desc={ele.desc}
                  icon_path={ele.icon_path}
                  number={2 * index + 2}
                  is_on_top={false}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="day-selector">
          {Array.from({ length: EVENTS.length }, (_, i) => i).map((n) => (
            <div
              key={n}
              className={`day-selector-option ${
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
      </div>
    </PageContainer>
  );
};

export default TimelinePage;
