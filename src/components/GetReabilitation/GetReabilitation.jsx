import imageMan from "../../images/importance-man.jpg";

const GetReabilitation = () => {
  return (
    <section className="getreab">
      <div className="getreab__wrapper">
        <div className="getreab__info">
          <div className="getreab__home-icon"></div>
          <div className="getreab__text-block">
            <h2 className="getreab__title">
              Как попасть в реабилитационный центр бесплатно?
            </h2>
            <p className="getreab__text">
              Для предварительной консультации вам необходимо позвонить нам по
              телефону:
            </p>
            <p className="getreab__phone-number">+7 (812) 916 92 24</p>
            <p className="getreab__description">
              Помощь могут получить мужчины в возрасте от 18 до 55 лет, а также
              их близкие.
            </p>
          </div>
        </div>
        <img className="getreab__image-man" src={imageMan} alt="Мужчина на полу" />
        <div className="getreab__line-block">
          <div className='getreab__first-line'></div>
          <div className='getreab__second-line'></div>
        </div>
      </div>
    </section>
  );
};

export default GetReabilitation;
