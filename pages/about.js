import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Esse projeto foi feito com a{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokéAPI
        </a>{" "}
        para aprender a usar Next.js. Caso queira ver o código desse projeto,{" "}
        <a
          href="https://github.com/arriaoedu123/nextdex"
          target="_blank"
          rel="noreferrer"
        >
          clique aqui
        </a>
        .
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      />
    </div>
  );
}
