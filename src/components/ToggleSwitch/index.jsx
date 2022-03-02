import { Container } from "./ToggleSwitch.styles";
import darkToggle from "../../assets/icons/darkToggle.svg";
import lightToggle from "../../assets/icons/lightToggle.svg";
import { useDarkMode } from "../../context/useDarkMode";

export const ToggleSwitch = () => {
  const [theme, handleToggleTheme] = useDarkMode();

  return (
    <Container theme={theme} onClick={() => handleToggleTheme()}>
      <img
        src={theme === "light" ? lightToggle : darkToggle}
        alt="toggle button"
      />
    </Container>
  );
};
