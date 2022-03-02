import styled from "styled-components";

export const Container = styled.table`
  width: 25rem;
  height: 1rem;
  border-spacing: 0;
  margin-left: 2rem;

  @media (min-width: 600px) {
    width: 100%;
    margin-left: 5rem;
  }
`;

export const TableTitle = styled.th`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1rem;
  text-align: left;
  padding-bottom: 1.25rem;
`;

export const TableStats = styled.td`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  width: 2.5rem;
  padding: 0 1.25rem 0.5rem 0;
  border-right: 1px solid var(--lightGray);
`;

export const TableResults = styled.td`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 1rem;
  text-align: left;
  padding: 0 0.875rem 0.5rem 0.875rem;
`;
