import imageOne from "../../images/importance-one.jpg";
//import imageTwo from "../../images/importance-two.jpg";
//import imageThree from "../../images/importance-three.jpg";

import imageTwo from "../../images/importance-two-new.jpg";
import imageThree from "../../images/importance-three-new.jpg";


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
              Наши благополучатели&nbsp;&mdash; одна из&nbsp;самых стигматизированных и
              незащищенных социальных групп. Принято считать, что они сами, и
              только сами виноваты в&nbsp;том, что стали зависимыми. Большинство из
              нас не&nbsp;обладают информацией об&nbsp;этой болезни и&nbsp;о&nbsp;том, что зависимые
              люди могут вернуться к&nbsp;нормальной жизни.{" "}
            </p>
          </div>
          <div className="importance__item-second">
            <img
              className="importance__item-second-image"
              src={imageTwo}
              alt="Мужчины за столом"
            />
            <p className="importance__item-second-text">
              В&nbsp;результате годичного взаимодействия с&nbsp;командой специалистов
              около&nbsp;60% воспитанников выходят в&nbsp;устойчивую ремиссию&nbsp;&mdash; находят
              работу, строят конструктивные отношения с&nbsp;близкими и
              работодателями, и&nbsp;остаются трезвыми гражданами с&nbsp;новыми
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
                Среди наших выпускников есть&nbsp;&mdash; отцы-одиночки, жены которых
                умерли или оказались в&nbsp;местах лишения свободы. Они были в&nbsp;шаге
                от&nbsp;лишения родительских прав, их&nbsp;дети&nbsp;&mdash; на&nbsp;пороге учреждений,
                занимающихся сиротами. Все это случилось&nbsp;бы, если&nbsp;бы мужчины не
                прошли реабилитацию. Сейчас их&nbsp;дети живут с&nbsp;родными отцами,
                которые научились заботиться, любить и&nbsp;радоваться без
                употребления психоактивных веществ.
              </p>
              <p className="importance__item-third-text">
                В&nbsp;других случаях выпускники вернулись в&nbsp;свои семьи, взяли
                ответственность и&nbsp;восстановили доверие.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceReabilitaion;
