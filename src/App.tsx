import "./App.css";
import CareersSection from "./components/sections/careers/CareersSection";
import HeroSection from "./components/sections/hero/HeroSection";
import ResourcesSection from "./components/sections/resource/ResourcesSection";
import TeamSection from "./components/sections/team/TeamSection";

function App() {
  return (
    <div className='app'>
      <HeroSection />
      <ResourcesSection />
      <TeamSection />
      <CareersSection />
      <div className='footer' style={{ height: "15vh" }}>
        footer
      </div>
    </div>
  );
}

export default App;
