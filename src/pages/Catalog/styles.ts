import styled from "styled-components";

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
`;
