import "./btn";

const Btn = ({ radius, outside, border, content }) => {
  return (
    <button
      className={
        (radius ? "btn-circle" : "btn-square",
        outside ? "btn-outside" : "",
        border ? "btn-border" : "")
      }
    >
      {content}
    </button>
  );
};

export default Btn;

