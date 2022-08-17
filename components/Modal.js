import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "../styles/Modal.module.css";

export default function Modal({
  setIsOpen,
  isOpen,
  modalTitle,
  transparent,
  children,
}) {
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return !isOpen
    ? null
    : createPortal(
        <div
          className={styles.modal}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
        >
          <div
            className={
              transparent
                ? styles.modalContainerTransparent
                : styles.modalContainer
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.modalHeader}>
              {!modalTitle ? null : (
                <h2>
                  {modalTitle.charAt(0).toUpperCase() + modalTitle.slice(1)}
                </h2>
              )}
              <div
                className={styles.closeContainer}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.close}>+</span>
              </div>
            </div>
            <div className={styles.modalContent}>{children}</div>
          </div>
        </div>,
        document.body
      );
}
