import people from "../../images/aboutReabilitationGroup.png";
import alone from "../../images/aboutReabilitationAlone.png";

const AboutReabilitation = () => {
  return (
    <div className="about-reabilitaton" id="reabilitation">
      <div className="about-reabilitaton__stages container">
        <h2>О реабилитации</h2>
        <div className="about-reabilitaton__descr">
          <p>
            <span>
              Благотворительный фонд &laquo;Диакония&raquo; уже более
              20&nbsp;лет помогает людям избавиться от&nbsp;зависимости.
            </span>
            <span className="greenSpan">
              Лечение проводиться на&nbsp;безвозмездной основе
            </span>
            и&nbsp;разделено на&nbsp;два этапа: лечение в&nbsp;загородном
            Реабилитационном центре &laquo;Пошитни&raquo; в&nbsp;Псковской
            области и&nbsp;социальная адаптация в&nbsp;Санкт-Петербурге, также
            предусмотрена программа сопровождения и&nbsp;
            <span className="greenSpan">помощи родственникам</span>, что
            является важной составляющей этого процесса.
          </p>
          <img src={people} alt="help to people"></img>
        </div>
      </div>
      <div className="about-reabilitaton__how-to-get container">
        <h2>Как попасть в&nbsp;реабилитационный центр бесплатно?</h2>
        <p>
          Для предварительной консультации вам необходимо позвонить нам
          по&nbsp;телефону:
        </p>
        <a href="tel:+78129169224">+7 (812) 916 92 24</a>
        <p>
          <span>
            Помощь могут получить мужчины в&nbsp;возрасте
            от&nbsp;18&nbsp;до&nbsp;55&nbsp;лет, а&nbsp;также их&nbsp;близкие.
          </span>
        </p>
      </div>
      <div className="how-to-get__alone container">
        <img src={alone} alt="help to people"></img>
      </div>
    </div>
  );
};

export default AboutReabilitation;
