import { Navbar } from "../../components/Navbar";
import { SearchBar } from "../../components/SearchBar";
import { BorderHeader } from "../../components/BorderHeader";
import { Container, List } from "./Favorites.styles";
import { ListEmpty } from "../../components/ListEmpty";

export const Favorites = () => {
  return (
    <>
      <BorderHeader />
      <Navbar />
      <SearchBar />
      <Container>
        <List>
          <ListEmpty />
        </List>
      </Container>
    </>
  );
};
