const imgUrl = (pokemonData) =>
  pokemonData
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
    : "";

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

export { imgUrl, typeColors };