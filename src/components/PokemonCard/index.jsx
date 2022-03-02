import { useState, useEffect } from "react";
import { Content, Title } from "./PokemonCard.styles";
import { api } from "../../services/api";
import { Colors } from "../../styles/TypesTheme";

export const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon/${pokemon.name}`);
      setPokemonDetails(data);
    }
    loadPokemonsDetails();
  }, [pokemon.name]);

  const details = {
    id: pokemonDetails.id,
    name: pokemonDetails.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`,
  };

  const type = [pokemonDetails.types?.map((type) => type.type.name)[0]];

  return (
    <>
      <Content style={{ borderColor: Colors[type] }}>
        <span style={{ color: Colors[type] }}>#00{details.id}</span>
        <img src={details.image} alt={details.name} />
        <Title style={{ backgroundColor: Colors[type] }}>
          <h1>{details.name}</h1>
        </Title>
      </Content>
    </>
  );
};
