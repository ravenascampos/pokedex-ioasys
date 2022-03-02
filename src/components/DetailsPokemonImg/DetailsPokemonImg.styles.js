import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  position: relative;

  &::before {
    content: "";
    height: auto;
    width: 26.75rem;
    background: inherit;
    position: absolute;
    z-index: 0;
  }

  .text {
    display: none;

    @media (min-width: 600px) {
      display: flex;
      color: var(--white);
      margin-left: 2rem;
    }
  }

  .button-return {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-top: 1rem;
  }

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  img {
    position: relative;
  }
  .pokeball {
    width: 13rem;
    height: 13rem;
    left: 5rem;
    top: 0rem;
  }
  .pokemon {
    width: 12.5rem;
    height: 12.5rem;
    top: -5rem;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
