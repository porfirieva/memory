import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Logout from "../../Logout";

const AdminBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className={styles.burgerMenu} onClick={() => setIsOpen(!isOpen)}>
      бургер меню
      {isOpen && (
        <>
          <Logout />
          <Link to="/tutorial">Туториал</Link>
          <Link to="/settings">Настройки</Link>
        </>
      )}
    </div>
  );
};

export default AdminBurgerMenu;
