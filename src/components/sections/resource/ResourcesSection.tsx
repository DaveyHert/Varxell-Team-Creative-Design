import "./ResourcesSection.css";
import VarcellIllustration from "../../../assets/varcellIllustration";
import DesignIconsSet from "../../../assets/DesignIconsSet";
import varxellLogo from "../../../assets/VarxellLogo";
import DesignSystemIcon from "../../../assets/DesignSystemIcon";

const cards = [
  {
    title: "Brand Guildlines",
    content:
      "Learn how we build thoughtful systems and refine our brand assets.",
    illustration: VarcellIllustration,
    icon: varxellLogo,
  },
  {
    title: "Nimble",
    content:
      "Our design system for those who care about details. Consistent. Flexible. Built to grow with you.",
    illustration: DesignIconsSet,
    icon: DesignSystemIcon,
  },
];
function ResourcesSection() {
  return (
    <div className='wrapper'>
      <div className='resources-section' id='Resources'>
        <div className='resources-info'>
          <h2 className='lead-text'>
            We take care of our resources <br /> & tools like plants in a
            garden.
          </h2>

          <p className='info-text'>
            Some call them assets. We call them ours. Every system, every
            design, every spec, is planted, pruned, and grown with care. We
            don’t just build tools — we care for them.
          </p>
        </div>

        {/* card section */}
        <div className='resource-cards'>
          {cards.map((card) => (
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
        <div className='resources-blob'></div>
      </div>
    </div>
  );
}
export default ResourcesSection;
