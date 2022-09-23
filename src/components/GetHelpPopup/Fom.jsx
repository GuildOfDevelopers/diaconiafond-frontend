import React from 'react';
import style from './GetHelpPopup.module.scss'
import Checkbox from "./Checkbox";
import GetHelpBtn from "./GetHelpBtn/GetHelpBtn";

const Form = ({openPopup}) => {
  const formRef = React.useRef(null)

  const isCheckBoxOrRadio = type => ['checkbox', 'radio'].includes(type)

  const onSubmit = async (e) => {
    e.preventDefault()
    openPopup(false)

    const data = {}

    for (let field of formRef.current) {
      const {name} = field
      console.log(field)

      if (name) {
        const {type, checked, value} = field
        data[name] = isCheckBoxOrRadio(type) ? checked : value
      }
    }

    //тут запрос на сервер
    console.log(data)
  }

  return (
    <div className={style.form}>
      <h2 className={style.title}>Получить помощь</h2>
      <p className={style.body}>Помощь могут получить мужчины в&nbsp;возрасте от&nbsp;18&nbsp;до&nbsp;55&nbsp;лет,
        а&nbsp;также
        их&nbsp;близкие.</p>
      <span
        className={style.desc}>Пожалуйста, оставьте ваши контактные данные, наши координаторы свяжутся с&nbsp;вами.</span>
      <form className={style.form} ref={formRef}>
        <label>
          <span className={style.visually_hidden}>Фамилия</span>
          <input name='surname' type="text" placeholder='Фамилия'/>
        </label>
        <label>
          <span className={style.visually_hidden}>Имя</span>
          <input name='name' type="text" placeholder='Имя'/></label>
        <label>
          <span className={style.visually_hidden}>Отчество</span>
          <input name='patronymic' type="text" placeholder='Отчество'/></label>
        <label>
          <span className={style.visually_hidden}>Год рождения</span>
          <input name='date' type="number" min='1900' max='2099' step='1' placeholder='Год рождения'/></label>
        <label>
          <span className={style.visually_hidden}>Телефон</span>
          <input name='tel' type="tel" placeholder='Телефон'/></label>
        <Checkbox label='Согласие на&nbsp;обработку персональных данных' url=''/>
        <GetHelpBtn onClick={onSubmit}/>
      </form>
    </div>
  );
};

export default Form;
