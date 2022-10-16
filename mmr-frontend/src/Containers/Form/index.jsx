import React from "react";
import { Input } from "../../Components/Input";
import classNames from "classnames";

const NAME_REGEXP_TEST =
  /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
const TELEPHONE_REGEXP_TEST =
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const TELPHONE_REGEXP_TEST =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const testRegexp = (regExp, value) => regExp.test(value);

export const Form = () => {
  const onChangeName = (e) => {
    e.preventDefault();
    // const isValidName = testRegexp(NAME_REGEXP_TEST, value);
    // console.log(isValidName);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = [];
    data.push(
      e.target.name.value,
      e.target.eMail.value,
      e.target.password.value
    );
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit} classNames={"form"}>
      <Input content="Имя" fn={onChangeName} name={"name"} />
      <Input content="E-mail" fn={onChangeName} name={"eMail"} />
      <Input content="Password" fn={onChangeName} name={"password"} />
      <button>Отправить</button>
    </form>
  );
};

