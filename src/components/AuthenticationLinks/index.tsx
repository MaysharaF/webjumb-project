import React from "react";
import { Container, Content, Links } from "./styles";

const AuthenticationLinks: React.FC = () => {
  return (
    <Container>
      <Content>
        <Links>Acesse sua Conta </Links> <span>ou</span>
        <Links> Cadastre-se</Links>
      </Content>
    </Container>
  );
};

export default AuthenticationLinks;
