import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  async function loadPokemons() {
    setLoading(true);
    try {
      const { data } = await api.get("/pokemon?limit=1118");
      setPokemonList(data.results);
      setLoading(false);
    } catch (error) {
      toast.error("pokemons não encontrados");
      setLoading(false);
      setPokemonList(null);
    }
  }
  useEffect(() => {
    loadPokemons();
  }, []);

  function addFavorite(name) {
    let pokemonSelect = pokemonList.filter((pokemon) => pokemon.name === name);
    if (favoriteList.length < 12) {
      setFavoriteList([...favoriteList, pokemonSelect[0].name]);
    }
  }

  function removeFavorite(name) {
    let pokemonSelect = pokemonList.filter((pokemon) => pokemon.name === name);
    let newList = favoriteList.filter(
      (pokemon) => pokemon.name !== pokemonSelect.name
    );

    setFavoriteList(newList);
  }

  function searchPokemon(input) {
    if (input || input?.length > 0) {
      let pokemonSearch = pokemonList.filter((pokemon) =>
        pokemon.name.includes(input)
      );
      setPokemonList(pokemonSearch);
    } else {
      loadPokemons();
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        loading,
        pokemonList,
        addFavorite,
        removeFavorite,
        favoriteList,
        searchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
