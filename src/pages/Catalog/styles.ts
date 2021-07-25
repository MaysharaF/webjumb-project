import styled, { css } from "styled-components";

import { Grid, ListUnordered } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5%;
  background: var(--white);

  span {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 95%;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 20%;
  height: 55%;
  margin-right: 2%;
`;

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 9%;
`;

export const TitleProductList = styled.label`
  display: flex;
  align-items: center;
  color: var(--red-600);
  font-size: 1.3rem;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid var(--gray-150);
`;

export const Ordenation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid var(--gray-150);
`;

export const OrdenationGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 5%;
  height: 100%;
`;

const IconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--gray-500);
  cursor: pointer;

  :hover,
  :active {
    color: var(--teal-200);
  }
`;

export const PrimaryGrid = styled(Grid)`
  ${IconCSS}
`;

export const SecondaryGrid = styled(ListUnordered)`
  ${IconCSS}
`;

export const OrdenationType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;

  span {
    color: var(--gray-500);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`;

export const Select = styled.select`
  width: 65%;
  border-color: var(--gray-150);
`;

export const Option = styled.option``;

export const ProductListContent = styled.div`
  display: flex;
  margin-top: 2%;
  width: 100%;
  height: 91%;
`;
