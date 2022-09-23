import React from "react";

import Arrows from "./Arrows";
import Dots from "./Dots";

import SlidesList from "./SlideList";
import style from './Slider.module.scss'
import SlideContent from "./SlideContent";

export const SliderContext = React.createContext(null);

const SLIDERS_TEMP = [
  {
    url: require('../../images/Sldier/slider-1.jpg'),
    alt: '',
    content: {
      title: 'Алкоголизм и\u00A0наркомания',
      body: 'являются одной из наиболее серьезных проблем современного общества. По данным Росстата за 2020 год число смертей, обусловленных алкоголем, превысило 50 тыс человек. '
    }
  },
  {
    url: require('../../images/Sldier/slider-1.jpg'),
    alt: '',
    content: {
      title: 'Алкоголизм и\u00A0наркомания',
      body: 'являются одной из наиболее серьезных проблем современного общества. По данным Росстата за 2020 год число смертей, обусловленных алкоголем, превысило 50 тыс человек. '
    }
  },
  {
    url: require('../../images/Sldier/slider-1.jpg'),
    alt: '',
    content: {
      title: 'Алкоголизм и\u00A0наркомания',
      body: 'являются одной из наиболее серьезных проблем современного общества. По данным Росстата за 2020 год число смертей, обусловленных алкоголем, превысило 50 тыс человек. '
    }
  }
]

const Slider = function () {
  const items = SLIDERS_TEMP;
  const [slide, setSlide] = React.useState(0);

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
    <SliderContext.Provider
      value={{
        changeSlide,
        slidesCount: items.length,
        slideNumber: slide,
        items,
      }}
    >
      <div className={style.wrapper}>
        <div className={style.wrapper_inner}>
          <SlideContent/>

          <div className={style.slider_wrapper}>
            <div className={style.slider}>
              <SlidesList/>
              <Dots/>
              <Arrows/>
            </div>
          </div>


        </div>

      </div>
    </SliderContext.Provider>
  );
};

export default Slider;
