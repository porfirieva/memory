import { useState } from "react";
import { Link } from "react-router-dom";
import AddKnowledge from "../AddKnowledge";
import Login from "../Login";
import "./styles.css";

const Actions = () => {
  const [isSkip, setIsSkip] = useState(false);

  return (
    <div>
      {isSkip ? (
        <>
          <div className="icon">
            <Login />
          </div>

          <div className="icon">
            <Link to="/register">Регистрация</Link>
          </div>

          <div className="icon">
            <AddKnowledge />
          </div>
        </>
      ) : (
        <>
          <div className="icon">
            <Link to="/tutorial">Туториал</Link>
          </div>

          <button className="icon" onClick={() => setIsSkip(!isSkip)}>
            Пропустить
          </button>
        </>
      )}
    </div>
  );
};

export default Actions;

