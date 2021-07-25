import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
