import HeaderActions from "../../HeaderActions";
import Logo from "../../Logo";
import Logout from "../../Logout";
import styles from "./styles.module.css";

const AdminPageHeader = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <HeaderActions isAdmin />
      <Logout />
    </div>
  );
};

export default AdminPageHeader;
