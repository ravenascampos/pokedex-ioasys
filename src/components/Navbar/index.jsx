import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/ioasysLogo.svg";
import { ToggleSwitch } from "../ToggleSwitch";
import { Container, Content } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Content>
          <img src={logo} alt="" />
          <h1>ioasys pokédex</h1>
        </Content>
      </Link>
      <ToggleSwitch />
    </Container>
  );
};
