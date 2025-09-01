import React from 'react'
import './tlstyles_thin.css';

import { type TimelineObject_t } from '../TimelineObject';

type ThinTimelineObjectExtraProps = {
	onClick: () => void;
	number: number;
	style?: React.CSSProperties;
}

// ez
const ThinTimelineObject = (props: TimelineObject_t & ThinTimelineObjectExtraProps) => {
	return (
		<div className='thin-tl-object' onClick={props.onClick} style={props.style}>
			<div className='thin-tl-object-number font-poppins'>{props.number}</div>
			<h3 className='thin-tl-object-title'>{props.time} - {props.name}</h3>
			{/* (no space bruh) props.icon_path && <img className='tl-object-icon' src={props.icon_path} />*/}
		</div>
	);
};

export default ThinTimelineObject;