import "./ResourcesSection.css";
import ResourceStars from "@/assets/ResourceStars";
import { cardsData, resourcesInfoText } from "@/data/data";
import LoveIcon from "@/assets/LoveIcon";
import WaterPlantIcon from "@/assets/WaterPlantIcon";
import ShootingStar from "@/components/ui/shooting-star/ShootingStar";

function ResourcesSection() {
  return (
    <div className='wrapper'>
      <section className='resources-section' id='Resources'>
        <div className='resources-info'>
          <h2 className='heading-text'>
            <span className='break-line'>We care for our resources </span>
            <LoveIcon /> like plants in a <WaterPlantIcon />
            garden.
          </h2>

          <p className='info-text'>{resourcesInfoText}</p>
        </div>

        {/* card section */}
        <div className='resource-cards'>
          {cardsData.map((card) => (
            <div className='card' key={card.title}>
              <div className='card-wrapper'>
                {card.illustration?.()}
                <div className='card-content'>
                  <h4 className='card-title'>
                    {card.icon?.()}
                    {card.title}
                  </h4>
                  <p className='card-info'>{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='resources-stars'>
          <ResourceStars />
          <div className='resources-blob' aria-hidden='true' />
        </div>
        <ShootingStar />
      </section>
    </div>
  );
}
export default ResourcesSection;
