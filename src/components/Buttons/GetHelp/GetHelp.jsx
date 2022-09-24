import React from 'react';
import style from './GetHelp.module.scss';

const GetHelp = ({onClick}) => {
  return <button className={style.btn} onClick={onClick}>Получить помощь</button>;
};

export default GetHelp;
