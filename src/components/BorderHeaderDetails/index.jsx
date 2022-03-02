import { Border } from "./BorderHeaderDetails.styles";
import { Colors } from "../../styles/TypesTheme";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const BorderHeaderDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPokemonDetails(data);
    }
    loadPokemonsDetails();
  }, [id]);
  const type = [pokemonDetails.types?.map((type) => type.type.name)[0]];

  return <Border style={{ backgroundColor: Colors[type] }} />;
};
