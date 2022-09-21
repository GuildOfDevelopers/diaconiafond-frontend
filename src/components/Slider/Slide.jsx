import React from "react";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";

import style from "./Slider.module.scss";

export default function Slide({data}) {
    const {url, alt} = data;
    return <img src={url} alt={alt} className={style.slide_image}/>
}