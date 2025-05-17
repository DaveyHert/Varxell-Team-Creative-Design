import "./herosection.css";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import NoiseFilter from "../../assets/NoiseFilter";
import Navbar from "../ui/NavBar";

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <HeroTitle />
        <HeroSubtitle />
        <Navbar />
        <NoiseFilter />
      </div>
    </div>
  );
}
