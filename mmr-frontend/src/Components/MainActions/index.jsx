import { useState } from "react";
import { Link } from "react-router-dom";
import AddKnowledge from "../AddKnowledge";
import Btn from "../Btn";
import Login from "../Login";
import "./mainActions.scss";

const Actions = () => {
  const [isSkip, setIsSkip] = useState(false);

  return (
    <div>
      {isSkip ? (
        <div className="main__actions">
          <Login />
          <Link to="/register">Регистрация</Link>
          <AddKnowledge />
        </div>
      ) : (
        <div className="buttons">
          <Link to="/tutorial">
            <Btn content="Туториал" />
          </Link>
          {/* может тоже обернуть в ссылку? */}
          <Btn
            fn={() => setIsSkip(!isSkip)}
            content="Пропустить"
            className="skip"
          ></Btn>
        </div>
      )}
    </div>
  );
};

export default Actions;

