import Button from "../components/Button";
import Pokeball from "../components/Pokeball";

import "@fontsource/coda-caption";
import styles from "../styles/Error.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.fourOfour}>
        <h2>4</h2>
        <Pokeball className={styles.pokeball} />
        <h2>4</h2>
      </div>
      <div className={styles.description}>
        <h2>Oops!</h2>
        <p>Parece que não há Pokémon aqui para capturar</p>
      </div>
      <Button variant="redLinkButton" href="/">
        Voltar para página principal
      </Button>
    </div>
  );
}
