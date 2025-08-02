import HardTechnoSite from "./components/HardTechnoSite";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Sets from "./components/Sets";
import Social from "./components/Social";

function App() {
  return (
    <HardTechnoSite>
      <Gallery />
      <Sets />
      <Events />
      <Social />
    </HardTechnoSite>
  );
}

export default App;
