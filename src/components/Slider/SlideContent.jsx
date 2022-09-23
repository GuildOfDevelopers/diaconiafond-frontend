import React, {useContext} from "react";
import {SliderContext} from "./ Slider";

import style from "./Slider.module.scss";
import GetHelpBtn from "../GetHelpPopup/GetHelpBtn/GetHelpBtn";

const fn = () => {
  console.log('red')
}

export default function SlideContent() {
  const {items, slideNumber} = useContext(SliderContext)
  const foundItem = items.find((item, index) => slideNumber === index)
  const {title, body} = foundItem.content
  return <div className={style.content}>
    <h3 className={style.title}>{title}</h3>
    <p className={style.body}>{body}</p>
    <GetHelpBtn onClick={fn}/>
  </div>
}