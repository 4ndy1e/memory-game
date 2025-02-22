import "./App.css";
import Pokemon from "./components/pokemon";
import { useState } from "react";

// creates a new array with shuffled values from original array
const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [names, setNames] = useState([
    "lugia",
    "pikachu",
    "squirtle",
    "gengar",
    "charizard",
    "snorlax",
    "jigglypuff",
    "eevee",
    "mew",
    "bulbasaur",
  ]);
  const [score, setScore] = useState(0);
  const [pokemonSet, setPokemonSet] = useState(new Set());

  function checkUserPick(pokemonName) {
    if (pokemonSet.has(pokemonName)) {
      console.log("LOST");
    } else {
      // create new set with added pokemon
      let newPokemonSet = new Set(pokemonSet);
      newPokemonSet.add(pokemonName);

      setPokemonSet(newPokemonSet);
      console.log("added " + pokemonName);
    }
  }

  return (
    <div>
      <div className="p-3">
        <h1> PokéMatch </h1>
        <h2 className="text-left"> Score: {score} </h2>
        <div className="flex flex-wrap">
          {names.map((name) => (
            <Pokemon
              name={name}
              key={name}
              onClick={() => {
                console.log("clicked");
                setScore((score) => score + 1);
                checkUserPick(name);
              }}
            />
          ))}
        </div>
        <button
          className="bg-red-500 border-2 p-4 rounded-2xl hover:cursor-pointer"
          onClick={() => setNames(shuffleArray(names))}
        >
          randomize
        </button>
      </div>
    </div>
  );
}

export default App;
