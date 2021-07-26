import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ContextCategories from "../../contexts/context";

import FilterBox from "../../components/FilterBox";

import { Item as ItemModel } from "../../model/item";
import ProductsList from "../../container/ProductsList";

import api from "../../services/api";

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
  const [item, setItem] = useState<ItemModel[]>([]);
  const { id } = useParams<{ id: string }>();
  const { categories } = useContext(ContextCategories);

  useEffect(() => {
    const fetchItem = async () => {
      const {
        data: { items },
      } = await api.get(`/api/V1/categories/${id}`);
      setItem(items);
    };

    fetchItem();
  }, [id]);

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
            <TitleProductList>
              {categories?.find((category) => category.id === +id)?.name}
            </TitleProductList>
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
            <ProductsList items={item} />
          </ProductListContent>
        </ProductsListContainer>
      </Content>
    </Container>
  );
};

export default Catalog;
