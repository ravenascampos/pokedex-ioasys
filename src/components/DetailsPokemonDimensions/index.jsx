import React, { useEffect, useState } from "react";
import { Container } from "./DetailsPokemonDimensions.styles";
import weightImg from "../../assets/icons/weight.svg";
import heightImg from "../../assets/icons/height.svg";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const DetailsPokemonDimensions = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPokemonDetails(data);
    }
    loadPokemonsDetails();
  }, [id]);

  const weight = pokemonDetails.weight;
  const height = pokemonDetails.height;

  return (
    <Container>
      <div className="weight">
        <div className="weight-text">
          <img src={weightImg} alt="" />
          <p>{weight / 10} kg</p>
        </div>
        <p className="weight-title">Weight</p>
      </div>
      <div className="height">
        <div className="height-text">
          <img src={heightImg} alt="" />
          <p>{height / 10} m</p>
        </div>
        <p className="height-title">Height</p>
      </div>
      <div className="abilities">
        {pokemonDetails.abilities?.map((ability) => (
          <div className="abilities-text" key={ability.ability.name}>
            <p>{ability.ability.name}</p>
          </div>
        ))}
        <p className="abilities-title">Abilities</p>
      </div>
    </Container>
  );
};
