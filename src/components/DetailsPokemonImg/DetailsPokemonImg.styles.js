import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: 147px;

  &::before {
    content: "";
    height: 100%;
    width: 435px;
    background: inherit;
    position: absolute;
    z-index: 0;
  }

  .text {
    position: relative;
    margin-right: 160px;
    margin-left: 86px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 16px;
    color: var(--white);
  }

  .button-return {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }

  .images {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  img {
    position: relative;
  }

  .pokeball {
    width: 377px;
    height: 377px;
    left: -49px;
  }
  .pokemon {
    width: 370px;
    height: 370px;
    right: 200px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
