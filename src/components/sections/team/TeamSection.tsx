import SlidingText from "../../ui/sliding-text/SlidingText";
import "./TeamSection.css";
import GlobeIcon from "../../../assets/GlobeIcon";

import { sliderTextContent, teamMembers } from "../../../data/data";
import ProfileCard from "./ProfileCard";
import React from "react";
console.log(teamMembers);

function TeamSection() {
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
      </div>
      <div className='team-members-container'>
        {teamMembers.map((profile) => (
          <React.Fragment key={profile.name}>
            <ProfileCard profile={profile} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default TeamSection;
