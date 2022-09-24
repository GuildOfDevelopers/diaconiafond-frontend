import React from "react";

import AboutReabilitation from "./components/AboutReabilitation/AboutReabilitation";
import Slider from "./components/Slider/ Slider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImportanceReabilitaion from "./components/ImportanceReabilitaion/ImportanceReabilitaion";
import WhatDesease from "./components/WhatDesease/WhatDesease";
import Popup from "./components/Popup/Popup";
import Layout from "./components/Popup/Layout";
import Form from "./components/Popup/GetHelp/Form";
import YouCanHelp from "./components/YouCanHelp/YouCanHelp";

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)

  return (
    <div className="App">

      {isPopupOpen && <Layout openPopup={setIsPopupOpen}>
        <Popup openPopup={setIsPopupOpen}>
          <Form openPopup={setIsPopupOpen}/>
        </Popup>
      </Layout>}

      <Header openPopup={setIsPopupOpen}/>
      <main className="main">
        <Slider/>
        <WhatDesease/>
        <AboutReabilitation/>
        <ImportanceReabilitaion/>
        <YouCanHelp/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
