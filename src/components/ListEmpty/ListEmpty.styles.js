import styled from "styled-components";

export const Container = styled.div`
  margin-left: 15rem;
  margin-right: 10rem;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem 3rem;
  justify-items: center;
`;
