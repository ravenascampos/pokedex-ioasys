import styled from "styled-components";

export const Container = styled.div`
  width: 26.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 3.125rem;

  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 18.93rem;
  height: 3.375rem;
  border: 2px solid var(--secondaryColor);
  border-radius: 0.5rem;

  @media (min-width: 600px) {
    width: 30rem;
  }

  input {
    border: none;
    width: 13.875rem;
    height: 1.5rem;
    outline: none;
    padding: 1rem 1.25rem;
    font-size: 0.875rem;
  }

  label {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
    color: var(--secondaryColor);
    pointer-events: none;
    position: absolute;
    top: -1.5rem;
    left: 2rem;
    padding: 0.312rem;
  }

  button {
    background: transparent;
  }

  .search-icon {
    color: var(--secondaryColor);
    font-size: 1rem;
    margin-right: 1.2rem;
  }
`;
