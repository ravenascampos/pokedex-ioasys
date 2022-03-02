import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../context/usePokemon";
import { PokemonCard } from "../PokemonCard";
import { Container, List } from "./PokemonList.styles";
import pokebolaGif from "../../assets/images/pokebola-loading.gif";

export const PokemonList = () => {
  const { pokemonList, loading } = useContext(PokemonContext);
  return (
    <Container>
      {loading ? (
        <span>
          <img src={pokebolaGif} alt="pokebola" />
        </span>
      ) : (
        <List>
          {pokemonList.map((pokemon) => (
            <Link to={`/details/${pokemon.name}`}>
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            </Link>
          ))}
        </List>
      )}
    </Container>
  );
};
