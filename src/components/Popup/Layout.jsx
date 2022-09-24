import React from 'react';
import style from './Popup.module.scss'

const Layout = ({children, openPopup}) => {
  const layoutRef = React.useRef(null)

  const clickToClose = (e) => {
    if (e.target === layoutRef.current)
      openPopup(false)
  }

  return (
    <div className={style.layout} ref={layoutRef} onClick={clickToClose}>
      {children}
    </div>
  );
};

export default Layout;
