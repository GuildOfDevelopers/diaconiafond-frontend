import React from 'react';
import style from "./GetHelp.module.scss";

const Checkbox = ({toggle, label, url}) => {
  return (
    <div className={style.checkbox}>
      <input className={style.checkbox_input} onChange={() => toggle(prev => !prev)} name='agreement' id='checkbox'
             type="checkbox"/>
      <label className={style.checkbox_label} htmlFor='checkbox'>
        <a href={url} target='_blank'>{label}</a>
      </label>
    </div>
  );
};

export default Checkbox;
