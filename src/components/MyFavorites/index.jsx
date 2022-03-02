import { FiHeart } from "react-icons/fi";
import { Container } from "./MyFavorites.styles";

export const MyFavorites = () => {
  return (
    <Container>
      <FiHeart className="heart-icon" />
      <span>Meus favoritos</span>
    </Container>
  );
};
