import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { imgUrl, typeColors } from "../Constant/Constants";

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

  const backCard = {
    backgroundColor:
      typeColors[pokemonData ? pokemonData.types[0].type.name : ""],
  };

  return (
    <div className="card" style={backCard} onClick={handleClick}>
      <p>{pokemonData ? `ID: ${pokemonData.id}` : "Loading..."}</p>
      <img src={imgUrl(pokemonData)} alt={pokemon.name} />
      <h2>{pokemonData ? pokemonData.name : ""}</h2>
      <div className="type">
        <h3>Type:</h3>
        <ul>
          {pokemonData &&
            pokemonData.types.map((type) => (
              <li
                key={type.slot}
                style={{ backgroundColor: typeColors[type.type.name] }}
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
