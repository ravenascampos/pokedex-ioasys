import styled from "styled-components";

export const Container = styled.div`
  div.header {
    display: none;

    @media (min-width: 800px) {
      display: inline;
    }
  }
  div.img {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const DetailsPoke = styled.div`
  width: 25.812rem;
  height: 31.75rem;
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 1rem;

  @media (min-width: 800px) {
    margin-top: 3rem;
    margin-left: 3rem;
    align-items: stretch;
  }
`;
