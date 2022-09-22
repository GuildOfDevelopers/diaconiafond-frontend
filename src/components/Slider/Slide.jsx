import React from "react";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";

import style from "./Slider.module.scss";

export default function Slide({data: {url, content}}) {
    return (
        <div className={style.slide}>
            <SlideImage src={url} alt={content}/>

        </div>
    );
}