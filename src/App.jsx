import "./App.css";
import Pokemon from "./components/pokemon";

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

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

  console.log(names);
  shuffleArray(names);
  console.log(names);

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
