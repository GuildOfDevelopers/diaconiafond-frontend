import image from '../../images/YouCanHelp/img.jpeg';
import imageMobile from '../../images/YouCanHelp/img-mobile.jpeg';
import './YouCanHelp.scss'

const YouCanHelp = () => {
  return (
    <div className="wrapper">
      <div className="section-container d-flex">
        <div className="section-left d-flex">
          <picture className="section-left__picture">
            <source srcSet={imageMobile} media="(max-width: 768px)"/>
            <img src={image} alt="Ребенок без семьи"/>
          </picture>
          <div className="section-left__left-line"></div>
          <div className="section-left__right-line"></div>
        </div>
        <div className="section-right">
          <div className="section-right__wrapper">
            <h2 className="top__header">Кто финансирует <p className="top__header">бесплатное лечение?</p></h2>
            <p className="top__text">Наш проект существует при поддержке Комитета по социальной политике
              Санкт-Петербурга,
              <spаn className="green"> также благодаря регулярным пожертвованиям неравнодушных людей</spаn>
            </p>
            <p className="top__text-your-help">
              <div className="green"> Ваша помощь может спасти жизни людей,</div> восстановить семьи и дать шанс на
              счастливую жизнь их детям, жизнь в полноценной семье. На сегодняшний день количество человек, которые
              могут пройти бесплатную реабилитацию зависит от имеющихся ресурсов
            </p>
            <div className="section-right__invocation invocation">
              <h1 className="invocation__header">И ты можешь помочь</h1>
              <button className="invocation__btn">Сделать пожертвование</button>
            </div>
            <div className="section-right__invocation-mobile invocation">
              <div className="section-right__invocation-moble-top">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M147.379 46.5763C147.379 89.2918 74.9999 143.132 74.9999 143.132C74.9999 143.132 2.62109 89.2918 2.62109 46.5763C2.62109 3.86076 60.0441 -10.6569 74.9999 26.9858C88.5098 -11.689 147.379 3.86076 147.379 46.5763Z"
                    fill="#56862E" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                  <path
                    d="M113.786 145.439H35.8916V83.0114C35.8916 78.7077 39.3774 75.2219 43.6811 75.2219H105.997C110.301 75.2219 113.786 78.7077 113.786 83.0114V145.439Z"
                    fill="#84C54E" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                  <path
                    d="M74.8393 85.9227C84.6156 85.9227 92.5409 77.9974 92.5409 68.2211C92.5409 58.4448 84.6156 50.5195 74.8393 50.5195C65.063 50.5195 57.1377 58.4448 57.1377 68.2211C57.1377 77.9974 65.063 85.9227 74.8393 85.9227Z"
                    fill="#84C54E" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                  <path
                    d="M147.379 46.5372C147.379 89.2138 74.9999 143.005 74.9999 143.005C74.9999 143.005 2.62109 89.2138 2.62109 46.5372C2.62109 3.86067 60.0441 -10.6424 74.9999 26.9613C88.5098 -11.6696 147.379 3.86554 147.379 46.5372Z"
                    stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h1 className="invocation__header">И ты можешь помочь</h1>
              </div>
              <button className="invocation__btn">Сделать пожертвование</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouCanHelp;
