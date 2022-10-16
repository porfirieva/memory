import style from "./Input.module.scss";
import cn from "classnames";

export const Input = ({ content, placeholder, fn, isValid, name }) => {
  return (
    <label className={style.container}>
      <span className={style.inputName}>{content}</span>
      <input
        className={cn(style.input, { [style.notValid]: !isValid })}
        placeholder={placeholder}
        onChange={fn}
        name={name}
      ></input>
    </label>
  );
};

