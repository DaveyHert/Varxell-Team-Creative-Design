import SpotlightGlass from "../ui/spotlight-glass/SpotlightGlass";

export default function HeroTitle() {
  return (
    <div className='hero-title'>
      {/* <h1>Meet the team of designers, and engineers behind the pixels.</h1> */}
      <h1>
        Meet our team of innovators <span className='stylish-em-dash'>—</span>{" "}
        the faces <SpotlightGlass>behind the pixels</SpotlightGlass>
      </h1>
    </div>
  );
}
