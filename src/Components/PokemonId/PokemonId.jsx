import React, { useEffect, useState } from "react";
import "./PokemonId.css";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { imgUrl, typeColors } from "../Constant/Constants";
import { StatBar } from "../StatBar/StatBar";
function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
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

  const getColor = (type) => typeColors[type] || "#cfe5e6";

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-info">
          <div className="name">
            <h2>Name</h2>
            <p>{pokemonData ? pokemonData.name : "Loading..."}</p>
          </div>
          <div className="id">
            <h2>Id</h2>
            <p>{pokemonData ? pokemonData.id : "Loading..."}</p>
          </div>
          <div className="weight">
            <h2>Weight</h2>
            <p>{pokemonData ? pokemonData.weight : "Loading..."}cm</p>
          </div>
          <div className="height">
            <h2>Height</h2>
            <p>{pokemonData ? pokemonData.height : "Loading..."}kg</p>
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
          <img
            src={imgUrl(pokemonData)}
            alt={pokemonData ? pokemonData.name : ""}
          />
        </div>
        <div className="right-info">
          <StatBar
            label="HP"
            value={pokemonData ? pokemonData.stats[0].base_stat : null}
          />
          <StatBar
            label="Attack"
            value={pokemonData ? pokemonData.stats[1].base_stat : null}
          />
          <StatBar
            label="Defense"
            value={pokemonData ? pokemonData.stats[2].base_stat : null}
          />
          <StatBar
            label="Sp Attack"
            value={pokemonData ? pokemonData.stats[3].base_stat : null}
          />
          <StatBar
            label="Sp Defense"
            value={pokemonData ? pokemonData.stats[4].base_stat : null}
          />
          <StatBar
            label="Speed"
            value={pokemonData ? pokemonData.stats[5].base_stat : null}
          />
        </div>
      </div>
    </>
  );
}

export { Pokemon };
