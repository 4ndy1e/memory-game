import { useState, useEffect } from "react";

function Pokemon({ name }) {
  const [pokemon, setPokemons] = useState(null);

  useEffect(() => {
    // fetch returns a response object
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((result) => {
        // then convert result into json
        return result.json();
      })
      .then((data) => {
        // log information
        console.log(data);
        // console.log(data.sprites.front_default);
        // console.log(data.forms[0].name);
        setPokemons(data);
      });
  }, [name]);

  return (
    <div>
      {pokemon && (
        <div className="p-3 border-2 flex flex-col w-fit">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.forms[0].name}
            className="w-50 h-50"
          />
          <p> {pokemon.forms[0].name} </p>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
