import React, { useState, Dispatch, SetStateAction } from "react";
import LogoImg from "../../assets/img/logo.png";

import {
  Container,
  Content,
  Logo,
  Search,
  Input,
  ButtonSearch,
} from "./styles";

interface IProps {
  setFilter: Dispatch<SetStateAction<string | undefined>>;
}

const SearchNav: React.FC<IProps> = ({ setFilter }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleBuscar = () => {
    setFilter(value);
  };
  return (
    <Container>
      <Content>
        <Logo src={LogoImg} />

        <Search>
          <Input
            placeholder="Pesquisar..."
            onChange={({ target: { value } }) => {
              setValue(value ? value : undefined);
              if (!value) {
                setFilter(undefined);
              }
            }}
          />
          <ButtonSearch onClick={() => handleBuscar()}>Buscar</ButtonSearch>
        </Search>
      </Content>
    </Container>
  );
};

export default SearchNav;
