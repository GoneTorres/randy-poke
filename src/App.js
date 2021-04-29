import "./App.css";
import PokemonFile from "./components/PokemonFile";

function App() {
  const pokemonData = [
    {
      id: "e1",
      name: "Slowpoke",
      type1: "Water",
      type2: "Psychic",
      description: "",
    },
    {
      id: "e2",
      name: "Oddish",
      type1: "Grass",
      type2: "Poison",
      description: "",
    },
    {
      id: "e3",
      name: "Charmander",
      type1: "Fire",
      type2: null,
      description: "",
    },
  ];
  const number = Math.trunc(Math.random() * pokemonData.length);
  console.log(number);
  return (
    <div>
      <PokemonFile name={pokemonData[number].name} type1={pokemonData[number].type1} type2={pokemonData[number].type2}></PokemonFile>
    </div>
  );
}

export default App;
