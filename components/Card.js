import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
          .toString()
          .padStart(3, "0")}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <p className={styles.name}>{pokemon.name}</p>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.details}>Detalhes</a>
      </Link>
    </div>
  );
}
