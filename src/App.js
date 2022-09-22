import React from "react";

import AboutReabilitation from "./components/AboutReabilitation/AboutReabilitation";
import Slider from "./components/Slider/ Slider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImportanceReabilitaion from "./components/ImportanceReabilitaion/ImportanceReabilitaion";
import WhatDesease from "./components/WhatDesease/WhatDesease";
import Popup from "./components/GetHelpPopup/Popup";
import Layout from "./components/GetHelpPopup/Layout";
import Form from "./components/GetHelpPopup/Fom";

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)

  return (
    <div className="App">

      {isPopupOpen && <Layout>
        <Popup openPopup={setIsPopupOpen}>
          <Form/>
        </Popup>
      </Layout>}

      <Header openPopup={setIsPopupOpen}/>
      <Slider/>
      <WhatDesease/>
      <AboutReabilitation/>
      <ImportanceReabilitaion/>
      <Footer/>
    </div>
  );
}

export default App;
