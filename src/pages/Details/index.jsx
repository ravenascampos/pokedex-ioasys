import { DetailsPokemonBaseStats } from "../../components/DetailsPokemonBaseStats";
import { Navbar } from "../../components/Navbar";
import { DetailsPokemonImg } from "../../components/DetailsPokemonImg";
import { Container, Name, DetailsPoke, Content } from "./Details.styles";
import { DetailsPokemonName } from "../../components/DetailsPokemonName";
import { DetailsPokemonType } from "../../components/DetailsPokemonType";
import { DetailsPokemonDimensions } from "../../components/DetailsPokemonDimensions";
import { DetailsPokemonDescription } from "../../components/DetailsPokemonDescription";
import { BorderHeaderDetails } from "../../components/BorderHeaderDetails";

export const Details = () => {
  return (
    <Container>
      <div className="header">
        <BorderHeaderDetails className="border-header" />
        <Navbar className="navbar" />
      </div>

      <Content>
        <div className="img">
          <DetailsPokemonImg />
          <div className="name">
            <DetailsPokemonName className="title" />
          </div>
        </div>
        <DetailsPoke>
          <DetailsPokemonType className="type" />
          <DetailsPokemonDimensions className="dimensions" />
          <DetailsPokemonDescription className="description" />
          <DetailsPokemonBaseStats className="stats" />
        </DetailsPoke>
      </Content>
    </Container>
  );
};
/*

*/
