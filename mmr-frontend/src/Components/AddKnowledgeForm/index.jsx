const AddKnowledgeForm = ({ error, handleSubmit }) => {
  return (
    <div>
      <h3>Введите название темы</h3>
      <form onSubmit={handleSubmit}>
        <input name="theme" type="text" />
        {error && <div>{error}</div>}
        <button type="submit">окы</button>
      </form>
    </div>
  );
};

export default AddKnowledgeForm;
