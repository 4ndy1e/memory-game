import "./App.css";
import Pokemon from "./components/pokemon";

function App() {
  const names = [
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
  ];

  return (
    <div>
      <div className="p-3">
        <h1> PokéMatch </h1>
        <div className="flex flex-wrap">
          {names.map((name) => (
            <Pokemon name={name} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
