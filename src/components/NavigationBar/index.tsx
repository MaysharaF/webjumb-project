import React from "react";
import { Categories } from "../../model/categories";

import { Container, Menu, Links } from "./styles";

interface IProp {
  categories: Categories[];
}

const NavigationBar: React.FC<IProp> = ({ categories }) => {
  const menus: Categories[] = [
    { id: 1, name: "Página Inicial", path: "/" },
    ...categories.map((category, index) => ({
      ...category,
      id: index + 2,
      path: `/catalog/${category.id}`,
    })),
    { id: categories.length + 2, name: "Contato", path: "" },
  ];

  return (
    <Container>
      <Menu>
        {menus.map((menu) => (
          <Links key={menu.id} to={menu.path}>
            {menu.name}
          </Links>
        ))}
      </Menu>
    </Container>
  );
};

export default NavigationBar;
