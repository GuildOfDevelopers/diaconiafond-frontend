import React from 'react';
import style from './Popup.module.scss'

const Popup = ({openPopup, children}) => {
  const layoutRef = React.useRef(null)

  const clickToOpenPopup = () => openPopup(false)

  const clickToClose = (e) => {
    if (e.target === layoutRef.current)
      openPopup(false)
  }

  return (
    <div className={style.layout} ref={layoutRef} onClick={clickToClose}>
      <div className={style.popup}>
        <div className={style.wrapper}>
          <div className={style.close} onClick={() => clickToOpenPopup()}>
            <div></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
