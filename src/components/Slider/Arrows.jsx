import React, { useContext } from "react";
import { SliderContext } from "./ Slider";

import style from "./Slider.module.scss";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className={style.arrows}>
      <svg
        className={style.arrow_left}
        onClick={() => changeSlide(-1)}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="#E38025" />
        <path
          d="M27.8997 13.9997L17.9238 23.9756L27.8233 33.8751"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className={style.arrow_right}
        onClick={() => changeSlide(1)}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="48"
          y="48"
          width="48"
          height="48"
          transform="rotate(180 48 48)"
          fill="#E38025"
        />
        <path
          d="M20.1003 34.0003L30.0762 24.0244L20.1767 14.1249"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

      </svg>
    </div>
  );
}
