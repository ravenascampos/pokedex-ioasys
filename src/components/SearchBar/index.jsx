import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../context/usePokemon";
import { MyFavorites } from "../MyFavorites";
import { Container, Search } from "./SearchBar.styles";

export const SearchBar = () => {
  const { searchPokemon } = useContext(PokemonContext);
  const [name, setName] = useState();

  useEffect(() => {
    searchPokemon(name);
  }, [name]);

  console.log(name);

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <Search>
          <input type="text" onChange={(e) => setName(e.currentTarget.value)} />
          <label>Buscar</label>
          <button>
            <FiSearch className="search-icon" />
          </button>
        </Search>
      </form>
      <Link to="/favorites">
        <MyFavorites />
      </Link>
    </Container>
  );
};
