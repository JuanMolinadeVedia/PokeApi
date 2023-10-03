import "./App.css";
import { Kokemones } from "./Components/Kokemones/Kokemones";
import { Pokemon } from "./Components/PokemonId/PokemonId";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PokeProvider } from "./Context/PokeContext";

function App() {
  return (
    <PokeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Kokemones />} />
          <Route path="pokemon/:pokemonDataId" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </PokeProvider>
  );
}

export default App;
