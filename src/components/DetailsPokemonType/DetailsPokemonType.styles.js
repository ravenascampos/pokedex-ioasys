import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  .type {
    width: fit-content;
    height: 20px;
    padding: 2px 8px;
    border-radius: 10px;
    margin-right: 0.625rem;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: var(--white);
    text-align: center;
    text-transform: capitalize;
  }
`;
