import React, { createContext, useCallback, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [browse, setBrowse] = useState(null);

  const getAllPokemons = useCallback(async () => {
    const api = "https://pokeapi.co/api/v2/pokemon/?limit=11";
    const response = await fetch(api);
    const data = await response.json();
    setPokemonData(data.results);
  }, []);

  const handleChangeInput = (e) => {
    console.log(e.target.value);
    setBrowse(e.target.value);
  };

  const getPokemon = useCallback(async (id) => {
    const nameApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(nameApi);
    const data = await response.json();
    setPokemonDetail(data);
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokemonData,
        pokemonDetail,
        getPokemon,
        getAllPokemons,
        handleChangeInput,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
