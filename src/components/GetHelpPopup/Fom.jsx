import React, { useState } from "react";
import style from "./GetHelpPopup.module.scss";
import Checkbox from "./Checkbox";
import GetHelpBtn from "./GetHelpBtn/GetHelpBtn";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

  const formRef = React.useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  // const isCheckBoxOrRadio = (type) => ["checkbox", "radio"].includes(type);
  const onChangeInput = (e) => {
    const currentValue = e.target.value;
    const lengthValue = currentValue.replace(/[^0-9]/g, "").length;
    setInputValue(currentValue);
    setIsShow(lengthValue < 11);
  };

  const onSubmit = (data) => {
    // e.preventDefault();

    // const data = {};

    // for (let field of formRef.current) {
    //   const { name } = field;

    //   if (name) {
    //     const { type, checked, value } = field;
    //     data[name] = isCheckBoxOrRadio(type) ? checked : value;
    //   }
    // }

    //тут запрос на сервер
    // console.log(data);
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className={style.form}>
      <h2 className={style.title}>Получить помощь</h2>
      <p className={style.body}>
        Помощь могут получить мужчины в&nbsp;возрасте
        от&nbsp;18&nbsp;до&nbsp;55&nbsp;лет, а&nbsp;также их&nbsp;близкие.
      </p>
      <span className={style.desc}>
        Пожалуйста, оставьте ваши контактные данные, наши координаторы свяжутся
        с&nbsp;вами.
      </span>
      <form
        className={style.form}
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <span className={style.visually_hidden}>Фамилия</span>
          <input
            type="text"
            placeholder="Фамилия"
            {...register("lastName", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[a-zA-Zа-яА-ЯёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/,
                message: "Имя не может содержать специальные символы",
              },
            })}
          />
          <div className={style.inputError}>
            {errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}
          </div>
        </label>
        <label>
          <span className={style.visually_hidden}>Имя</span>
          <input
            type="text"
            placeholder="Имя"
            {...register("firstName", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[a-zA-Zа-яА-ЯёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/,
                message: "Имя не может содержать специальные символы",
              },
            })}
          />
          <div className={style.inputError}>
            {errors?.firstName && (
              <p>{errors?.firstName?.message || "Error"}</p>
            )}
          </div>
        </label>
        <label>
          <span className={style.visually_hidden}>Отчество</span>
          <input
            type="text"
            placeholder="Отчество"
            {...register("patronymic", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[a-zA-Zа-яА-ЯёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/,
                message: "Имя не может содержать специальные символы",
              },
            })}
          />
          <div className={style.inputError}>
            {errors?.patronymic && (
              <p>{errors?.patronymic?.message || "Error"}</p>
            )}
          </div>
        </label>
        <label>
          <span className={style.visually_hidden}>Год рождения</span>
          <input
            type="number"
            min="1900"
            max="2099"
            step="1"
            placeholder="Год рождения"
            {...register("date", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 4,
                message: "Введите корректный год рождения",
              },
              maxLength: {
                valeu: 4,
                message: "Введите корректный год рождения",
              },
            })}
          />
          <div className={style.inputError}>
            {errors?.date && <p>{errors?.date?.message || "Error"}</p>}
          </div>
        </label>
        <label>
          <span className={style.visually_hidden}>Телефон</span>
          <InputMask
            onChange={onChangeInput}
            value={inputValue}
            type="tel"
            placeholder="Телефон"
            mask="+7(999)-999-99-99"
          />
          <div className={style.inputError}>
            {isShow && <p>Введите корректный номер телефона</p>}
          </div>
        </label>
        <Checkbox
          label="Согласие на&nbsp;обработку персональных данных"
          url=""
        />
        <GetHelpBtn onClick={onSubmit} disabled={!isValid} />
      </form>
    </div>
  );
};

export default Form;
