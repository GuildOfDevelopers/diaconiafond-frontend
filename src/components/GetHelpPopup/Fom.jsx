import React from 'react';
import style from './GetHelpPopup.module.scss'
import Checkbox from "./Checkbox";
import GetHelpBtn from "./GetHelpBtn/GetHelpBtn";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className={style.form}>
      <h2 className={style.title}>Получить помощь</h2>
      <p className={style.body}>Помощь могут получить мужчины в&nbsp;возрасте от&nbsp;18&nbsp;до&nbsp;55&nbsp;лет,
        а&nbsp;также
        их&nbsp;близкие.</p>
      <span
        className={style.desc}>Пожалуйста, оставьте ваши контактные данные, наши координаторы свяжутся с&nbsp;вами.</span>
      <form className={style.form} id='popupForm'>
        <label>
          <span className={style.visually_hidden}>Фамилия</span>
          <input type="text" placeholder='Фамилия'/>
        </label>
        <label>
          <span className={style.visually_hidden}>Имя</span>
          <input type="text" placeholder='Имя'/></label>
        <label>
          <span className={style.visually_hidden}>Отчество</span>
          <input type="text" placeholder='Отчество'/></label>
        <label>
          <span className={style.visually_hidden}>Год рождения</span>
          <input type="date" placeholder='Год рождения'/></label>
        <label>
          <span className={style.visually_hidden}>Телефон</span>
          <input type="tel" placeholder='Телефон'/></label>
        <Checkbox label='Согласие на&nbsp;обработку персональных данных' url=''/>
        <GetHelpBtn onClick={onSubmit}/>
      </form>
    </div>
  );
};

export default Form;
