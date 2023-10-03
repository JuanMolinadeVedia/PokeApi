import React, { useEffect, useState, useContext } from "react";
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
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  const backCard = {
    backgroundColor:
      typeColors[pokemonData ? pokemonData.types[0].type.name : ""],
  };

  return (
    <div className="card" style={backCard} onClick={handleClick}>
      <p>{pokemonData ? `# ${pokemonData.id}` : "Loading..."}</p>
      <img src={imgUrl(pokemonData)} alt={pokemon.name} />
      <h2>{pokemonData ? pokemonData.name : ""}</h2>
      <div className="type">
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
