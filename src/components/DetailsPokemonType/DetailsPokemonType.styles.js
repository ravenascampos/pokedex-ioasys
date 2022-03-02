import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2.3rem;

  .type {
    width: fit-content;
    height: 1.25rem;
    padding: 0.125rem 0.5rem;
    border-radius: 0.625rem;
    margin-right: 0.625rem;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--white);
    text-align: center;
    text-transform: capitalize;
  }
`;
