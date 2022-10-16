import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn";
import Login from "../Components/Login";
import AddKnowledge from "./AddKnowledge";

const MainActions = () => {
  const [isSkip, setIsSkip] = useState(false);

  return (
    <div>
      {isSkip ? (
        <div className="buttons">
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
          <Btn fn={() => setIsSkip(!isSkip)} content="Пропустить"></Btn>
        </div>
      )}
    </div>
  );
};

export default MainActions;
