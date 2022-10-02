import { useSelector } from "react-redux";
import AdminPageHeader from "../Components/Header/AdminPageHeader";
import { selectIsAdmin, selectKnowledges } from "../Slices/adminSlice";
import Layout from "../Components/Layout";
import MainPageHeader from "../Components/Header/MainPageHeader";
import { useLocation } from "react-router-dom";

const KnowledgePage = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const id = useLocation().pathname.split("/").at(-1);
  const knowledge = useSelector(selectKnowledges).find(
    (item) => item.id === id
  );
  console.log(knowledge);

  return (
    <Layout header={isAdmin ? <AdminPageHeader /> : <MainPageHeader />}>
      <h1>{knowledge.theme}</h1>
    </Layout>
  );
};

export default KnowledgePage;
