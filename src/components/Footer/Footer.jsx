import FooterLogo from "../../images/logo_footer.svg"
import PhoneImg from "../../images/phone_img.svg"
import VkIcon from "../../images/VK.svg"
import YoutubeIcon from "../../images/youtube.svg"
import location_img from "../../images/location_img.svg"
import email_img from "../../images/email_img.svg"

const Footer = () => {

  return <footer className="footer">
    <div className="footer__content">

      <div className="footer__fist-block">
        <img className="footer__logo" src={FooterLogo} alt="Логотип" />
        <a className="footer__link footer__link_type_orange" href="https://diaconiafond.ru/" target="_blank" rel="noreferrer">Официальный сайт фонда</a>
        <a className="footer__link" href="tel:+78129243662"><img className="footer__linkImg" src={PhoneImg} alt="телефон офиса фонда" />+7 (812) 924-36-62 Офис Фонда;</a>
        <a className="footer__link" href="tel:+78129169224"><img className="footer__linkImg" src={PhoneImg} alt="телефон реабилитации" />+7 (812) 916 92 24 Реабилитация;</a>
      </div>

      <div className="footer__second-block">

        <div className="footer__socials">
          <a className="footer__social" href="https://vk.com/diaconiafond" target="_blank" rel="noreferrer"><img className="footer__social_type_icon" src={VkIcon} alt="VK" /></a>
          <a className="footer__social" href="https://www.youtube.com/channel/UCTgO-IZtkURJ-HlrIJ13FZw" target="_blank" rel="noreferrer"><img className="footer__social_type_icon" src={YoutubeIcon} alt="youtube" /></a>
        </div>

        <p className="footer__link footer__link_type_orange footer__location" ><img className="footer__linkImg " src={location_img} alt="Адрес фонда" />г. Санкт-Петербург, <br />
          набережная Обводного канала, дом 66</p>
        <a className="footer__link" href="mailto:info@diaconiaspb.com?subject=Диакония"><img className="footer__linkImg" src={email_img} alt="email" />info@diaconiaspb.com</a>

      </div>

    </div>

  </footer>;
};

export default Footer;
