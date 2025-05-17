import "./App.css";
import HeroSection from "./components/sections/hero/HeroSection";
import ResourcesSection from "./components/sections/resource/ResourcesSection";

function App() {
  return (
    <div className='app'>
      <HeroSection />
      <ResourcesSection />
      <div className='section' style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
