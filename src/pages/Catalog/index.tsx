import React from "react";
import FilterBox from "../../components/FilterBox";
import ProductsList from "../../container/ProductsList";

import {
  Container,
  Breadcrumb,
  Content,
  FilterContainer,
  ProductsListContainer,
  Header,
  TitleProductList,
  Ordenation,
  OrdenationGrid,
  OrdenationType,
  PrimaryGrid,
  SecondaryGrid,
  Select,
  Option,
  ProductListContent,
} from "./styles";

const Catalog: React.FC = () => {
  const optionOrder = [
    {
      value: 1,
      label: "Maior Preço",
    },
    {
      value: 2,
      label: "Menor Preço",
    },
    {
      value: 3,
      label: "Promoções",
    },
  ];
  return (
    <Container>
      <Breadcrumb>
        <span>{"Página Inicial > Camisetas"}</span>
      </Breadcrumb>

      <Content>
        <FilterContainer>
          <FilterBox />
        </FilterContainer>

        <ProductsListContainer>
          <Header>
            <TitleProductList>Camisetas</TitleProductList>
            <Ordenation>
              <OrdenationGrid>
                <PrimaryGrid />
                <SecondaryGrid />
              </OrdenationGrid>

              <OrdenationType>
                <span>Ordenar por</span>
                <Select
                  name="order"
                  onChange={({ target: { value } }) => console.log(value)}
                >
                  {optionOrder.map((option) => (
                    <Option value={option.label} key={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </OrdenationType>
            </Ordenation>
          </Header>

          <ProductListContent>
            <ProductsList />
          </ProductListContent>
        </ProductsListContainer>
      </Content>
    </Container>
  );
};

export default Catalog;
