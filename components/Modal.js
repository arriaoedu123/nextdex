import styles from "../styles/Modal.module.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  closeModal,
  setIsOpen,
  isOpen,
  modalTitle,
  transparent,
  children,
  ...props
}) {
  useEffect(() => {
    !props.scroll &&
      (document.body.style.overflow = isOpen ? "hidden" : "auto");
    return () => {
      !props.scroll && (document.body.style.overflow = "auto");
    };
  }, [isOpen]);

  const handleClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return !isOpen
    ? null
    : createPortal(
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <div
            className={
              transparent ? styles.modalContentTransparent : styles.modalContent
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button onClick={handleClose} className={styles.close}>
              +
            </button>
            {!modalTitle ? null : (
              <div className={styles.modalTitle}>
                <h2>{modalTitle}</h2>
              </div>
            )}
            {children}
          </div>
        </div>,
        document.body
      );
}
