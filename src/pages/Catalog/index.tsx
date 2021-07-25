import React from "react";
import FilterBox from "../../components/FilterBox";

import { Container, Breadcrumb, Content, FilterContainer } from "./styles";

const Catalog: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <span>{"Página Inicial > Camisetas"}</span>
      </Breadcrumb>

      <Content>
        <FilterContainer>
          <FilterBox />
        </FilterContainer>
      </Content>
    </Container>
  );
};

export default Catalog;
