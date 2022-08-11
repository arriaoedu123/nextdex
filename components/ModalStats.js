import styles from "../styles/ModalStats.module.css";
import { useEffect } from "react";

import Modal from "../components/Modal";

export default function ModalStats({ pokemon, closeModal, isOpen, setIsOpen }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={styles.modalContent}>
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
    </Modal>
  );
}
