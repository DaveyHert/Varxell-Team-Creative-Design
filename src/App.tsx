import "./App.css";
import CareersSection from "@components/sections/careers/CareersSection";
import HeroSection from "@components/sections/hero/HeroSection";
import ResourcesSection from "@components/sections/resource/ResourcesSection";
import TeamSection from "@components/sections/team/TeamSection";
import FooterSection from "@components/sections/footer/FooterSection";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <ResourcesSection />
      <TeamSection />
      <CareersSection />
      <FooterSection />
    </div>
  );
}

export default App;
