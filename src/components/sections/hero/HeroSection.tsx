import "./herosection.css";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import noiseFilter from "../../../assets/noiseFilter";

import Navbar from "../../ui/Navbar";

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <HeroTitle />
        <HeroSubtitle />
        <Navbar />
        <noiseFilter />
      </div>
    </div>
  );
}
