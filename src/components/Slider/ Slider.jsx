import React, {useState, createContext} from "react";

import Arrows from "./Arrows";
import Dots from "./Dots";

import SlidesList from "./SlideList";
import style from './Slider.module.scss'
import SlideContent from "./SlideContent";

export const SliderContext = createContext(null);

const SLIDERS_TEMP = [
    {url: require('../../images/Sldier/slider-1.jpg'), content: {title: 'Slider-1', body: 'Lorem ipsum maybe'}},
    {url: require('../../images/Sldier/slider-1.jpg'), content: {title: 'Slider-2', body: 'Lorem ipsum maybe'}},
    {url: require('../../images/Sldier/slider-1.jpg'), content: {title: 'Slider-3', body: 'Lorem ipsum maybe'}},
    {url: require('../../images/Sldier/slider-1.jpg'), content: {title: 'Slider-4', body: 'Lorem ipsum maybe'}},
    {url: require('../../images/Sldier/slider-1.jpg'), content: {title: 'Slider-5', body: 'Lorem ipsum maybe'}},
    {url: require('../../images/Sldier/slider-1.jpg'), content: {title: 'Slider-6', body: 'Lorem ipsum maybe'}},
]

const Slider = function ({width, height}) {
    const items = SLIDERS_TEMP;
    const [slide, setSlide] = useState(0);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.slider}>
                <SliderContext.Provider
                    value={{
                        changeSlide,
                        slidesCount: items.length,
                        slideNumber: slide,
                        items,
                    }}
                >
                    <Arrows/>
                    <SlidesList/>
                    <Dots/>
                </SliderContext.Provider>
            </div>
            <SlideContent content={{items, slideNumber: slide}}/>
        </div>
    );
};

export default Slider;