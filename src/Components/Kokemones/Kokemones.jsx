import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "./../Navbar/Navbar";
import { Browse } from "./../Browse/Browse";
import { Card } from "./../Card/Card";

function Kokemones() {
  const [inputValue, setInputValue] = useState("");
  // State variables
  const [pokemonList, setPokemonList] = useState([]);

  // Fetching data from API on component mount
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

  // Handling input change
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // Filtering the pokemon list based on input value
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <>
      <Navbar />
      <div className="container">
        <Browse inputValue={inputValue} handleInputChange={handleInputChange} />

        <div className="card-container">
          {filteredPokemonList.map((pokemon, index) => (
            <Card key={pokemon.name} pokemon={pokemon} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
export { Kokemones };
