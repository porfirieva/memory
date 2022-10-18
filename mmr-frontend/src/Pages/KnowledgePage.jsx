import { useSelector } from "react-redux";
import AdminPageHeader from "../Components/Headers/AdminPageHeader";
import { selectIsAdmin, selectKnowledges } from "../Slices/adminSlice";
import Layout from "../Components/Layout";
import MainPageHeader from "../Components/Headers/MainPageHeader";
import { useLocation } from "react-router-dom";
import KnowledgeCart from "../Components/KnowledgeCart";

const KnowledgePage = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const id = useLocation().pathname.split("/").at(-1);
  const knowledge = useSelector(selectKnowledges).find(
    (item) => item.id === id
  );

  return (
    <Layout header={isAdmin ? <AdminPageHeader /> : <MainPageHeader />}>
      <KnowledgeCart knowledge={knowledge} />
    </Layout>
  );
};

export default KnowledgePage;
