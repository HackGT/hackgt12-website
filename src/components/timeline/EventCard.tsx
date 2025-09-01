import './tlstyles.css';
import EVENTS from './events.json';

const EventCard = ({dayIdx, eventIdx}: {dayIdx: number, eventIdx: number}) => {

	const eventObj = EVENTS[dayIdx][eventIdx]; // has 'name' and 'desc' fields (see ./events.json)

	return (
		<div className='eventcard'>
			<div className='eventcard-title'>
				{eventObj?.name ?? "No Events Yet!"}
				{eventObj?.icon_path && <img className='eventcard-icon' src={eventObj.icon_path} />}
			</div>
			<div className='eventcard-desc font-poppins' dangerouslySetInnerHTML={{__html: eventObj?.desc ?? "There doesn't seem to be anything planned for today yet. Check back later for updates!"}}>
			</div>
		</div>
	);
};

export default EventCard;