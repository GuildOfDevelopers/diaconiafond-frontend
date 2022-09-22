import React from 'react';
import style from "./GetHelpPopup.module.scss";

const Checkbox = ({label, url}) => {
  return (
    <div className={style.checkbox}>
      <input className={style.checkbox_input} id='checkbox' type="checkbox"/>
      <label className={style.checkbox_label} htmlFor='checkbox'>
        <a href={url} target='_blank'>{label}</a>
      </label>
    </div>
  );
};

export default Checkbox;
