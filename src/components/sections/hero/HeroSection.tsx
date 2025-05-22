import "./herosection.css";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import Navbar from "@components/ui/Navbar";
import NoiseFilter from "@assets/NoiseFilter";

export default function HeroSection() {
  return (
    <div className='hero-section' id='Home'>
      <div className='hero-content'>
        <HeroTitle />
        <HeroSubtitle />
        <Navbar />
        <NoiseFilter />
      </div>
    </div>
  );
}
