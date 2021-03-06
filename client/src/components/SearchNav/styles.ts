import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  background: var(--white);

  @media only screen and (max-width: 320px) {
    height: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 100%;

  @media only screen and (max-width: 1440px) {
    width: 70%;
  }

  @media only screen and (max-width: 1024px) {
    width: 95%;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
  }

  @media only screen and (max-width: 320px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  width: 20%;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    width: 15%;
  }

  @media only screen and (max-width: 768px) {
    width: 25%;
  }

  @media only screen and (max-width: 320px) {
    width: 65%;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;

  @media only screen and (max-width: 1440px) {
    width: 45%;
  }

  @media only screen and (max-width: 1024px) {
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    width: 73%;
  }

  @media only screen and (max-width: 320px) {
    display: none;
  }
`;

export const Input = styled.input`
  border: 1px solid var(--gray-500);
  color: var(--gray-500);
  padding: 1%;
  width: 75%;
  height: 3rem;

  @media only screen and (max-width: 1440px) {
    height: 2.5rem;
  }

  @media only screen and (max-width: 1024px) {
    height: 2.3rem;
  }

  @media only screen and (max-width: 768px) {
    height: 3rem;
  }
`;

export const ButtonSearch = styled.button`
  background: var(--red-600);
  color: var(--white);
  text-transform: uppercase;
  font-weight: 800;
  width: 25%;
  height: 3rem;

  :hover {
    filter: brightness(0.9);
  }

  @media only screen and (width: 1440px) {
    height: 2.5rem;
  }

  @media only screen and (max-width: 1024px) {
    height: 2.3rem;
  }

  @media only screen and (max-width: 768px) {
    height: 3rem;
  }
`;
