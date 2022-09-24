import imageOne from "../../images/importance-one.jpg";
import imageTwo from "../../images/importance-two.jpg";
import imageThree from "../../images/importance-three.jpg";

const ImportanceReabilitaion = () => {
  return (
    <section className="importance">
      <div className="importance__wrapper">
        <h2 className="importance__title">Важность реабилитации</h2>
        <div className="importance__grid-container">
          <div className="importance__item-first">
            <img
              className="importance__item-first-image"
              src={imageOne}
              alt="Мужчины на скамейке"
            />
            <p className="importance__item-first-text">
              Наши благополучатели – одна из самых стигматизированных и
              незащищенных социальных групп. Принято считать, что они сами, и
              только сами виноваты в том, что стали зависимыми. Большинство из
              нас не обладают информацией об этой болезни и о том, что зависимые
              люди могут вернуться к нормальной жизни.{" "}
            </p>
          </div>
          <div className="importance__item-second">
            <img
              className="importance__item-second-image"
              src={imageTwo}
              alt="Мужчина пишет в тетрадке"
            />
            <p className="importance__item-second-text">
              В результате годичного взаимодействия с командой специалистов
              около 60% воспитанников выходят в устойчивую ремиссию — находят
              работу, строят конструктивные отношения с близкими и
              работодателями, и остаются трезвыми гражданами с новыми
              ценностями.
            </p>
          </div>
          <div className="importance__item-third">
            <img
              className="importance__item-third-image"
              src={imageThree}
              alt="Лекция для мужчин"
            />
            <div className="importance__item-third-container">
              <p className="importance__item-third-text">
                Среди наших выпускников есть — отцы-одиночки, жены которых
                умерли или оказались в местах лишения свободы. Они были в шаге
                от лишения родительских прав, их дети — на пороге учреждений,
                занимающихся сиротами. Все это случилось бы, если бы мужчины не
                прошли реабилитацию. Сейчас их дети живут с родными отцами,
                которые научились заботиться, любить и радоваться без
                употребления психоактивных веществ.
              </p>
              <p className="importance__item-third-text">
                В других случаях выпускники вернулись в свои семьи, взяли
                ответственность и восстановили доверие.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceReabilitaion;
