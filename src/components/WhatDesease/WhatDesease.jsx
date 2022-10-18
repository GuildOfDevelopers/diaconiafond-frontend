import imageGroup from "../../images/disease-group.jpg";
import imageBoard from "../../images/disease-board.jpg";


const WhatDesease = () => {
  return (
    <section className="desease">
      <div className="disease__wrapper">
        <div className="disease__article">
          <img
            className="disease__image-one"
            src={imageGroup}
            alt="Мужчина читает лекцию"
          />

          <h2 className="disease__title">
            Так&nbsp;что&nbsp;же&nbsp;это?&nbsp;Болезнь?
            Или&nbsp;вредная&nbsp;привычка?
          </h2>
          <p className="disease__subtitle">
            Медицина начала признавать алкоголизм заболеванием тогда, когда
            врачи сделали вывод: никто не&nbsp;начинает пить для того, чтобы стать
            алкоголиком.
          </p>
          <p className="disease__key-point">
            Заболевание является результатом происходящих в&nbsp;организме процессов,
            которые больной не&nbsp;способен контролировать.
          </p>
          <p className="disease__description">
            Всемирной организацией здравоохранения алкоголизм и&nbsp;наркомания
            признаны заболеванием и&nbsp;входят в&nbsp;классификацию болезней (МКБ-10).
          </p>
          <p className="disease__description">
            В&nbsp;нашем обществе принято молчать о&nbsp;проблемах, связанных с&nbsp;алкоголем
            и&nbsp;тем более&nbsp;&mdash; с&nbsp;наркотиками.{" "}
            <span className="disease__text-highlite">
              Близким алкоголика всегда одиноко:
            </span>{" "}
            они не&nbsp;видят возможным с&nbsp;кем-то обсудить эти проблемы и&nbsp;не&nbsp;хотят
            лишний раз обращать на&nbsp;себя внимание. В&nbsp;голове у&nbsp;них{" "}
            <span className="disease__text-highlite">иллюзия</span>, что они
            могут что-то исправить сами. Никто не&nbsp;понимает, что это болезнь, что
            виноватых, по&nbsp;сути, нет. Лечением зависимости должны заниматься
            специалисты.{" "}
            <span className="disease__text-highlite">
              Этим людям и&nbsp;их&nbsp;семьям нужна комплексная помощь.
            </span>
          </p>

          <img
            className="disease__image-two"
            src={imageBoard}
            alt="Групповая терапия для мужчин"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatDesease;
