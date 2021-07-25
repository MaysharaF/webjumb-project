import styled from "styled-components";

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

export const Links = styled.a`
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
`;
