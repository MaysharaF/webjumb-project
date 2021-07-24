import React from "react";

import LogoImg from "../../assets/img/logo.png";

import {
  Container,
  Content,
  Logo,
  Search,
  Input,
  ButtonSearch,
} from "./styles";

const SearchNav: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={LogoImg} />

        <Search>
          <Input placeholder="Pesquisar..." />
          <ButtonSearch>Buscar</ButtonSearch>
        </Search>
      </Content>
    </Container>
  );
};

export default SearchNav;
