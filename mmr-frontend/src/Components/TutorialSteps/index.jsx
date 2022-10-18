import styles from "./style.module.css";
import Btn from "../Btn";

const TutorialSteps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.step__container}>
        <div className={styles.step__descr}>
          <p className={styles.title}>First step</p>
          <p>Here is about step</p>
        </div>
        <Btn content="01 STEP"></Btn>
      </div>
      <div className={styles.step__container}>
        <Btn content="02 STEP"></Btn>
        <div className={styles.step__descr}>
          <p className={styles.title}>Second step</p>
          <p>Here is about step</p>
        </div>
      </div>
      <div className={styles.step__container}>
        <div className={styles.step__descr}>
          <p className={styles.title}>Third step</p>
          <p>Here is about step</p>
        </div>
        <Btn content="03 STEP"></Btn>
      </div>
      <div className={styles.step__container}>
        <Btn content="04 STEP"></Btn>
        <div className={styles.step__descr}>
          <p className={styles.title}>Fourth step</p>
          <p>Here is about step</p>
        </div>
      </div>
      <div className={styles.step__container}>
        <div className={styles.step__descr}>
          <p className={styles.title}>Fifth step</p>
          <p>Here is about step</p>
        </div>
        <Btn content="05 STEP"></Btn>
      </div>
    </div>
  );
};

export default TutorialSteps;

