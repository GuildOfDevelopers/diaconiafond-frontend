import image from '../../images/YouCanHelp/img.jpeg';

const YouCanHelp = () => {
  return (
    <div className="pt-112">
      <div className='wrapper-on-top'>
      </div>
      <div className="wrapper">
        <div className="section-container d-flex">
          <div className="section-left d-flex">
            <picture className="section-left__picture">
              <source srcSet="/images/YouCanHelp/img-mobile.jpeg" media="(max-width: 768px)"/>
              <img src={image} alt="Ребенок без семьи" />
            </picture>
            <div className="section-left__left-line"></div>
            <div className="section-left__right-line"></div>
          </div>
          <div className="section-right">
            <div className="section-right__top top">
              <div className="section-rigth__top-text-container">
                <h2 className="top__header">Кто финансирует <p className="top__header">бесплатное лечение?</p></h2>
                <p className="top__text">Наш проект существует  при поддержке Комитета по социальной политике Санкт-Петербурга,<spаn className="green"> также благодаря регулярным пожертвованиям неравнодушных людей</spаn></p>
                <p className="top__text-your-help"> <span className='green'> Ваша помощь может спасти жизни людей,</span> восстановить семьи и дать шанс на счастливую жизнь их детям, жизнь в полноценной семье. На сегодняшний день количество человек, которые могут пройти бесплатную реабилитацию зависит от имеющихся ресурсов</p>
              </div>
            </div>
            <div className="section-right__bottom d-flex">
              <div className="section-right__bottom-img">
              </div>
              <div className="section-right__invocation invocation">
                <h1 className="invocation__header">И ты можешь помочь</h1>
                <button className="invocation__btn">Сделать пожертвование</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouCanHelp;
