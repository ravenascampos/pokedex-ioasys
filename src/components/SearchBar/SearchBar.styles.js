import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 4.375rem;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  max-width: 40rem;
  height: 3.375rem;
  border: 2px solid var(--secondaryColor);
  border-radius: 0.5rem;

  input {
    border: none;
    width: 30rem;
    height: 3rem;
    outline: none;
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }

  label {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
    color: var(--secondaryColor);
    pointer-events: none;
    position: absolute;
    top: -1rem;
    left: 2rem;
    padding: 0.312rem;
  }

  button {
    background: transparent;
  }

  .search-icon {
    color: var(--secondaryColor);
    font-size: 1.687rem;
    margin-right: 1.5rem;
  }
`;
