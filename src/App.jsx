import "./App.css";
import Pokemon from "./components/pokemon";

function App() {
  return (
    <div>
      <div className="p-3">
        <h1> PokéMatch </h1>
        <div className="flex max-[1000px] flex-wrap">
          <Pokemon name="lugia" />
          <Pokemon name="pikachu" />
          <Pokemon name="squirtle" />
          <Pokemon name="gengar" />
          <Pokemon name="charizard" />
          <Pokemon name="snorlax" />
          <Pokemon name="jigglypuff" />
          <Pokemon name="bulbasaur" />
          <Pokemon name="eevee" />
          <Pokemon name="mew" />
        </div>
        {/* {pokemons.map((pokemons) => (
          <p key={pokemons.name}> {pokemons.name} </p>
        ))} */}
      </div>
    </div>
  );
}

export default App;
