import React from "react";
import style from "./GetHelp.module.scss";
import classnames from "classnames";

const GetHelp = ({ fn, label, isValid }) => {
  const btnClass = classnames(
    style.btn,
    {
      [style.disabled]: isValid === false,
    },
    {
      [style.active]: isValid === true,
    }
  );

  return (
    <button className={btnClass} onClick={fn}>
      {label}
    </button>
  );
};

export default GetHelp;
