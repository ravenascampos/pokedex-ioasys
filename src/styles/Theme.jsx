import { ThemeProvider } from "styled-components";

const theme = {
  lightTheme: {
    body: "#ffffff",
    text: "#212121",
  },

  darkTheme: {
    body: "#212121",
    text: "#ffffff",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
