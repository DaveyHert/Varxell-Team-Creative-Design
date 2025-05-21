import LinkIcon from "../../../assets/LinkIcon";
import Button from "../../ui/Button";
import EllipseCursors from "../../ui/EllipseCursors";
import "./CareersSection.css";

function CareersSection() {
  return (
    <div className='careers-section'>
      <div className='careers-content'>
        <div className='join-us'>
          <h2 className='heading-text'>Want to build with us?</h2>

          <p className='info-text'>
            We're a diverse team of thinkers and doers shaping what's next for
            the web. If that interests you, check out our open roles.
          </p>

          <Button link='#'>
            Careers
            <LinkIcon />
          </Button>
          <EllipseCursors />
        </div>
      </div>
      <div aria-hidden='true' className='dark-radial-gradient'></div>
    </div>
  );
}
export default CareersSection;
