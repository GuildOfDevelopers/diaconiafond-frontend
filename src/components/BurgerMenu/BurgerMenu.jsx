import { useState, useEffect } from "react";


const BurgerMenu = ({openHelpPopup, openCharityPopup}) => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function openHelpPopupBurger() {
    openHelpPopup(true)
    handleCloseBurger()
  }

  function openCharityPopupBurger() {
    openCharityPopup(true)
    handleCloseBurger()
  }

  function handleOpenBurger() {
    setBurgerOpen(true)
  }

  function handleCloseBurger() {
    setBurgerOpen(false)
  }

  useEffect(() => {
    const mainPage = document.querySelector('.main')
    window.addEventListener('scroll', handleCloseBurger)
    mainPage.addEventListener('mousedown', handleCloseBurger)
    return () => document.removeEventListener('mousedown', handleCloseBurger)
  }, [])

  return (
    <>
      <button className="BurgerButton" onClick={handleOpenBurger}></button>
      <div className={isBurgerOpen ? "burger burger_opened" : "burger"}>
        <div className="burger__container">
          <div className="burger__menu">

            <ul className="burger-links">

              <li className="burger-links__item">
                <button className="burger__button" onClick={openCharityPopupBurger}>ПОМОЧЬ ПРОЕКТУ</button>
              </li>
              <li className="burger-links__item">
                <button className="burger__link" onClick={openHelpPopupBurger}>Получить помощь</button>
              </li>
              <li className="burger-links__item">
                <a className="burger__link" href="#reabilitation" onClick={handleCloseBurger}>О реабилитации</a>
              </li>
              <li className="burger-links__item">
                <a className="burger__link" href="#contacts" onClick={handleCloseBurger}>Контакты</a>
              </li>
            </ul>



          </div>
        </div>

      </div>
    </>)
};

export default BurgerMenu;
