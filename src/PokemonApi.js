import { useEffect, useState } from "react";

function PokemonApi() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results));
  }, []);

  return (
    <div>
      {pokemon.length > 0 && pokemon.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
    </div>
  );
}

export default PokemonApi;
