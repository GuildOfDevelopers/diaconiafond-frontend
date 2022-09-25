import React from 'react';
import style from './GetHelp.module.scss';

const GetHelp = ({fn, label}) => {
  return <button className={style.btn} onClick={fn}>{label}</button>;
};

export default GetHelp;
