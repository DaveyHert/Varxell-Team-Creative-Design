import "./App.css";
import HeroSection from "./components/sections/hero/HeroSection";
import ResourcesSection from "./components/sections/resource/ResourcesSection";
import TeamSection from "./components/sections/team/TeamSection";

function App() {
  return (
    <div className='app'>
      <HeroSection />
      <ResourcesSection />
      <TeamSection />
      <div className='section' style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
