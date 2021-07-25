import React from "react";
import FooterContact from "../../components/FooterContact";

import {
  Container,
  SideBar,
  Content,
  Header,
  InfoHome,
  Info,
  MenuList,
  Links,
} from "./styles";

const Home: React.FC = () => {
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
      <Content>
        <SideBar>
          <MenuList>
            {menus.map((menu) => (
              <Links key={menu.id} href={menu.path}>
                {menu.menu}
              </Links>
            ))}
          </MenuList>
        </SideBar>

        <InfoHome>
          <Header></Header>
          <Info>
            <h3>Seja bem-vindo!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
              mi non turpis pulvinar venenatis. Quisque pretium erat vel arcu
              tincidunt, eget pellentesque felis commodo. Curabitur commodo
              pretium lectus eu volutpat. Donec ac accumsan leo, id rutrum
              turpis. Mauris nec felis nunc. Morbi euismod consectetur metus,
              bibendum luctus ligula rhoncus ac. Praesent laoreet porttitor
              maximus. Duis eu est et nisl fringilla gravida. Curabitur auctor
              odio risus, eget laoreet est blandit sit amet. Mauris feugiat
              metus libero, in eleifend ex congue sollicitudin. Nullam posuere
              libero ut cursus porta. Cras posuere bibendum vehicula.
              Pellentesque ultrices, neque nec congue feugiat, orci mi
              condimentum elit, sit amet feugiat diam tellus et ligula.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Mauris magna lectus, lobortis
              at ultricies eu, facilisis quis ante. Suspendisse id diam turpis.
              Nam semper consequat porta. Nam gravida, leo laoreet lobortis
              posuere, purus nisl cursus erat, nec tristique arcu velit eget
              nisi. Etiam venenatis venenatis turpis, eu vestibulum lorem
              pharetra sit amet. In vitae sagittis lectus.
            </p>
          </Info>
        </InfoHome>
      </Content>

      <FooterContact />
    </Container>
  );
};

export default Home;
