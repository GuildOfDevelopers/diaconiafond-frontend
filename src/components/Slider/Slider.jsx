import React from "react";

import Arrows from "./Arrows";
import Dots from "./Dots";

import SlidesList from "./SlideList";
import style from './Slider.module.scss'
import SlideContent from "./SlideContent";

export const SliderContext = React.createContext(null);

const SLIDERS_TEMP = [
  {
    url: require('../../images/Slider/slider-1.jpg'),
    alt: '',
    content: {
      title: 'Алкоголизм и\u00A0наркомания',
      body: 'являются одной из\u00A0наиболее серьезных проблем современного общества. По\u00A0данным Росстата за\u00A02020 год число смертей, обусловленных алкоголем, превысило 50\u00A0тыс человек.'
    }
  },
  {
    url: require('../../images/Slider/slider-2.jpg'),
    alt: '',
    content: {
      title: 'Алкоголизм и\u00A0наркомания',
      body: 'являются одной из\u00A0наиболее серьезных проблем современного общества. По\u00A0данным Росстата за\u00A02020 год число смертей, обусловленных алкоголем, превысило 50\u00A0тыс человек.'
    }
  },
  {
    url: require('../../images/Slider/slider-3.jpg'),
    alt: '',
    content: {
      title: 'Алкоголизм и\u00A0наркомания',
      body: 'являются одной из\u00A0наиболее серьезных проблем современного общества. По\u00A0данным Росстата за\u00A02020 год число смертей, обусловленных алкоголем, превысило 50\u00A0тыс человек.'
    }
  },
]

const Slider = function ({openPopup}) {
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
        openPopup
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
