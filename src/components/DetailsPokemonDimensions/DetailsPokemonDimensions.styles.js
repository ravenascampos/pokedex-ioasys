import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .weight,
  .height,
  .abilities {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 41px;
  }

  .abilities {
    margin-left: 1rem;
    margin-right: 0;
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
    font-size: 12px;
    line-height: 12px;
    color: var(--lightGray);
  }
`;
