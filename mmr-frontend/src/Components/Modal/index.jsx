import styles from "./styles.module.css";
import ReactDOM from "react-dom";

const Modal = ({ children, close }) => {
  const handleClose = (e) => {
    if (e.target.id === "modalBack") close();
  };

  return ReactDOM.createPortal(
    <div
      id="modalBack"
      className={styles.modalBackground}
      onClick={handleClose}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
