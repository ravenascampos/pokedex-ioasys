import { Navbar } from "../../components/Navbar";
import { PokemonList } from "../../components/PokemonList";
import { SearchBar } from "../../components/SearchBar";
import { BorderHeader } from "../../components/BorderHeader";

export const Home = () => {
  return (
    <>
      <BorderHeader />
      <Navbar />
      <SearchBar />
      <PokemonList />
    </>
  );
};
