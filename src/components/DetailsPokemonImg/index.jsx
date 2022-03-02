import { Container, Content } from "./DetailsPokemonImg.styles";
import { ButtonReturn } from "../ButtonReturn";
import pokeball from "../../assets/icons/Pokeball.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Colors } from "../../styles/TypesTheme";

export const DetailsPokemonImg = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function loadPokemonsDetails() {
      const { data } = await api.get(`/pokemon/${id}`);
      setPokemonDetails(data);
    }
    loadPokemonsDetails();
  }, [id]);

  const detailImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`;
  const type = [pokemonDetails.types?.map((type) => type.type.name)[0]];

  return (
    <Container>
      <Content style={{ backgroundColor: Colors[type] }}>
        <div className="button-return">
          <ButtonReturn />
          <span className="text">ABOUT</span>
        </div>
        <div className="images">
          <img className="pokeball" src={pokeball} alt="" />
          <img className="pokemon" src={detailImg} alt={pokemonDetails.name} />
        </div>
      </Content>
    </Container>
  );
};
