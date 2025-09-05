import './SponsorsSection.css';
import sponsors from './sponsors.json';

export const SponsorsSection = () => {
  return (
    <div id="sponsors" className="pt-[10vh]">
      <h1 className="font-cormo font-bold text-[48px] lg:text-[10vh] color-gold text-center">
        Sponsors
      </h1>

      <div className="sponsors-flex-container">
        {sponsors.map((sponsor, index) => (
          <a 
          href={sponsor.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`sponsor-logo-${sponsor.size}`} 
          key={index}>
            <img src={sponsor.imgpath} alt={sponsor.name} />
          </a>
        ))}
      </div>
    </div>
  );
};
