import empty from "../../assets/images/empty.png";
import { Content } from "./CardEmpty.styles";

export const CardEmpty = () => {
  return (
    <Content>
      <img src={empty} alt="cartão vazio" />
    </Content>
  );
};
