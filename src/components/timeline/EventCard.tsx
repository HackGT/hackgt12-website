import './tlstyles.css';
import EVENTS from './events.json';

const EventCard = ({day, idx}: {day: number, idx: number}) => {

	const eventObj = EVENTS[day-1][idx]; // has 'name' and 'desc' fields (see ./events.json)

	return (
		<div className='eventcard'>
			<div className='eventcard-title'>
				{eventObj.name}
			</div>
			<div className='eventcard-desc font-poppins'>
				{eventObj.desc}
			</div>
		</div>
	);
};

export default EventCard;