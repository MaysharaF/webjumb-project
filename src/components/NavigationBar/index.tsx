import React from "react";

import { Container, Menu, Links } from "./styles";

const NavigationBar: React.FC = () => {
  const menus = [
    {
      id: 1,
      menu: "Página Inicial",
      path: "/",
    },
    {
      id: 2,
      menu: "Camisetas",
      path: "",
    },
    {
      id: 3,
      menu: "Calças",
      path: "",
    },
    {
      id: 4,
      menu: "Sapatos",
      path: "",
    },
    {
      id: 5,
      menu: "Contato",
      path: "",
    },
  ];

  return (
    <Container>
      <Menu>
        {menus.map((menu) => (
          <Links key={menu.id} href={menu.path}>
            {menu.menu}
          </Links>
        ))}
      </Menu>
    </Container>
  );
};

export default NavigationBar;
