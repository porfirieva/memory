import "./btn.scss";
import classNames from "classnames";

const Btn = ({ circle, isValid, content = "", fn }) => {
  return (
    <button classNames={("btn", { active: isValid }, { circle: circle })}>
      {content}
    </button>
  );
};

export default Btn;

