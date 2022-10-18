import { useState } from "react";
import Btn from "../../Btn";
// import HeaderActions from "../../HeaderActions";
import Login from "../../Login";
import Logo from "../../Logo";
import style from "../header.module.scss";
import CloseBtn from "../../CloseBtn";
import { Link } from "react-router-dom";

const MainPageHeader = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={style.header}>
      <Logo />
      {isShow ? (
        <div className={style.header__actions}>
          <p>Регистрация</p>
          <Login />
          <Link to="/tutorial">Туториал</Link>
          <Link to="/">На главную</Link>
          <CloseBtn fn={() => setIsShow(!isShow)} />
        </div>
      ) : (
        <Btn content="More" fn={() => setIsShow(!isShow)} circle />
      )}
    </div>
  );
};

export default MainPageHeader;

