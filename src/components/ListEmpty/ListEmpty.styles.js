import styled from "styled-components";

export const Container = styled.div`
  width: 26.75rem;
  margin-right: 2rem;
  margin-left: 2rem;

  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.125rem 1.125rem;

  @media (min-width: 600px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
