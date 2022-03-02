import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./DetailsPokemonDescription.styles";

export const DetailsPokemonDescription = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon-species/${id}`);
      let description = data.flavor_text_entries[1].flavor_text;
      setPokemonDetails(description);
    }
    loadPokemonsDetails();
  }, [id]);

  return (
    <Container>
      <p>{pokemonDetails}</p>
    </Container>
  );
};
