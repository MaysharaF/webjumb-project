import React from "react";
import AuthenticationLinks from "../../components/AuthenticationLinks";
import NavigationBar from "../../components/NavigationBar";
import SearchNav from "../../components/SearchNav";

import { Container, TopFixedContainer, PageContainer, Page } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <TopFixedContainer>
        <AuthenticationLinks />
        <SearchNav />
        <NavigationBar />
      </TopFixedContainer>
      <PageContainer>
        <Page>{children}</Page>
      </PageContainer>
    </Container>
  );
};

export default Layout;
