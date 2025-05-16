import "./App.css";
import HeroSection from "./components/hero/HeroSection";

function App() {
  return (
    <div className='app'>
      <HeroSection />
      <div className='section' style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
