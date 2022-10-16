import HeaderActions from "../../HeaderActions";
import Login from "../../Login";
import Logo from "../../Logo";
import "../header.scss";

const MainPageHeader = () => {
  return (
    <div className="header">
      <Logo />
      <HeaderActions />
      <Login />
    </div>
  );
};

export default MainPageHeader;

