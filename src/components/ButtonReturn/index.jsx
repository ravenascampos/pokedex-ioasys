import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container } from "./ButtonReturn.styles";

export const ButtonReturn = () => {
  return (
    <Link to="/" className="link">
      <Container>
        <BsArrowLeft className="icon-return" />
        <span>Voltar</span>
      </Container>
    </Link>
  );
};
