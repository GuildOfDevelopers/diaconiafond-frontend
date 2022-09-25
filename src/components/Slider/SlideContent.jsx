import React, {useContext} from "react";
import {SliderContext} from "./ Slider";

import style from "./Slider.module.scss";
import GetHelpBtn from "../Buttons/GetHelp/GetHelp";


export const SlideContent = () => {
  const {items, slideNumber, openPopup} = useContext(SliderContext)
  const foundItem = items.find((item, index) => slideNumber === index)
  const {title, body} = foundItem.content

  const clickToOpen = () => {
    openPopup(true)
  }

  return <div className={style.content}>
    <h3 className={style.title}>{title}</h3>
    <p className={style.body}>{body}</p>
    <GetHelpBtn fn={clickToOpen} label='Получить помощь'/>
  </div>
}

export default SlideContent
