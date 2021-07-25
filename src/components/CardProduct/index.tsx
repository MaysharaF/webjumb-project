import React from "react";
import ItemImg from "../../assets/img/shoes-7.jpg";

import {
  Container,
  Content,
  ImageItem,
  Image,
  ProductName,
  Price,
  ButtonBuy,
} from "./styles";

const CardProduct: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImageItem>
          <Image src={ItemImg} />
        </ImageItem>

        <ProductName>
          <span>Tênis Adidas</span>
        </ProductName>
        <Price>
          <span>R$299,90</span>
        </Price>

        <ButtonBuy>Comprar</ButtonBuy>
      </Content>
    </Container>
  );
};

export default CardProduct;
