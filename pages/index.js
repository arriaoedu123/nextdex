import Head from "next/head";
import Image from "next/image";

import Card from "./components/Card";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title}>
        <h2>Primeira geração de Pokémon ( 1 - 151 )</h2>
      </div>
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </section>
    </>
  );
}
