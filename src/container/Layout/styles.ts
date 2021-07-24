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
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  height: 80%;
  background: skyblue;
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 100%;
  background: steelblue;
`;
