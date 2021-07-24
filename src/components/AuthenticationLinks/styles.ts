import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  background: var(--brown-900);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 65%;
  height: 100%;
  color: var(--white);

  span {
    margin: 0 5px 0 5px;
  }
`;

export const Links = styled.a`
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: underline;

  :hover {
    color: var(--gray-350);
  }
`;
