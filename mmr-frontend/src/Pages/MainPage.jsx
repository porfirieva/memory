import React from "react";
import Description from "../Components/Description";
import MainPageHeader from "../Components/Headers/MainPageHeader";
import Layout from "../Components/Layout";
import MainActions from "../Containers/MainActions";

const Main = () => {
  return (
    <Layout header={<MainPageHeader />}>
      <Description
        title="Привет, давай учиться вместе!"
        text="Здесь можно закрепить знания."
      />
      <MainActions />
    </Layout>
  );
};

export default Main;
