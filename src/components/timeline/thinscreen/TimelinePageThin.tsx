import React, {useCallback, useEffect, useState } from 'react'
import '../tlstyles.css'
import './tlstyles_thin.css'
import EventCard from '../EventCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import EVENTS from '../events.json';
import ThinTimelineObject from './ThinTimelineObject';

const PageContainer = ({children}: {children?: React.ReactNode}) =>
	<div className={`font-cormo w-screen snap-start tlpage-bg flex flex-col items-center justify-center h-fit`}>
		{children}
	</div>

const TimelinePageThin = () => {
	const [selectedDay, setSelectedDay] = useState<1|2|3>(1);
	const [selectedEventIdx, setSelectedEventIdx] = useState<number>(0);

	const updateIdx = useCallback((newIdx: number) => {
		const numEventsThisDay = EVENTS[selectedDay-1].length;
		if (newIdx < 0 || newIdx >= numEventsThisDay) return;
		else setSelectedEventIdx(newIdx);
	}, [selectedDay]);

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
			<div className='tl-page-thin-container'>
				<h1 className='font-cormo font-bold text-5xl color-gold w-full text-left'>Schedule</h1>

				<div className='day-selector-thin'>
					{[1, 2, 3].map((n) => 
						<div 
						key={n}
						className={`day-selector-thin-option ${selectedDay === n? 'selected' : ''}`} 
						onClick={() => {setSelectedDay(n as 1|2|3); setSelectedEventIdx(0);}}>
							Day {n}
						</div>
					)}
				</div>

				<div className='w-full'>
					<EventCard day={selectedDay} idx={selectedEventIdx} />
					<div className='flex gap-8 mt-4 justify-center'>
						<button className='eventcard-rounded-button-small' onClick={() => updateIdx(selectedEventIdx-1)}>
							<ArrowLeft size="1.75rem" />
						</button>
						<button className='eventcard-rounded-button-small' onClick={() => updateIdx(selectedEventIdx+1)}>
							<ArrowRight size="1.75rem" />
						</button>
					</div>
				</div>

				<div className='flex flex-col gap-6 w-full grow overflow-y-auto'>
					{
						EVENTS[selectedDay-1].map((ele, index) => (
							<ThinTimelineObject
							onClick={() => setSelectedEventIdx(index)}
							number={index+1}
							key={`thintlcard-${index}`}
							name={ele.name}
							time={ele.time}
							desc={ele.desc}
							icon_path={ele.icon_path} />
						))
					}
				</div>
			</div>

			<div className='tl-page-thin-floor-container'>
				<div className='flex justify-around items-end'>

					{/* yes translateY by vw is intentional here, its cuz the img sizes depend on vw and not vh */}
					<img className='w-[40vw] translate-y-[1vw]' src='/timeline_bear.png' alt='beardell!' />
					<img className='w-[20vw] translate-y-[3vw]' src='/timeline_plant.svg' alt='plant' />
				</div>
				<img className='tl-page-thin-floor' src='/about_floor.png' alt='______' />
			</div>

		</PageContainer>
	);
};

export default TimelinePageThin;