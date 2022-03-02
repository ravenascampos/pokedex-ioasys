import React from "react";
import { Container } from "./DetailsPokemonName.styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Colors } from "../../styles/TypesTheme";
import { useContext } from "react";
import { PokemonContext } from "../../context/usePokemon";
import favoriteHeartImg from "../../assets/icons/favorite.svg";
import notFavoriteHeartImg from "../../assets/icons/notFavorite.svg";

export const DetailsPokemonName = () => {
  const { favoriteList, addFavorite, removeFavorite } =
    useContext(PokemonContext);

  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPokemonDetails(data);
      let list = favoriteList;
      console.log(list);
      let isInside = list.includes(data.name);
      console.log(isInside);
      setIsFavorite(isInside);
    }
    loadPokemonsDetails();
  }, [id, favoriteList]);

  const type = [pokemonDetails.types?.map((type) => type.type.name)[0]];

  return (
    <Container>
      <button
        onClick={
          isFavorite
            ? () => removeFavorite(pokemonDetails.name)
            : () => addFavorite(pokemonDetails.name)
        }
      >
        <img src={isFavorite ? favoriteHeartImg : notFavoriteHeartImg} alt="" />
      </button>

      <h1 style={{ color: Colors[type] }}>{id}</h1>
      <span style={{ color: Colors[type] }}>#00{pokemonDetails.id}</span>
    </Container>
  );
};
