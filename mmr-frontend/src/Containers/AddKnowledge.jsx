import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddKnowledgeForm from "../Components/AddKnowledgeForm";
import Modal from "../Components/Modal";
import { selectIsAdmin, setKnowledge } from "../Slices/adminSlice";

const AddKnowledge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const isAdmin = useSelector(selectIsAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //TODO добавление знания в админ слайс если залогинился

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.theme.value;

    if (value.length < 1) {
      setError("Введите хотя бы одну букву...");
    } else {
      dispatch(setKnowledge(value));
      navigate(isAdmin ? `/admin/knowledge/${value}` : `/knowledge/${value}`);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Добавить знание</button>
      {isOpen && (
        <Modal close={() => setIsOpen(!isOpen)}>
          <AddKnowledgeForm error={error} handleSubmit={handleSubmit} />
        </Modal>
      )}
    </div>
  );
};

export default AddKnowledge;
