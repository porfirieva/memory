import { useState } from "react";
import Modal from "../Modal";
import AddKnowledgeModal from "../Modal/AddKnowledgeModal";

const AddKnowledge = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>
        Добавить знание
      </button>
      {modalIsOpen && (
        <AddKnowledgeModal setClose={() => setModalIsOpen(false)} />
      )}
    </>
  );
};

export default AddKnowledge;
