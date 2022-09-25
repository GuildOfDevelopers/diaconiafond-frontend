import React, {useContext} from "react";
import {SliderContext} from './Slider';

import style from "./Slider.module.scss";

export default function Dot({number}) {
  const {goToSlide, slideNumber} = useContext(SliderContext);

  return (
    <div
      className={slideNumber === number ? style.dot_active : style.dot_inactive}
      onClick={() => goToSlide(number)}
    />
  );
}
