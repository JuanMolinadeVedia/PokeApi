import React, { useEffect, useContext } from "react";
import "./PokemonId.css";
import { PokeContext } from "../../Context/PokeContext";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { imgUrl, typeColors } from "../Constant/Constants";
import { StatBar } from "../StatBar/StatBar";
function Pokemon() {
  const { pokemonDetail, getPokemon } = useContext(PokeContext);
  let { pokemonDataId } = useParams();

  useEffect(() => {
    const fetchPokemonData = async () => {
      await getPokemon(pokemonDataId);
    };
    fetchPokemonData();
  }, [getPokemon, pokemonDataId]);

  const getColor = (type) => typeColors[type] || "#cfe5e6";

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="left-info">
          <div className="name">
            <h2>Name</h2>
            <p>{pokemonDetail ? pokemonDetail.name : "Loading..."}</p>
          </div>
          <div className="id">
            <p>{pokemonDetail ? pokemonDetail.id : "Loading..."}</p>
          </div>
          <div className="weight">
            <h2>Weight</h2>
            <p>{pokemonDetail ? pokemonDetail.weight : "Loading..."}cm</p>
          </div>
          <div className="height">
            <h2>Height</h2>
            <p>{pokemonDetail ? pokemonDetail.height : "Loading..."}kg</p>
          </div>
          <div className="types">
            <ul>
              {pokemonDetail &&
                pokemonDetail.types.map((type) => (
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
            src={imgUrl(pokemonDetail)}
            alt={pokemonDetail ? pokemonDetail.name : ""}
          />
        </div>
        <div className="right-info">
          <StatBar
            label="HP"
            value={pokemonDetail ? pokemonDetail.stats[0].base_stat : null}
          />
          <StatBar
            label="Attack"
            value={pokemonDetail ? pokemonDetail.stats[1].base_stat : null}
          />
          <StatBar
            label="Defense"
            value={pokemonDetail ? pokemonDetail.stats[2].base_stat : null}
          />
          <StatBar
            label="Sp Attack"
            value={pokemonDetail ? pokemonDetail.stats[3].base_stat : null}
          />
          <StatBar
            label="Sp Defense"
            value={pokemonDetail ? pokemonDetail.stats[4].base_stat : null}
          />
          <StatBar
            label="Speed"
            value={pokemonDetail ? pokemonDetail.stats[5].base_stat : null}
          />
        </div>
      </div>
    </>
  );
}

export { Pokemon };
