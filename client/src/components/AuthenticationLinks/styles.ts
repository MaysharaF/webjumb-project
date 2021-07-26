import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  background: var(--brown-900);

  @media only screen and (max-width: 320px) {
    height: 20%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 65%;
  height: 100%;
  color: var(--white);
  font-size: 0.9rem;

  span {
    margin: 0 5px 0 5px;
  }

  @media only screen and (max-width: 1440px) {
    font-size: 0.8rem;
    width: 70%;
  }

  @media only screen and (max-width: 1024px) {
    width: 95%;
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 320px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Links = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;

  :hover {
    color: var(--gray-350);
  }
`;
