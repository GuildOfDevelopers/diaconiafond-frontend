import React from "react";
import style from "./GetHelp.module.scss";
import Checkbox from "./Checkbox";
import GetHelpBtn from "../../Buttons/GetHelp/GetHelp";
import { useForm } from "react-hook-form";
import { fetchData } from "../../../hooks/fetchData";
import InputMask from "react-input-mask";

const Form = ({ openPopup }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

  const formRef = React.useRef(null);

  const [inputValue, setInputValue] = React.useState("");
  const [isShow, setIsShow] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(false);

  const onChangeInput = (e) => {
    const currentValue = e.target.value;
    const lengthValue = currentValue.replace(/[^0-9]/g, "").length;
    setInputValue(currentValue);
    setIsShow(lengthValue < 11);
  };

  const onSubmit = () => {
    fetchData(formRef.current);
    openPopup();
    reset();
  };

  const isReadyToSubmit = (e) => {
    setIsShow(!inputValue);

    if (isShow || !isCheck) e.preventDefault();
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
            className={errors?.lastName ? [style.error] : ""}
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
            className={errors?.firstName ? [style.error] : ""}
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
          <span className={style.visually_hidden}>E-mail</span>
          <input
            className={errors?.Email ? [style.error] : ""}
            type="text"
            placeholder="E-mail"
            {...register("Email", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Введите корректный адрес почты",
              },
            })}
          />
          <div className={style.inputError}>
            {errors?.Email && <p>{errors?.Email?.message || "Error"}</p>}
          </div>
        </label>
        <label>
          <span className={style.visually_hidden}>Год рождения</span>
          <input
            className={errors?.date ? [style.error] : ""}
            type="number"
            style={{ width: "230px" }}
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
            className={isShow ? [style.error] : ""}
            onChange={onChangeInput}
            value={inputValue}
            type="tel"
            name="telephone"
            placeholder="Телефон"
            mask="+7 (999)-999-99-99"
          />
          <div className={style.inputError}>
            {isShow && <p>Введите корректный номер телефона</p>}
          </div>
        </label>
        <Checkbox
          toggle={setIsCheck}
          label="Согласие на&nbsp;обработку персональных данных"
          url="https://diaconiafond.ru/personal-data-usage-terms/"
        />
        <GetHelpBtn
          fn={isReadyToSubmit}
          label="Получить помощь"
          disabled={!isValid}
          isValid={isValid && !isShow && isCheck}
        />
      </form>
    </div>
  );
};

export default Form;
