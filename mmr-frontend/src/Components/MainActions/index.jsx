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
          <div className="block-container">
            <div className="btn-back btn-back-3"></div>
            <div className="btn-front">
              <svg className="frame">
                <rect rx="32" stroke="url(#gradient-half)" />
              </svg>
              <div className="icon">
                <Login />
              </div>
            </div>
          </div>

          <div className="block-container">
            <div className="btn-back btn-back-1"></div>
            <div className="btn-front">
              <svg className="frame">
                <rect rx="32" stroke="url(#gradient-half)" />
              </svg>
              <div className="icon">
                <Link to="/register">Регистрация</Link>
              </div>
            </div>
          </div>

          <div className="block-container">
            <div className="btn-back btn-back-2"></div>
            <div className="btn-front">
              <svg className="frame">
                <rect rx="32" stroke="url(#gradient-half)" />
              </svg>
              <div className="icon">
                <AddKnowledge />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="block-container">
            <div className="btn-back btn-back-1"></div>
            <div className="btn-front">
              <svg className="frame">
                <rect rx="32" stroke="url(#gradient-half)" />
              </svg>
              <div className="icon">
                <Link to="/tutorial">Туториал</Link>
              </div>
            </div>
          </div>
          <div className="block-container">
            <div className="btn-back btn-back-2"></div>
            <div className="btn-front">
              <svg className="frame">
                <rect rx="32" stroke="url(#gradient-half)" />
              </svg>
              <button className="icon" onClick={() => setIsSkip(!isSkip)}>
                Пропустить
              </button>
            </div>
          </div>
        </>
      )}

      <svg style={{ visibility: "hidden", width: 0, height: 0 }}>
        <defs>
          <linearGradient
            id="gradient-full"
            x1="0%"
            y1="0%"
            x2="120%"
            y2="120%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff00" />
          </linearGradient>
          <linearGradient
            id="gradient-half"
            x1="-50%"
            y1="-50%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Actions;
