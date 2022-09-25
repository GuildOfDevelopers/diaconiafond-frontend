import React from 'react';
import style from './GetHelp.module.scss';

const GetHelp = ({fn, label = '', fullWidth = false}) => {
  return <button className={[style.btn, fullWidth ? style.btnFull : ''].join(' ')} onClick={fn}>{label}</button>;
};

export default GetHelp;
