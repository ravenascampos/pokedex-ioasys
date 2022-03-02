import styled from "styled-components";

export const Content = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  max-height: 147px;
  // padding: 27px 21px 27px 31px;
  // padding: 151px 147px;

  border: 1px solid;
  border-radius: 10px;

  span {
    margin-top: 0.5rem;
    padding-left: 7rem;
    font-style: normal;
    font-weight: bold;
    font-size: 10.4854px;
    line-height: 16px;
  }

  img {
    margin-top: 0.5rem;
    width: 5.937rem;
    height: 5.937rem;
  }
`;

export const Title = styled.div`
  padding: 5px 10px 5px 10px;
  width: 150px;
  margin-top: 0.5rem;
  border-radius: 0 0 10px 10px;

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-style: normal;
    font-weight: normal;
    font-size: 13.1068px;
    line-height: 21px;
    color: var(--white);
  }
`;
