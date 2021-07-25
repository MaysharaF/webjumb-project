import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  background: var(--red-600);
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    width: 95%;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    width: 95%;
  }
`;

export const Links = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-transform: uppercase;
  color: var(--white);
  font-weight: bold;
  margin-right: 7rem;
  transition: ease 0.2s;

  :hover {
    border-bottom: 2px solid var(--white);
  }

  @media only screen and (max-width: 1440px) {
    font-size: 0.8rem;
    margin-right: 4rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 0.9rem;
    margin-right: 4rem;
  }

  @media only screen and (max-width: 768px) {
    margin: 0rem;
  }
`;
