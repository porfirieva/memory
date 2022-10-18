import "./btn.scss";

const Btn = ({ circle, isValid, content = "", fn, className }) => {
  return (
    <button
      className={[
        "btn",
        circle ? "circle" : "",
        isValid ? "active" : "disabled",
        className,
      ].join(" ")}
      onClick={fn}
    >
      {content}
    </button>
  );
};

export default Btn;

