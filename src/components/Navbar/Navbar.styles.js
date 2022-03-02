import styled from "styled-components";

export const Container = styled.div`
  width: 26.75rem;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2.5rem;
  justify-content: space-around;
  margin-top: 2.5rem;

  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 10rem;

  img {
    width: 1.687rem;
    height: 1.312rem;
    margin-right: 0.812rem;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--secondaryColor);
  }
`;
