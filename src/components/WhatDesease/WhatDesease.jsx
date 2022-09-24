import imageLector from "../../images/disease-lector.jpg";
import imageLection from "../../images/disease-lection.jpg";

const WhatDesease = () => {
  return (
    <section className="desease">
      <div className="disease__wrapper">
        <div className="disease__article">
          <h2 className="disease__title">
            Так что же это? Болезнь? Или вредная привычка?
          </h2>
          <p className="disease__subtitle">
            Медицина начала признавать алкоголизм заболеванием тогда, когда
            врачи сделали вывод: никто не начинает пить для того, чтобы стать
            алкоголиком.
          </p>
          <p className="disease__key-point">
            Заболевание является результатом происходящих в организме процессов,
            которые больной не способен контролировать.
          </p>
          <p className="disease__description">
            Всемирной организацией здравоохранения алкоголизм и наркомания
            признаны заболеванием и входят в классификацию болезней (МКБ-10).
          </p>
          <p className="disease__description">
            В нашем обществе принято молчать о проблемах, связанных с алкоголем
            и тем более – с наркотиками.{" "}
            <span className="disease__text-highlite">
              Близким алкоголика всегда одиноко:
            </span>{" "}
            они не видят возможным с кем-то обсудить эти проблемы и не хотят
            лишний раз обращать на себя внимание. В голове у них{" "}
            <span className="disease__text-highlite">иллюзия</span>, что они
            могут что-то исправить сами. Никто не понимает, что это болезнь, что
            виноватых, по сути, нет. Лечением зависимости должны заниматься
            специалисты.{" "}
            <span className="disease__text-highlite">
              Этим людям и их семьям нужна комплексная помощь.
            </span>
          </p>

          <img
            className="disease__image-one"
            src={imageLector}
            alt="Мужчина читает лекцию"
          />
          <img
            className="disease__image-two"
            src={imageLection}
            alt="Групповая терапия для мужчин"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatDesease;
