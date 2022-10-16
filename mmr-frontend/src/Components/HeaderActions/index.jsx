import { Link } from "react-router-dom";

const HeaderActions = ({ isAdmin }) => {
  return (
    <div>
      {isAdmin ? (
        <>
          <Link to="/register">Регистрация</Link>
          <Link to="/tutorial">Туториал</Link>
        </>
      ) : (
        <>
          <Link to="/tutorial">Туториал</Link>
          <Link to="/settings">Настройки</Link>
        </>
      )}
    </div>
  );
};

export default HeaderActions;
