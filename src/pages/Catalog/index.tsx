import React from "react";

import {
  Container,
  Breadcrumb,
  Content,
  FilterBox,
  Title,
  FilterTags,
  ColorBox,
  TitleTags,
  Colors,
  ColorRed,
  ColorOrange,
  ColorTeal,
  TagFilterList,
  Links,
} from "./styles";

const Catalog: React.FC = () => {
  const menuCategories = [
    {
      id: 1,
      categorie: "Roupas",
    },
    {
      id: 2,
      categorie: "Sapatos",
    },
    {
      id: 3,
      categorie: "Acessórios",
    },
  ];

  const menuTypes = [
    {
      id: 1,
      type: "Corrida",
    },
    {
      id: 2,
      type: "Caminhada",
    },
    {
      id: 3,
      type: "Casual",
    },
    {
      id: 4,
      type: "Social",
    },
  ];
  return (
    <Container>
      <Breadcrumb>
        <span>{"Página Inicial > Camisetas"}</span>
      </Breadcrumb>

      <Content>
        <FilterBox>
          <Title>Filtrar por</Title>

          <FilterTags>
            <TitleTags>Categorias</TitleTags>
            <TagFilterList>
              {menuCategories.map((categorie) => (
                <Links key={categorie.id}>• {categorie.categorie}</Links>
              ))}
            </TagFilterList>
          </FilterTags>

          <ColorBox>
            <TitleTags>Cores</TitleTags>

            <Colors>
              <ColorRed />
              <ColorOrange />
              <ColorTeal />
            </Colors>
          </ColorBox>

          <FilterTags>
            <TitleTags>Tipo</TitleTags>
            <TagFilterList>
              {menuTypes.map((type) => (
                <Links key={type.id}>• {type.type}</Links>
              ))}
            </TagFilterList>
          </FilterTags>
        </FilterBox>
      </Content>
    </Container>
  );
};

export default Catalog;
