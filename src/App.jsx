import HardtechnoSite from "./components/HardtechnoSite";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Sets from "./components/Sets";
import Social from "./components/Social";

function App() {
  return (
    <HardtechnoSite>
      <Gallery />
      <Sets />
      <Events />
      <Social />
    </HardtechnoSite>
  );
}

export default App;
