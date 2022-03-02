import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 10rem;

  img {
    width: 1.812rem;
    height: 1.375rem;
    margin-right: 0.75rem;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 2rem;
    color: var(--secondaryColor);
  }
`;
