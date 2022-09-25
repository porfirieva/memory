import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>LOGO</h1>
      <Link to="/admin">Вход</Link>
    </div>
  );
};

export default Header;
