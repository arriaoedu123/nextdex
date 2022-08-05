import Card from "../components/Card";
import { useState } from "react";

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
  const [data, setData] = useState(pokemons);
  const [title, setTitle] = useState("Primeira geração de Pokémon ( 1 - 151 )");

  const fetchData = async (offset, limit, title) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    const newData = await res.json();

    newData.results.forEach((item, index) => {
      item.id = index + (offset + 1);
    });

    return setData(newData.results), setTitle(title);
  };

  const handleClick = (event, a, b, c) => {
    event.preventDefault();
    fetchData(a, b, c);
  };

  return (
    <>
      <div className={styles.title}>
        <div className={styles.generationsButtons}>
          <button
            onClick={(e) =>
              handleClick(e, 0, 151, "Primeira geração de Pokémon ( 1 - 151 )")
            }
          >
            1ª Geração
          </button>
          <button
            onClick={(e) =>
              handleClick(
                e,
                151,
                100,
                "Segunda geração de Pokémon ( 152 - 251 )"
              )
            }
          >
            2ª Geração
          </button>
          <button
            onClick={(e) =>
              handleClick(
                e,
                251,
                135,
                "Terceira geração de Pokémon ( 252 - 386 )"
              )
            }
          >
            3ª Geração
          </button>
          <button
            onClick={(e) =>
              handleClick(
                e,
                386,
                107,
                "Quarta geração de Pokémon ( 387 - 493 )"
              )
            }
          >
            4ª Geração
          </button>
          <button
            onClick={(e) =>
              handleClick(
                e,
                493,
                156,
                "Quinta geração de Pokémon ( 494 - 649 )"
              )
            }
          >
            5ª Geração
          </button>
          <button
            onClick={(e) =>
              handleClick(e, 649, 72, "Sexta geração de Pokémon ( 650 - 721 )")
            }
          >
            6ª Geração
          </button>
          <button
            onClick={(e) =>
              handleClick(e, 721, 88, "Sétima geração de Pokémon ( 722 - 809 )")
            }
          >
            7ª Geração
          </button>
          <button
            onClick={(e) =>
              handleClick(e, 809, 96, "Oitava geração de Pokémon ( 810 - 905 )")
            }
          >
            8ª Geração
          </button>
        </div>
        <h2>{title}</h2>
      </div>
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          {data.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </section>
    </>
  );
}
