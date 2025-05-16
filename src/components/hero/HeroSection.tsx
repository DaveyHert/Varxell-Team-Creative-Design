import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import NavBar from "../ui/NavBar";
import "./herosection.css";
import NoiseFilter from "../../assets/NoiseFilter";

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <HeroTitle />
        <HeroSubtitle />
        <NavBar />
        <NoiseFilter />
      </div>
    </div>
  );
}
