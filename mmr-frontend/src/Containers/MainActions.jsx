import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import Login from "../Components/Login";
import AddKnowledge from "./AddKnowledge";
import "./MainActions.scss";

const MainActions = () => {
  const [isSkip, setIsSkip] = useState(false);

  return (
    <div>
      {isSkip ? (
        <div className="buttons main__actions">
          <Login />
          <Link to="/register">Регистрация</Link>
          <AddKnowledge />
        </div>
      ) : (
        <div className="buttons">
          <Link to="/tutorial">
            <Btn content="Туториал" />
          </Link>
          <Link>
            <Btn
              fn={() => setIsSkip(!isSkip)}
              content="Пропустить"
              className="skip"
            ></Btn>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainActions;

