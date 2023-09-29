import React, { useEffect, useState } from "react";
import "./PokemonId.css";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    pokemonData ? pokemonData.id : ""
  }.png`;
  let { pokemonDataId } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonDataId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-info">
          <div className="name">
            <h2>Name</h2>
            <h2>{pokemonData ? pokemonData.name : "Loading..."}</h2>
          </div>
          <div className="id">
            <p>Id</p>
            <p>{pokemonData ? pokemonData.id : "Loading..."}</p>
          </div>
          <div className="weight">
            <p>Weight</p>
            <p>{pokemonData ? pokemonData.weight : "Loading..."}</p>
          </div>
          <div className="types">
            <ul>
              {pokemonData &&
                pokemonData.types.map((type) => (
                  <li
                    key={type.slot}
                    style={{
                      boxShadow: `1px 1px 15px ${getColor(type.type.name)}`,
                      backgroundColor: getColor(type.type.name),
                    }}
                  >
                    {type.type.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="center-info">
          <img src={imgUrl} alt={pokemonData ? pokemonData.name : ""} />
        </div>
        <div className="right-info">
          <div className="stat-bar">
            <p>
              HP: {pokemonData ? pokemonData.stats[0].base_stat : "Loading..."}
            </p>
            <div className="progress-bar">
              <div
                className="progress-hp"
                style={{
                  width: `${
                    pokemonData
                      ? (pokemonData.stats[0].base_stat / 255) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="stat-bar">
            <p>
              Attack:{" "}
              {pokemonData ? pokemonData.stats[1].base_stat : "Loading..."}
            </p>
            <div className="progress-bar">
              <div
                className="progress-attack"
                style={{
                  width: `${
                    pokemonData
                      ? (pokemonData.stats[1].base_stat / 255) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="stat-bar">
            <p>
              Defense:{" "}
              {pokemonData ? pokemonData.stats[2].base_stat : "Loading..."}
            </p>

            <div className="progress-bar">
              <div
                className="progress-defense"
                style={{
                  width: `${
                    pokemonData
                      ? (pokemonData.stats[2].base_stat / 255) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="stat-bar">
            <p>
              Sp. Attack:{" "}
              {pokemonData ? pokemonData.stats[3].base_stat : "Loading..."}
            </p>

            <div className="progress-bar">
              <div
                className="progress-special-attack"
                style={{
                  width: `${
                    pokemonData
                      ? (pokemonData.stats[3].base_stat / 255) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="stat-bar">
            <p>
              Sp. Defense:{" "}
              {pokemonData ? pokemonData.stats[4].base_stat : "Loading..."}
            </p>

            <div className="progress-bar">
              <div
                className="progress-special-defense"
                style={{
                  width: `${
                    pokemonData
                      ? (pokemonData.stats[4].base_stat / 255) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="stat-bar">
            <p>
              Speed:{" "}
              {pokemonData ? pokemonData.stats[5].base_stat : "Loading..."}
            </p>

            <div className="progress-bar">
              <div
                className="progress-speed"
                style={{
                  width: `${
                    pokemonData
                      ? (pokemonData.stats[5].base_stat / 255) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Pokemon };
