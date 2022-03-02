import { useEffect } from "react";
import { api } from "../../services/api";
import { useContext } from "react";
import { useState } from "react";
import { PokemonContext } from "../../context/usePokemon";
import { CardEmpty } from "../CardEmpty";
import { PokemonCard } from "../PokemonCard";
import { Container, List } from "./ListEmpty.styles";

export const ListEmpty = () => {
  const { favoriteList } = useContext(PokemonContext);
  const [listFilled, setListFilled] = useState([]);
  const [listEmpty, setListEmpty] = useState(Array(12));

  useEffect(() => {
    async function loadFavorites() {
      let filledList = await Promise.all(
        favoriteList.map(async (name) => {
          const { data } = await api.get(`/pokemon/${name}`);
          return <PokemonCard pokemon={data} />;
        })
      );
      setListFilled(filledList);
      let rest = 12 - filledList.length;
      let emptyList = Array(rest).map((_) => {
        return <CardEmpty />;
      });
      setListEmpty(emptyList);
      console.log(emptyList);
    }
    loadFavorites();
  }, [favoriteList]);

  return (
    <Container>
      <List>{listFilled}</List>
      <List>{listEmpty}</List>
    </Container>
  );
};
