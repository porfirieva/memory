import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import styles from "./styles.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className={styles.burgerMenu} onClick={() => setIsOpen(!isOpen)}>
      бургер меню
      {isOpen && (
        <>
          <Login />
          <Link to="/register">Регистрация</Link>
          <Link to="/tutorial">Туториал</Link>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
