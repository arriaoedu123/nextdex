import Modal from "../components/Modal";

import styles from "../styles/ModalStats.module.css";

export default function ModalStats({ pokemon, isOpen, setIsOpen }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalTitle={pokemon.name}>
      <div className={styles.modalContent}>
        <div className={styles.statsContent}>
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
