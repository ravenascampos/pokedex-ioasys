import favoriteHeart from "../../assets/icons/favorite.svg";
import { Container } from "./MyFavorites.styles";

export const MyFavorites = () => {
  return (
    <Container>
      <img src={favoriteHeart} alt="botão de favoritos" />
      <span>Meus favoritos</span>
    </Container>
  );
};
