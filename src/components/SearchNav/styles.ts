import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  background: var(--white);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: 100%;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  width: 20%;
  height: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
`;

export const Input = styled.input`
  border: 1px solid var(--brown-900);
  color: var(--gray-500);
  padding: 1%;
  width: 75%;
  height: 3rem;
`;

export const ButtonSearch = styled.button`
  background: var(--red-600);
  color: var(--white);
  text-transform: uppercase;
  font-weight: bolder;
  width: 25%;
  height: 3rem;

  :hover {
    filter: brightness(0.9);
  }
`;
