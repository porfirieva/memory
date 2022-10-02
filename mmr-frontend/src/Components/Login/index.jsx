import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setIsAdmin } from "../../Slices/adminSlice";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <Link to="/login" onClick={() => dispatch(setIsAdmin(true))}>
      Войти
    </Link>
  );
};

export default Login;
