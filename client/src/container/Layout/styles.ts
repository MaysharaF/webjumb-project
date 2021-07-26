import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const TopFixedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;

  @media only screen and (max-width: 320px) {
    height: 15%;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  height: 80%;

  @media only screen and (max-width: 320px) {
    height: 85%;
  }
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 90%;
  }
`;
