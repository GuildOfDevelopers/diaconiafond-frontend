import React from 'react';
import style from './GetHelpPopup.module.scss'

const Popup = ({openPopup, children}) => {
  const clickToOpenPopup = () => openPopup(false)

  return (
    <div className={style.popup}>
      <div className={style.close} onClick={() => clickToOpenPopup()}>
        <div></div>
      </div>
      {children}
    </div>
  );
};

export default Popup;
