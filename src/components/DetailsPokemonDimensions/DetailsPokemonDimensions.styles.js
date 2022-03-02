import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 2rem;

  @media (min-width: 600px) {
    width: 100%;
    margin-left: 8rem;
  }

  .weight,
  .height,
  .abilities {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2.562rem;
  }

  .abilities {
    margin-left: 1rem;
    margin-right: 0;
    text-transform: capitalize;
  }
  .weight-text,
  .height-text,
  .abilities-text {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: justify;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 8px;
    }
  }

  .weight-title,
  .height-title,
  .abilities-title {
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: var(--lightGray);
    text-transform: capitalize;
  }
`;
