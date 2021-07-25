import React, { useEffect, useState } from "react";
import api from "../../services/api";

import AuthenticationLinks from "../../components/AuthenticationLinks";
import NavigationBar from "../../components/NavigationBar";
import SearchNav from "../../components/SearchNav";

import { Categories } from "../../model/categories";
import ContextCategories from "../../contexts/context";

import { Container, TopFixedContainer, PageContainer, Page } from "./styles";

const Layout: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [filter, setFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchCategories = async () => {
      const {
        data: { items },
      } = await api.get("/api/V1/categories/list");
      setCategories(items);
    };

    fetchCategories();
  }, []);
  return (
    <>
      <ContextCategories.Provider value={{ categories, filter }}>
        <Container>
          <TopFixedContainer>
            <AuthenticationLinks />
            <SearchNav setFilter={setFilter} />
            <NavigationBar categories={categories} />
          </TopFixedContainer>

          <PageContainer>
            <Page>{children}</Page>
          </PageContainer>
        </Container>
      </ContextCategories.Provider>
    </>
  );
};

export default Layout;
