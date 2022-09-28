import React from "react";
import style from "./GetHelp.module.scss";

const GetHelp = ({ fn, label = "", isValid, fullWidth = false }) => {
  
  return (
    <button
      className={[
        style.btn,
        fullWidth ? style.btnFull : "",
        isValid !== undefined ? (isValid ? style.active : style.disabled) : "",
      ].join(" ")}
      onClick={fn}
    >
      {label}
    </button>
  );
};

export default GetHelp;
