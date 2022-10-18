import React, { useEffect, useState } from "react";
import { Input } from "../../Components/Input";

const NAME_REGEXP_TEST =
  /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
const EMAIL_REGEXP_TEST =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const PASSWORD_REGEXP_TEST =
  /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/; // like name

const testRegexp = (regExp, value) => regExp.test(value);

const onSubmit = (e) => {
  e.preventDefault();
  const data = [];
  data.push(e.target.name.value, e.target.eMail.value, e.target.password.value);
  console.log(data);
};

export const Form = () => {
  const [isError, setIsError] = React.useState(false);

  const onChangeInput = (e) => {
    const value = e.target.value;
    let regexpTest =
      e.target.name === "name"
        ? NAME_REGEXP_TEST
        : e.target.name === "eMail"
        ? EMAIL_REGEXP_TEST
        : PASSWORD_REGEXP_TEST;
    let isValid = testRegexp(regexpTest, value);
  };

  return (
    <form onSubmit={onSubmit} classNames={"form"}>
      <Input content="Имя" fn={onChangeInput} name={"name"} />
      <Input content="E-mail" fn={onChangeInput} name={"eMail"} />
      <Input content="Password" fn={onChangeInput} name={"password"} />
      <button>Отправить</button>
    </form>
  );
};

