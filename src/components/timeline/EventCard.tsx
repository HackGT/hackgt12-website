import './tlstyles.css';
import EVENTS from './events.json';

const EventCard = ({day, idx}: {day: number, idx: number}) => {

	const eventObj = EVENTS[day-1][idx]; // has 'name' and 'desc' fields (see ./events.json)

	return (
		<div className='eventcard'>
			<div className='eventcard-title'>
				{eventObj?.name ?? "No Events Here Yet!"}
				{eventObj?.icon_path && <img className='eventcard-icon' src={eventObj.icon_path} />}
			</div>
			<div className='eventcard-desc font-poppins' dangerouslySetInnerHTML={{__html: eventObj?.desc ?? "Check back later for updates!"}}>
			</div>
		</div>
	);
};

export default EventCard;