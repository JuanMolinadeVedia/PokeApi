import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${pokemonData.id}`);
  };

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemon.url]);

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    pokemonData ? pokemonData.id : ""
  }.png`;

  const typeColors = {
    grass: "#86c152",
    fire: "#ed9338",
    water: "#8498e4",
    bug: "#5ecf5e",
    poison: "#cc8ae8",
    electric: "#fad737",
    ground: "#c0954f",
    fairy: "#ffdede",
    fighting: "#a75543",
    psychic: "#ff6090",
    rock: "#b6a136",
    ghost: "#735797",
    ice: "#96d9d6",
    dragon: "#6f35fc",
    steel: "#b7b9d0",
    flying: "#a1bbec",
  };

  const getColor = (type) => typeColors[type] || "#cfe5e6";

  const backCard = {
    backgroundColor: getColor(
      pokemonData ? pokemonData.types[0].type.name : ""
    ),
  };

  return (
    <div className="card" style={backCard} onClick={handleClick}>
      <p>{pokemonData ? `ID: ${pokemonData.id}` : "Loading..."}</p>
      <img src={imgUrl} alt={pokemon.name} />
      <h2>{pokemonData ? pokemonData.name : ""}</h2>
      <div className="type">
        <h3>Type:</h3>
        <ul>
          {pokemonData &&
            pokemonData.types.map((type) => (
              <li
                key={type.slot}
                style={{ backgroundColor: getColor(type.type.name) }}
              >
                {type.type.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export { Card };
