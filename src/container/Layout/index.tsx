import React from "react";

import { Container, TopFixedContainer, PageContainer, Page } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <TopFixedContainer></TopFixedContainer>
      <PageContainer>
        <Page>{children}</Page>
      </PageContainer>
    </Container>
  );
};

export default Layout;
