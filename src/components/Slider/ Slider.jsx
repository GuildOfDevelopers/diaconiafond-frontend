import React, {useState, createContext} from "react";

import Arrows from "./Arrows";
import Dots from "./Dots";

import SlidesList from "./SlideList";
import style from './Slider.module.scss'
import SlideContent from "./SlideContent";

export const SliderContext = createContext(null);

const SLIDERS_TEMP = [
    {
        url: require('../../images/Sldier/slider-1.jpg'),
        alt: '',
        content: {
            title: 'Алкоголизм\n' +
                'и наркомания',
            body: 'являются одной из наиболее серьезных проблем современного общества. По данным Росстата за 2020 год число смертей, обусловленных алкоголем, превысило 50 тыс человек. '
        }
    },
    {
        url: require('../../images/Sldier/slider-1.jpg'),
        alt: '',
        content: {
            title: 'Алкоголизм\n' +
                'и наркомания',
            body: 'являются одной из наиболее серьезных проблем современного общества. По данным Росстата за 2020 год число смертей, обусловленных алкоголем, превысило 50 тыс человек. '
        }
    },
    {
        url: require('../../images/Sldier/slider-1.jpg'),
        alt: '',
        content: {
            title: 'Алкоголизм\n' +
                'и наркомания',
            body: 'являются одной из наиболее серьезных проблем современного общества. По данным Росстата за 2020 год число смертей, обусловленных алкоголем, превысило 50 тыс человек. '
        }
    },
    {
        url: require('../../images/Sldier/slider-1.jpg'),
        alt: '',
        content: {
            title: 'Алкоголизм\n' +
                'и наркомания',
            body: 'являются одной из наиболее серьезных проблем современного общества. По данным Росстата за 2020 год число смертей, обусловленных алкоголем, превысило 50 тыс человек. '
        }
    },
]

const Slider = function ({width, height}) {
    const items = SLIDERS_TEMP;
    const [slide, setSlide] = useState(0);

    const changeSlide = (direction = 1) => {
        let slideNumber;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    return (
        <div className={style.wrapper}>
            <SliderContext.Provider
                value={{
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                }}
            >
                <SlideContent/>
                <div className={style.slider}>

                    <Arrows/>
                    <SlidesList/>
                    <Dots/>

                </div>
            </SliderContext.Provider>
        </div>
    );
};

export default Slider;