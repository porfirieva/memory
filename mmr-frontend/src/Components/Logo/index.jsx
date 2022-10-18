import { Link } from "react-router-dom";
import style from "./style.module.css";
const Logo = () => {
  return (
    <Link to="/">
      <h1 className={style.btn_container}>
        <div className={style.log}>MMR</div>
      </h1>
    </Link>
  );
};

export default Logo;

