import React from "react";
import AuthenticationLinks from "../../components/AuthenticationLinks";

import { Container, TopFixedContainer, PageContainer, Page } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <TopFixedContainer>
        <AuthenticationLinks />
      </TopFixedContainer>
      <PageContainer>
        <Page>{children}</Page>
      </PageContainer>
    </Container>
  );
};

export default Layout;
