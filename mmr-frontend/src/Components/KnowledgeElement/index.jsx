import { Link } from "react-router-dom";

const KnowledgeElement = ({ id, theme }) => {
  return (
    <li>
      <Link to={`/knowledge/${id}`}>{theme}</Link>
    </li>
  );
};

export default KnowledgeElement;
