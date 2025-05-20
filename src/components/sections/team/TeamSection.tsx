import SlidingText from "../../ui/sliding-text/SlidingText";
import "./TeamSection.css";
import GlobeIcon from "../../../assets/GlobeIcon";
import { sliderTextContent, teamMembers } from "../../../data/data";
import ProfileCard from "./ProfileCard";
import React, { useEffect, useRef } from "react";

function TeamSection() {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    let animationframeId: number | null = null; //performance improvement
    let mouseX = 0;
    let mouseY = 0;

    // Cancel any scheduled frame before creating a new one
    if (animationframeId) {
      cancelAnimationFrame(animationframeId);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      animationframeId = requestAnimationFrame(() => {
        Array.from(container.children).forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = mouseX - rect.left;
          const y = mouseY - rect.top;

          // update each card's radial gradient based on mouse position
          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        });
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      if (animationframeId) cancelAnimationFrame(animationframeId);
    }; // useEffect cleanup
  }, []);

  return (
    <div className='team-section'>
      <SlidingText>{sliderTextContent}</SlidingText>
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

        <div className='team-members-container' ref={cardContainerRef}>
          {teamMembers.map((profile) => (
            <React.Fragment key={profile.name}>
              <ProfileCard profile={profile} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TeamSection;
