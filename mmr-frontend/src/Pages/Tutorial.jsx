import MainPageHeader from "../Components/Header/MainPageHeader";
import Layout from "../Components/Layout";
import TutorialSteps from "../Components/TutorialSteps";

const Tutorial = () => {
  return (
    <Layout header={<MainPageHeader />}>
      <TutorialSteps />
    </Layout>
  );
};

export default Tutorial;
