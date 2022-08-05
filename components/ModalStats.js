import styles from "../styles/ModalStats.module.css";
import { useEffect } from "react";

export default function ModalStats({ pokemon, closeModal, isOpen, ...props }) {
  useEffect(() => {
    !props.scroll &&
      (document.body.style.overflow = isOpen ? "hidden" : "auto");
    return () => {
      !props.scroll && (document.body.style.overflow = "auto");
    };
  }, [isOpen]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={closeModal} className={styles.close}>
          +
        </button>
        <div className={styles.statsContent}>
          <h2>{pokemon.name}</h2>
          <div>
            <p>HP:</p>
            <p>{pokemon.stats[0].base_stat}</p>
          </div>
          <div>
            <p>Attack:</p>
            <p>{pokemon.stats[1].base_stat}</p>
          </div>
          <div>
            <p>Defense:</p>
            <p>{pokemon.stats[2].base_stat}</p>
          </div>
          <div>
            <p>Sp. Attack:</p>
            <p>{pokemon.stats[3].base_stat}</p>
          </div>
          <div>
            <p>Sp. Defense:</p>
            <p>{pokemon.stats[4].base_stat}</p>
          </div>
          <div>
            <p>Speed:</p>
            <p>{pokemon.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
