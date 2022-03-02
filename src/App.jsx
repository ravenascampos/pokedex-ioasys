import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/Theme";
import { PokemonProvider } from "./context/usePokemon";
import { Navigation } from "./navigation";
import GlobalStyle from "./styles/GlobalStyle";
import { useDarkMode } from "./context/useDarkMode";

export function App() {
  const [theme] = useDarkMode();
  // const themeMode = theme === "light" ? LightTheme : DarkTheme;
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Theme>
          <Navigation />
          <GlobalStyle />
        </Theme>
      </PokemonProvider>
    </BrowserRouter>
  );
}
