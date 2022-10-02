import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setKnowledge } from "../../../Slices/adminSlice";
import Modal from "..";

const AddKnowledgeModal = ({ setClose }) => {
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.theme.value;

    if (value.length < 1) {
      setError("Введите хотя бы одну букву...");
    } else {
      dispatch(setKnowledge(value));
      setClose();
      // navigate(`/knowledge#${id}`);
    }
  };

  return (
    <Modal setClose={setClose}>
      <div>
        <h3>Введите название темы</h3>
        <form onSubmit={handleSubmit}>
          <input name="theme" type="text" />
          {error && <div>{error}</div>}
          <button type="submit">окы</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddKnowledgeModal;
