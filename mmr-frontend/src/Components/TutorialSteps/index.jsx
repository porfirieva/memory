import styles from "./style.module.css";
import Btn from "../Btn";

const TutorialSteps = () => {
  return (
    <div className={styles.container}>
      <Btn content="01">
        <span>STEP</span>
      </Btn>
      <Btn content="02">
        <span>STEP</span>
      </Btn>
      <Btn content="03">
        <span>STEP</span>
      </Btn>
      <Btn content="04">
        <span>STEP</span>
      </Btn>
      <Btn content="05">
        <span>STEP</span>
      </Btn>
    </div>
  );
};

export default TutorialSteps;

