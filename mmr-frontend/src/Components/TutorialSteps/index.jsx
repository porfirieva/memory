import styles from "./styles.module.css";

const TutorialSteps = () => {
  return (
    <div className={styles.container}>
      <button>
        01<span>STEP</span>
      </button>
      <button>
        02<span>STEP</span>
      </button>
      <button>
        03<span>STEP</span>
      </button>
      <button>
        04<span>STEP</span>
      </button>
      <button>
        05<span>STEP</span>
      </button>
    </div>
  );
};

export default TutorialSteps;
