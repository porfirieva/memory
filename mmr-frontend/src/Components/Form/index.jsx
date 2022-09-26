import { useState } from "react";
import Associations from "./Associations";
import Difinition from "./Difinition";
import KeyWords from "./KeyWords";
import Theme from "./Theme";

const Form = () => {
  const [step, setStep] = useState(1);

  return (
    <form
      style={{ display: "flex", flexDirection: "column", maxWidth: "600px" }}
    >
      {step === 1 && <Theme />}
      {step === 2 && <KeyWords />}
      {step === 3 && <Difinition />}
      {step === 4 && <Associations />}

      <button type="button" onClick={() => step < 4 && setStep(step + 1)}>
        Вперед
      </button>
      <button type="button" onClick={() => step > 1 && setStep(step - 1)}>
        Назад
      </button>
    </form>
  );
};

export default Form;
