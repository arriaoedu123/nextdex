import Image from "next/image";
import Button from "../components/Button";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id
          .toString()
          .padStart(3, "0")}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <p className={styles.name}>{pokemon.name}</p>
      <Button variant="redLinkButtonText" href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Button>
    </div>
  );
}
