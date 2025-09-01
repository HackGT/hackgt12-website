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
			<div className='tl-object-number font-poppins'>{props.number}</div>
			<div className='tl-object-label'>{props.name}: {props.time}</div>
			{props.icon_path && <img className='tl-object-icon' src={props.icon_path} />}
		</div>
	);
};

export default TimelineObject;