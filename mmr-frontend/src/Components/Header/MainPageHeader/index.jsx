import BurgerMenu from "../../BurgerMenu";
import Logo from "../../Logo";
import "../header.scss";

const MainPageHeader = () => {
  return (
    <div className="header">
      <Logo />
      <BurgerMenu />
    </div>
  );
};

export default MainPageHeader;

