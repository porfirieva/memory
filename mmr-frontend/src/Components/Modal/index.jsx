import styles from "./styles.module.css";
import ReactDOM from "react-dom";

const Modal = ({ children, setClose }) => {
  const handleClick = (e) => {
    if (e.target.id === "modalBack") setClose();
  };

  return ReactDOM.createPortal(
    <div
      id="modalBack"
      className={styles.modalBackground}
      onClick={handleClick}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={setClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
