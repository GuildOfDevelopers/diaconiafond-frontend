import React, {useContext} from "react";
import Slide from "./Slide";
import {SliderContext} from "./Slider";
import {browserName} from 'react-device-detect';

import style from "./Slider.module.scss";

export default function SlidesList() {
  const {slideNumber, items} = useContext(SliderContext);


  return (
    <div
      className={style.slide_list}
      style={{transform: `translateX(-${slideNumber * 100}%)`}}
    >

      {browserName !== 'Firefox' && items.map((slide, index) => (
        <Slide key={index} data={slide}/>
      ))}

      {browserName === 'Firefox' && <Slide key={items[0].index} data={items[0]}/>}
    </div>
  )
}
