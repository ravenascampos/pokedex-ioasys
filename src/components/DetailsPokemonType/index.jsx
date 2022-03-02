import React from "react";
import { Container } from "./DetailsPokemonType.styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Colors } from "../../styles/TypesTheme";

export const DetailsPokemonType = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPokemonDetails(data);
      console.log(data);
    }
    loadPokemonsDetails();
  }, [id]);

  return (
    <div>
      <Container>
        {pokemonDetails.types?.map((type) => (
          <div
            className="type"
            style={{ backgroundColor: Colors[type.type.name] }}
            key={type.type.name}
          >
            <span>{type.type.name}</span>
          </div>
        ))}
      </Container>
    </div>
  );
};
