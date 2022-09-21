import AboutReabilitation from "./components/AboutReabilitation/AboutReabilitation";
import Slider from "./components/Slider/ Slider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Slider/>
            <AboutReabilitation/>
            <Footer />
        </div>
    );
}

export default App;
