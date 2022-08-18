import styles from "../styles/Pokeball.module.css";

export default function Pokeball(props) {
  return (
    <div className={props.className}>
      <div className={styles.pokeBall}>
        <span className={styles.middleLine}></span>
        <div className={styles.middleBall}>
          <span className={styles.middleBallButton}></span>
        </div>
        <span className={styles.bottomBackground}></span>
      </div>
    </div>
  );
}
