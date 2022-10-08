import MainPageHeader from "../Components/Headers/MainPageHeader";
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
