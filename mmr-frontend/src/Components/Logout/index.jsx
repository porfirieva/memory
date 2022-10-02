import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setIsAdmin } from "../../Slices/adminSlice";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <Link to="/" onClick={() => dispatch(setIsAdmin(false))}>
      Выйти
    </Link>
  );
};

export default Logout;
