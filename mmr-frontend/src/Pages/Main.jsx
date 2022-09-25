import React from "react";
import Description from "../Components/Description";
import Form from "../Components/Form";
import Header from "../Components/Header";
import Layout from "../Components/Layout";

const Main = () => {
  return (
    <Layout header={<Header />}>
      <Description
        title="Привет, давай учиться вместе!"
        text="Здесь можно закрепить знания."
      />
      <Form />
    </Layout>
  );
};

export default Main;
