import "./ResourcesSection.css";

import ResourceStars from "@assets/ResourceStars";
import { cardsData, resourcesInfoText } from "@data/data";

function ResourcesSection() {
  return (
    <div className='wrapper'>
      <section className='resources-section' id='Resources'>
        <div className='resources-info'>
          <h2 className='heading-text'>
            We take care of our resources <br /> & tools like plants in a
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
          <div className='resources-blob' aria-hidden='true'></div>
        </div>
      </section>
    </div>
  );
}
export default ResourcesSection;
