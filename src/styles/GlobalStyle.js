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

}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //16 * 0.9375 = 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    max-width: 1024px;
    -webkit-font-smoothing: antialiased;
}

button {
    border: none;
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
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
