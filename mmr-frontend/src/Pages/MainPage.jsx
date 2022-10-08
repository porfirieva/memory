import React from "react";
import MainActions from "../Components/MainActions";
import Description from "../Components/Description";
import MainPageHeader from "../Components/Header/MainPageHeader";
import Layout from "../Components/Layout";

const Main = () => {
  return (
    <Layout header={<MainPageHeader />}>
      <h1>Main Page</h1>
      <Description
        title="Привет, давай учиться вместе!"
        text="Здесь можно закрепить знания."
      />
      <MainActions />
    </Layout>
  );
};

export default Main;

