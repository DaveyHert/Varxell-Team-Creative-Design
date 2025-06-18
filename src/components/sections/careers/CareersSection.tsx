import { useRef } from "react";
import { useInView } from "motion/react";
import LinkIcon from "@/assets/LinkIcon";
import Button from "@/components/ui/Button";
import EllipseCursors from "@/components/ui/ellipse-cursors/EllipseCursors";
import "./CareersSection.css";

const textInfo =
  "We're a diverse team of thinkers and doers shaping what's next for the web. If that interests you, check out our open roles.";

function CareersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.05, once: true });

  return (
    <section className='careers-section' id='Career'>
      <div className='careers-content'>
        <div className='join-us' ref={ref}>
          <h2 className='heading-text'>Want to build with us?</h2>
          <p className='info-text'>{textInfo}</p>
          <Button link='#'>
            Careers
            <LinkIcon />
          </Button>
          <EllipseCursors shouldAnimate={isInView} />
        </div>
      </div>
      <div aria-hidden='true' className='dark-radial-gradient'></div>
    </section>
  );
}

export default CareersSection;
