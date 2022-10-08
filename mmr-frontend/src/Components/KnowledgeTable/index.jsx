import KnowledgeElement from "../KnowledgeElement";

const KnowledgeTable = ({ knowledges }) => {
  return (
    <div style={{ padding: "15px", backgroundColor: "steelblue" }}>
      Таблица знаний
      <ul>
        {knowledges.map((data) => (
          <KnowledgeElement key={data.id} {...data} />
        ))}
      </ul>
    </div>
  );
};

export default KnowledgeTable;
