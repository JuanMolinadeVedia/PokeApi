import "./App.css";
import { Kokemones } from "./Components/Kokemones/Kokemones";
import { Pokemon } from "./Components/PokemonId/PokemonId";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Kokemones />} />
          <Route path="pokemon/:pokemonDataId" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
