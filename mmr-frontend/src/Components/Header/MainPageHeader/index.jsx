import BurgerMenu from "../../BurgerMenu";
import Logo from "../../Logo";
import styles from "../styles.module.css";

const MainPageHeader = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <BurgerMenu />
    </div>
  );
};

export default MainPageHeader;

