import HeaderLogo from "../../images/logo_header.svg"
import useMediaQuery from "../../hooks/useMediaQuery";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx"

const Header = ({ openPopup }) => {
  const isDesktop = useMediaQuery('(min-width: 769px)');
  const clickToOpenPopup = () => openPopup(true)


  return <header className="header">

    <div className="header__content">

      <img className="header__logo" src={HeaderLogo} alt="Логотип" />

      {isDesktop ? <div className="header__menu">

        <ul className="links">

          <li className="links__item">
            <button className="link" onClick={() => clickToOpenPopup()}>Получить помощь</button>
          </li>
          <li className="links__item">
            <a className="link" href="#reabilitation">О реабилитации</a>
          </li>
          <li className="links__item">
            <a className="link" href="#contacts">Контакты</a>
          </li>
        </ul>

        <button className="header__button">ПОМОЧЬ ПРОЕКТУ</button>

      </div> : <BurgerMenu />}

    </div>
  </header>;
};

export default Header;

