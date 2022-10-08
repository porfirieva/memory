import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MainPageHeader from "../Components/Headers/MainPageHeader";
import Layout from "../Components/Layout";
import { setIsAdmin } from "../Slices/adminSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <Layout header={<MainPageHeader />}>
      <h1>Main Page</h1>
      <div>
        login page
        <div>вводим логин......</div>
        <div>вводим пароль......</div>
        <Link to="/admin" onClick={() => dispatch(setIsAdmin())}>
          Вход
        </Link>
      </div>
    </Layout>
  );
};

export default LoginPage;
