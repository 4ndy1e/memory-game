import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Pokemon({ name }) {
  const [pokemon, setPokemons] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // fetch returns a response object
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal })
      .then((result) => {
        // then convert result into json
        return result.json();
      })
      .then((data) => {
        console.log(data);
        setPokemons(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // abort the request whenever the name changes or unmount
    return () => {
      controller.abort();
    };
  }, [name]);

  return (
    <div>
      {pokemon && (
        <div
          className="p-3 border-2 rounded-2xl flex flex-col w-fit hover:bg-red-300 hover:cursor-pointer m-4"
          onClick={() => {
            console.log({ name });
          }}
        >
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

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Pokemon;
