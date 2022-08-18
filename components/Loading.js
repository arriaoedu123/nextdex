import Pokeball from "./Pokeball";

import styles from "../styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <Pokeball className={styles.loading} />
    </div>
  );
}
