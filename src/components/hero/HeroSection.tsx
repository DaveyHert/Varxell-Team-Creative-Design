import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import NavBar from "../ui/NavBar";
import "./herosection.css";

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <HeroTitle />
      <HeroSubtitle />
      <NavBar />
    </div>
  );
}
