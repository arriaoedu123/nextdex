import Image from "next/image";
import Link from "next/link";
import Modal from "../../components/Modal";
import ModalStats from "../../components/ModalStats";
import Loading from "../../components/Loading";
import Button from "../../components/Button";

import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/Pokemon.module.css";

export async function getStaticPaths() {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {
        pokemonId: (index + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
}

export default function Pokemon({ pokemon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className={styles.contentContainer}>
      <Button variant="redLinkButton" className={styles.back} href="/">
        Voltar
      </Button>
      <h2 className={styles.name}>{pokemon.name}</h2>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id
          .toString()
          .padStart(3, "0")}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
        className={styles.image}
        onClick={() => setIsImageOpen(true)}
      />
      <Modal isOpen={isImageOpen} setIsOpen={setIsImageOpen} transparent={true}>
        <div className={styles.imageModal}>
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
              .toString()
              .padStart(3, "0")}.png`}
            width={500}
            height={500}
            alt={pokemon.name}
          />
        </div>
      </Modal>
      <div>
        <h2>ID</h2>
        <p>#{pokemon.id}</p>
      </div>
      <div className={styles.pokeInfos}>
        <div>
          <h2>Tipo</h2>
          <div className={styles.typesContainer}>
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles[`type_${item.type.name}`]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.statsContainer}>
          <h2>Status</h2>
          <Button variant="blackButtonText" onClick={handleClick}>
            Mostrar
          </Button>
        </div>
      </div>
      <ModalStats pokemon={pokemon} setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={styles.dataContainer}>
        <div className={styles.height}>
          <h2>Altura</h2>
          <p>
            {pokemon.height * 10 >= 100
              ? `${pokemon.height / 10} m`
              : `${pokemon.height * 10} cm`}
          </p>
        </div>
        <div className={styles.weight}>
          <h2>Peso</h2>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
      <div>
        <Button
          variant="linkButton"
          href={`https://www.pokemon.com/br/pokedex/${pokemon.id}`}
          target="_blank"
        >
          Saber mais
        </Button>
      </div>
    </div>
  );
}
