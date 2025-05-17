import "./ResourcesSection.css";
import VarcellIllustration from "../../../assets/varcellIllustration";
import Logo from "../../../assets/varxellLogo";

const cards = [
  {
    title: "Brand Guildlines",
    content:
      "Learn how we build thoughtful systems and refine our brand assets.",
    illustration: VarcellIllustration,
    icon: Logo,
  },
  {
    title: "Nimble",
    content:
      "Our design system for teams who care about details. Consistent. Flexible. Made to grow with you.",
  },
];
function ResourcesSection() {
  return (
    <div className='wrapper'>
      <div className='resources-section'>
        <div className='resources-info'>
          <h2 className='lead-text'>
            We take care of our resources <br /> and tools like plants in a
            garden.
          </h2>

          <p className='info-text'>
            Some call them assets. We call them ours. Every system, every
            design, every spec, is planted, pruned, and grown with care. We
            don’t just build tools — we care for them.
          </p>
        </div>
        <div className='resource-cards'>
          {cards.map((card) => (
            <div className='card' key={card.title}>
              {card.illustration?.()}
              <div className='card-content'>
                <h4 className='card-title'>
                  {card.icon?.()}
                  {card.title}
                </h4>
                <p className='card-info'>{card.content}</p>
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
