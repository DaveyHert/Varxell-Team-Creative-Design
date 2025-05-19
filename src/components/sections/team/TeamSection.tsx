import SlidingText from "../../ui/sliding-text/SlidingText";
import "./TeamSection.css";

import GlobeIcon from "../../../assets/GlobeIcon";

const slidingText = `Hello. Hola. Hallo. Hei. Haye. Hoi. Halo. Bonjour. Ciao. Konnichiwa. Olá. Nǐ hǎo. Ahoj. Kumusta. Tere. Buna. Yassas. Sannu. Helo. Aloha. Bula. Halló. Kia ora. Ave. Kamusta.`;

function TeamSection() {
  return (
    <div className='team-section'>
      <SlidingText>{slidingText}</SlidingText>
      <div className='wrapper'>
        <h2 className='heading-text'>
          We’re a global <span>team,</span>
          <br />
          spread across <span>10 countries</span>
          <br />
          <GlobeIcon />
          and fluent in <span>10 languages.</span>
        </h2>

        <p className='info-text'>
          Our diverse team brings together a wealth of experience. Each member
          contributes a unique perspective, enriching our projects with depth
          and creative flair.
        </p>
      </div>
    </div>
  );
}
export default TeamSection;
