import "./App.css";
import Footer from "./components/Footer";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2.js";
import Intro3 from "./components/Intro3";
import RandomName from "./components/Nav";
import Promo from "./components/Promo";

function App() {
  return (
    <div className="App">
      <RandomName />
      <Promo />
      <Intro1 adj="excellent"/>
      <Intro2 />
      <Intro3 />
      <Footer name="Saptarshi" noUse="Sap" />
      <Footer name="Another name" noUse="Sap" />
    </div>
  );
}

export default App;
