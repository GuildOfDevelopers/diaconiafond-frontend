import React from 'react';
import style from './GetHelpBtn.module.scss';

const GetHelpBtn = ({onClick}) => {
  return <button className={style.btn} onClick={onClick}>Получить помощь</button>;
};

export default GetHelpBtn;
