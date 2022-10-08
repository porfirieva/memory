import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Components/Login";
import AddKnowledge from "./AddKnowledge";

const MainActions = () => {
  const [isSkip, setIsSkip] = useState(false);

  return (
    <div>
      {isSkip ? (
        <>
          <Login />
          <Link to="/register">Регистрация</Link>
          <AddKnowledge />
        </>
      ) : (
        <>
          <Link to="/tutorial">Туториал</Link>
          <button className="icon" onClick={() => setIsSkip(!isSkip)}>
            Пропустить
          </button>
        </>
      )}
    </div>
  );
};

export default MainActions;
