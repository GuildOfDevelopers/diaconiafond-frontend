import AboutReabilitation from "./components/AboutReabilitation/AboutReabilitation";
import Slider from "./components/Slider/ Slider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImportanceReabilitaion from "./components/ImportanceReabilitaion/ImportanceReabilitaion";
import GetReabilitation from "./components/GetReabilitation/GetReabilitation";
import WhatDesease from "./components/WhatDesease/WhatDesease";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <WhatDesease />
      <AboutReabilitation />
      <GetReabilitation />
      <ImportanceReabilitaion />
      <Footer />
    </div>
  );
}

export default App;
