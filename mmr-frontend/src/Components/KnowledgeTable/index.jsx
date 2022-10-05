import { Link } from "react-router-dom";

const KnowledgeTable = ({ knowledges }) => {
  const knowledgesElements = knowledges.map(({ theme, id }) => (
    <li key={id}>
      <Link to={`/knowledge/${id}`}>{theme}</Link>
    </li>
  ));

  return (
    <div style={{ padding: "15px", backgroundColor: "steelblue" }}>
      Таблица знаний
      <ul>{knowledgesElements}</ul>
    </div>
  );
};

export default KnowledgeTable;
