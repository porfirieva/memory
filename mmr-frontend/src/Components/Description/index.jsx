import "./description.scss";

const Description = ({ title, text }) => {
  return (
    <div className="descr">
      <h2 className="descr__title">{title}</h2>
      <p className="descr__text">{text}</p>
    </div>
  );
};

export default Description;

