import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;

  button {
    background: transparent;
    img {
      width: 1.741rem;
      height: 1.554rem;
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;

    margin-right: 1rem;
    text-transform: capitalize;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 2rem;
  }
`;
