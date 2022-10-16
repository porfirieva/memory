import React from "react";
import { useSelector } from "react-redux";
import AdminPageHeader from "../Components/Headers/AdminPageHeader";
import KnowledgeTable from "../Components/KnowledgeTable";
import Layout from "../Components/Layout";
import RepeatCalendar from "../Components/RepeatCalendar";
import AdminControls from "../Containers/AddKnowledge";
import { selectKnowledges } from "../Slices/adminSlice";

const AdminPage = () => {
  const knowledges = useSelector(selectKnowledges);

  return (
    <Layout header={<AdminPageHeader />}>
      <h1>Admin Page</h1>
      <KnowledgeTable knowledges={knowledges} />
      <RepeatCalendar />
      <AdminControls />
    </Layout>
  );
};

export default AdminPage;
