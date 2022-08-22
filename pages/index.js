import { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
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
  const [data, setData] = useState(pokemons);
  const [title, setTitle] = useState("Primeira geração de Pokémon ( 1 - 151 )");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const gen = [
    "Primeira geração de Pokémon ( 1 - 151 )",
    "Segunda geração de Pokémon ( 152 - 251 )",
    "Terceira geração de Pokémon ( 252 - 386 )",
    "Quarta geração de Pokémon ( 387 - 493 )",
    "Quinta geração de Pokémon ( 494 - 649 )",
    "Sexta geração de Pokémon ( 650 - 721 )",
    "Sétima geração de Pokémon ( 722 - 809 )",
    "Oitava geração de Pokémon ( 810 - 905 )",
  ];

  const fetchData = async (offset, limit, settitle) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    const newData = await res.json();

    newData.results.forEach((item, index) => {
      item.id = index + (offset + 1);
    });

    return (
      setIsOpen(false),
      setTitle(settitle),
      setSearch(""),
      setData(newData.results)
    );
  };

  const handleClick = (event, offset, limit, settitle) => {
    event.preventDefault();
    fetchData(offset, limit, settitle);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const filteredData =
    search.length > 0
      ? data.filter((item) => item.name.includes(search.toLowerCase()))
      : [];

  return (
    <>
      <div className={styles.title}>
        <div className={styles.inputContainer}>
          <Input
            name="search"
            text="Pesquisar"
            value={search}
            setValue={setSearch}
          />
          <Button variant="blackButtonText" onClick={handleOpen}>
            Mudar geração
          </Button>
        </div>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalTitle={"Escolha a geração"}
        >
          <div className={styles.generationsButtons}>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 0, 151, gen[0])}
            >
              1ª Geração
            </Button>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 151, 100, gen[1])}
            >
              2ª Geração
            </Button>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 251, 135, gen[2])}
            >
              3ª Geração
            </Button>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 386, 107, gen[3])}
            >
              4ª Geração
            </Button>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 493, 156, gen[4])}
            >
              5ª Geração
            </Button>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 649, 72, gen[5])}
            >
              6ª Geração
            </Button>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 721, 88, gen[6])}
            >
              7ª Geração
            </Button>
            <Button
              variant="redButton"
              onClick={(e) => handleClick(e, 809, 96, gen[7])}
            >
              8ª Geração
            </Button>
          </div>
        </Modal>
        <h2>{title}</h2>
      </div>
      <div className={styles.content}>
        {search.length > 0 ? (
          <div className={styles.contentContainer}>
            {filteredData.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        ) : (
          <div className={styles.contentContainer}>
            {data.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
