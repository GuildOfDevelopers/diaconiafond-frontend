import React from "react";

import AboutReabilitation from "./components/AboutReabilitation/AboutReabilitation";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImportanceReabilitaion from "./components/ImportanceReabilitaion/ImportanceReabilitaion";
import WhatDesease from "./components/WhatDesease/WhatDesease";
import Popup from "./components/Popup/Popup";
import Form from "./components/Popup/GetHelp/Form";
import YouCanHelp from "./components/YouCanHelp/YouCanHelp";
import Payment from "./components/Popup/Payment/Payment";

function App() {

  const [helpPopup, setHelpPopup] = React.useState(false)
  const [charityPopup, setCharityPopup] = React.useState(false)

  return (
    <div className="App">

      {helpPopup && <Popup openPopup={setHelpPopup}>
        <Form openPopup={setHelpPopup}/>
      </Popup>}

      {charityPopup && <Popup openPopup={setCharityPopup}>
        <Payment openPopup={setCharityPopup}/>
      </Popup>}

      <Header openHelpPopup={setHelpPopup} openCharityPopup={setCharityPopup}/>
      <main className="main">
        <Slider openPopup={setHelpPopup}/>
        <WhatDesease/>
        <AboutReabilitation/>
        <ImportanceReabilitaion/>
        <YouCanHelp openCharityPopup={setCharityPopup}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
