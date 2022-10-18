import Btn from "../Components/Btn";
import MainPageHeader from "../Components/Headers/MainPageHeader";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import TutorialSteps from "../Components/TutorialSteps";

const Tutorial = () => {
  return (
    <Layout header={<MainPageHeader />}>
      <Link to="/">
        <Btn content="back" />
      </Link>
      <TutorialSteps />
    </Layout>
  );
};

export default Tutorial;
