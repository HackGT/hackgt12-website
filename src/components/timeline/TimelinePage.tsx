import React, {useCallback, useEffect, useState } from 'react'
import './tlstyles.css'
import EventCard from './EventCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import EVENTS from './events.json';
import TimelineObject, { type TimelineObject_t } from './TimelineObject';

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

const PageContainer = ({children}: {children?: React.ReactNode}) =>
	<div className='font-cormo w-screen snap-start h-screen tlpage-bg flex items-center justify-center'>
		{children}
	</div>

const TimelinePage = () => {
	const [selectedDay, setSelectedDay] = useState<1|2|3>(1);
	const [selectedEventIdx, setSelectedEventIdx] = useState<number>(0);

	const [timelineHalves, setTimelineHalves] = useState(partitionInto2Arrays<TimelineObject_t>(EVENTS[selectedDay-1] as TimelineObject_t[]));

	const updateIdx = useCallback((newIdx: number) => {
		const numEventsThisDay = EVENTS[selectedDay-1].length;
		if (newIdx < 0 || newIdx >= numEventsThisDay) return;
		else setSelectedEventIdx(newIdx);
	}, [selectedDay]);

	useEffect(() => {
		const newHalves = partitionInto2Arrays<TimelineObject_t>(EVENTS[selectedDay-1] as TimelineObject_t[]);
		setTimelineHalves(newHalves);
		setSelectedEventIdx(Math.min(EVENTS[selectedDay-1].length - 1, selectedEventIdx));
	}, [selectedDay, selectedEventIdx]);

	// flash effect when switching selectedEventIdx
	useEffect(() => {
		const ele = document.getElementById(`tl-object-${selectedEventIdx+1}`);
		ele?.classList.add('flash');
		const t = setTimeout(() => {
			ele?.classList.remove('flash');
		}, 1000); // important: check the flash animations in ./tlstyles.css, should match this timing 

		return () => {
			// insta-end animation if they change to another event
			ele?.classList.remove('flash');
			clearTimeout(t);
		}
	}, [selectedEventIdx]);

	return (
		<PageContainer>
			<div className='flex flex-col items-center'>
				<div className='flex gap-8 items-center'>
					<button className='eventcard-rounded-button floatleft-on-hover' onClick={() => updateIdx(selectedEventIdx-1)}>
						<ArrowLeft size="2.5rem" />
					</button>
					<EventCard day={selectedDay} idx={selectedEventIdx} />
					<button className='eventcard-rounded-button floatright-on-hover' onClick={() => updateIdx(selectedEventIdx+1)}>
						<ArrowRight size="2.5rem" />
					</button>
				</div>

				<div className='timeline-container'>
					<div className='timeline-line'>
						<div 
						style={{
							transform: `translateX(${(EVENTS[selectedDay-1].length % 2 === 0)? '-3' : 0}rem)`,
						}}
						className='timeline-group top'>
							{timelineHalves[0].map((ele, index) => (
								<TimelineObject
								onClick={() => updateIdx(2*index)}
								key={`toptl-${index}`}
								name={ele.name}
								time={ele.time}
								desc={ele.desc}
								icon_path={ele.icon_path}
								number={2*index+1}
								is_on_top />
							))}
						</div>
						<div 
						style={{
							transform: `translateX(${(EVENTS[selectedDay-1].length % 2 === 0)? '3' : 0}rem)`,
						}}
						className='timeline-group bottom'>
							{timelineHalves[1].map((ele, index) => (
								<TimelineObject
								onClick={() => updateIdx(2*index+1)}
								key={`bottomtl-${index}`}
								name={ele.name}
								time={ele.time}
								desc={ele.desc}
								icon_path={ele.icon_path}
								number={2*index+2}
								is_on_top={false} />
							))}
						</div>
					</div>
				</div>
				<div className='day-selector'>{[1, 2, 3].map((n) => 
					<div 
					key={n}
					className={`day-selector-option ${selectedDay === n? 'selected' : ''}`} 
					onClick={() => {setSelectedDay(n as 1|2|3); setSelectedEventIdx(0);}}>
						Day {n}
					</div>
				)}</div>
			</div>
		</PageContainer>
	);
};

export default TimelinePage;