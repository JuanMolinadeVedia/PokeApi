import React, { useEffect, useState, useContext } from "react";
import { PokeContext } from "../../Context/PokeContext";
import { Navbar } from "./../Navbar/Navbar";
import { Browse } from "./../Browse/Browse";
import { Card } from "./../Card/Card";
import { imgUrl, typeColors } from "../Constant/Constants";

function Kokemones() {
  const [inputValue, setInputValue] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const { getAllPokemons, pokemonData } = useContext(PokeContext);

  useEffect(() => {
    const fetchData = async () => {
      await getAllPokemons();
      if (pokemonData) {
        setPokemonList(pokemonData);
      }
    };

    fetchData();
  }, [getAllPokemons, pokemonData]);
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
