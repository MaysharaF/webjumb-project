import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid var(--gray-150);
  padding: 5%;
`;

export const Title = styled.label`
  width: 100%;
  height: 10%;
  text-transform: uppercase;
  color: var(--red-600);
  font-weight: 800;
`;

export const FilterTags = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 37%;
`;

export const TagFilterList = styled.ul`
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Links = styled.li`
  font-size: 0.9rem;
  color: var(--gray-500);
  margin-bottom: 0.5rem;
  transition: ease 0.2s;

  :hover {
    color: var(--red-600);
  }

  @media only screen and (max-width: 1440px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

export const TitleTags = styled.label`
  text-transform: uppercase;
  color: var(--teal-200);
  font-weight: bolder;

  @media only screen and (max-width: 1440px) {
    font-size: 0.9rem;
  }
`;

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  height: 16%;
`;

export const Colors = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ColorCSS = css`
  width: 50px;
  height: 23px;
  margin-right: 5px;
  cursor: pointer;

  @media only screen and (max-width: 1440px) {
    height: 20px;
    width: 40px;
  }
`;

export const ColorRed = styled.div`
  ${ColorCSS}
  background: var(--red-600);
`;
export const ColorOrange = styled.div`
  ${ColorCSS}
  background: var(--orange-400);
`;
export const ColorTeal = styled.div`
  ${ColorCSS}
  background: var(--teal-350);
`;
