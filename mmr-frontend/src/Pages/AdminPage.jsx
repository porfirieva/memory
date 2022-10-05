import React from "react";
import { useSelector } from "react-redux";
import AdminControls from "../Components/AdminControls";
import AdminPageHeader from "../Components/Header/AdminPageHeader";
import KnowledgeTable from "../Components/KnowledgeTable";
import Layout from "../Components/Layout";
import RepeatCalendar from "../Components/RepeatCalendar";
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
