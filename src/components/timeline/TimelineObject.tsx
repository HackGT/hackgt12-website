import React from 'react'
import './tlstyles.css';

export type TimelineObject_t = {
	name: string;
	desc: string;
	time: string;
	icon_path: string;
}

type ExtraProps = {
	onClick?: () => void;
	number: number;
	is_on_top?: boolean;
	style?: React.CSSProperties;
}

const TimelineObject = (props: TimelineObject_t & ExtraProps) => {
	return (
		<div 
		onClick={props.onClick}
		id={`tl-object-${props.number}`}
		className={`tl-object-wrapper ${props.is_on_top? 'is_top' : 'is_bottom'}`} 
		style={props.style}>
			<div className={`tl-object-content ${props.is_on_top? 'is_top' : 'is_bottom'}`}>
				
				<div className='flex gap-2 items-center'>
					<div className='tl-object-number font-poppins'>{props.number}</div>
					<div className='tl-object-label'>{props.name}</div>
				</div>

				<div className='flex gap-2 items-center'>
					{props.icon_path && <img className='tl-object-icon' src={props.icon_path} />}
					<div className='tl-object-time font-poppins'>{props.time}</div>
				</div>

			</div>
		</div>
	);
};

export default TimelineObject;