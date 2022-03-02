import { DetailsPokemonBaseStats } from "../../components/DetailsPokemonBaseStats";
import { Navbar } from "../../components/Navbar";
import { DetailsPokemonImg } from "../../components/DetailsPokemonImg";
import { Container, Name } from "./Details.styles";
import { DetailsPokemonName } from "../../components/DetailsPokemonName";
import { DetailsPokemonType } from "../../components/DetailsPokemonType";
import { DetailsPokemonDimensions } from "../../components/DetailsPokemonDimensions";
import { DetailsPokemonDescription } from "../../components/DetailsPokemonDescription";
import { BorderHeaderDetails } from "../../components/BorderHeaderDetails";

export const Details = () => {
  return (
    <>
      <>
        <BorderHeaderDetails />
        <Navbar />
        <Container>
          <DetailsPokemonImg />
          <div>
            <Name>
              <DetailsPokemonName />
            </Name>
            <DetailsPokemonType className="type" />
            <DetailsPokemonDimensions className="dimensions" />
            <DetailsPokemonDescription className="description" />
            <DetailsPokemonBaseStats className="stats" />
          </div>
        </Container>
      </>
    </>
  );
};
/*

*/
