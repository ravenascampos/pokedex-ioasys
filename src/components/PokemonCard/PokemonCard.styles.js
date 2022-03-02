import styled from "styled-components";

export const Content = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6.5rem;
  height: 7rem;
  border: 1px solid;
  border-radius: 0.5rem;

  @media (min-width: 800px) {
    width: 9.375rem;
    height: 9.187rem;
    border: 1px solid;
    border-radius: 0.5rem;
  }

  span {
    margin-top: 0.5rem;
    padding-left: 4rem;
    font-style: normal;
    font-weight: bold;
    font-size: 0.5rem;
    line-height: 0.75rem;

    @media (min-width: 800px) {
      font-size: 10.4854px;
      line-height: 16px;
      padding-left: 6rem;
    }
  }

  img {
    width: 4.5rem;
    height: 4.5rem;

    @media (min-width: 800px) {
      width: 5.937rem;
      height: 5.937rem;
    }
  }
`;

export const Title = styled.div`
  padding: 0.25rem 0.5rem;
  width: 6.5rem;
  border-radius: 0 0 0.5rem 0.5rem;

  @media (min-width: 800px) {
    width: 9.375rem;
  }

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-style: normal;
    font-weight: normal;
    font-size: 0.625rem;
    line-height: 1rem;
    color: var(--white);

    @media (min-width: 800px) {
      font-size: 13.1068px;
      line-height: 21px;
    }
  }
`;
