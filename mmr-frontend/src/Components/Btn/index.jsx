import "./btn.scss";

const Btn = ({ circle, isValid, content = "", fn }) => {
  return (
    <button
      className={[
        "btn",
        circle ? "circle" : "",
        isValid ? "active" : "disabled",
      ].join(" ")}
      onClick={fn}
    >
      {content}
    </button>
  );
};

export default Btn;

