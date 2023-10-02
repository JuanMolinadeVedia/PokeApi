import React, { useEffect, useState } from "react";
import { Navbar } from "./../Navbar/Navbar";
import { Browse } from "./../Browse/Browse";
import { Card } from "./../Card/Card";
import { imgUrl, typeColors } from "../Constant/Constants";

function Kokemones() {
  const [inputValue, setInputValue] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => {
        const result = data.results;
        const pokemonDataList = result.map((pokemon) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
        setPokemonList(pokemonDataList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (value) => setInputValue(value);

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <Browse inputValue={inputValue} handleInputChange={handleInputChange} />
        <div className="card-container">
          {filteredPokemonList.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemon={pokemon}
              imgUrl={imgUrl}
              typeColors={typeColors}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export { Kokemones };
