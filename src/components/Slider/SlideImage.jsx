import React from "react";

import style from "./Slider.module.scss";

export default function SlideImage({src, alt}) {
    return <img src={src} alt={alt} className={style.slide_image}/>;
}