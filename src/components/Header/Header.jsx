import HeaderLogo from "../../images/logo_header.svg"

const Header = () => {

    return <header className="header">

        <div className="header__content">

            <img className="header__logo" src={HeaderLogo} alt="Логотип" />

            <div className="header__menu">

                <ul className="links">

                    <li className="links__item"><a className="link" href="ww">Получить помощь</a></li>
                    <li className="links__item"><a className="link" href="ww">О реабилитации</a></li>
                    <li className="links__item"><a className="link" href="ww">Контакты</a></li>
                </ul>


                <button className="header__button">ПОМОЧЬ ПРОЕКТУ</button>

            </div>
        </div>
    </header>;
};

export default Header;