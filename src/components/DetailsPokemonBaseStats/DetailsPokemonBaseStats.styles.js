import styled from "styled-components";

export const Container = styled.table`
  width: 400px;
  height: 16px;
  border-spacing: 0;

  input {
    width: 300px;
    border-radius: 0;
    color: var(--grass);
  }
`;

export const TableTitle = styled.th`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  text-align: left;
  padding-bottom: 20px;
  color: var(--grass);
`;

export const TableStats = styled.td`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  width: 40px;
  padding: 0 20px 7px 0;
  color: var(--grass);
  border-right: 1px solid var(--lightGray);
`;

export const TableResults = styled.td`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  padding: 0 14px 7px 14px;
`;
