import HeaderActions from "../../HeaderActions";
import Login from "../../Login";
import Logo from "../../Logo";
import styles from "./styles.module.css";

const MainPageHeader = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <HeaderActions />
      <Login />
    </div>
  );
};

export default MainPageHeader;
