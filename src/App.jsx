import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // fetch returns a response object
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((result) => {
        // then convert result into json
        return result.json();
      })
      .then((data) => {
        // log information
        console.log(data);
        console.log(data.results);
        setPokemons(data.results);
      });
  }, []);

  return (
    <div>
      <div className="p-3">
        <h1> PokéMatch </h1>
        {pokemons.map((pokemons) => (
          <p key={pokemons.name}> {pokemons.name} </p>
        ))}
      </div>
    </div>
  );
}

export default App;
