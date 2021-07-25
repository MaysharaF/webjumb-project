import React from "react";

import {
  Container,
  TitleTags,
  TagFilterList,
  Links,
  Colors,
  ColorTeal,
  ColorOrange,
  ColorRed,
  ColorBox,
  FilterTags,
  Title,
} from "./styles";

const FilterBox: React.FC = () => {
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
    </Container>
  );
};

export default FilterBox;
