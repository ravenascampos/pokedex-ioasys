import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    //cores padrões
    --darkGray: #212121;
    --mediumGray: #666666;
    --lightGray: #e0e0e0;
    --white: #ffffff;
    --background: #f7f7f7;
    --secondaryColor: #ec0344;

    //cores pokemons tipos
    --rock: #b69e31;
    --ghost: #70559b;
    --steel: #b7b9d0;
    --grass: #74cb48;
    --psychic: #fb5584;
    --ice: #9ad6df;
    --dark: #75574c;
    --normal: #aaa67f;
    --fighting: #c12239;
    --flying: #a891ec;
    --poison: #a43e9e;
    --ground: #dec16b;
    --bug: #a7b723;
    --fire: #f57d31;
    --electric: #f9cf30;
    --dragon: #7037ff;
}

*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}
}

button {
    border: none;
    cursor: pointer;
}

label {
    background-color: ${({ theme }) => theme.body};
}

input {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}
`;
