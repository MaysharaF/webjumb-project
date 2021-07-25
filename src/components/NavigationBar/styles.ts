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

  @media only screen and (width: 1440px) {
    font-size: 0.8rem;
    margin-right: 4rem;
  }
`;
