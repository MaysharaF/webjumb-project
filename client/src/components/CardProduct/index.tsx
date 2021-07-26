import React from "react";
import { Item } from "../../model/item";
import { apiConfig } from "../../config/apiConfig";

import {
  Container,
  Content,
  ImageItem,
  Image,
  ProductName,
  Price,
  ButtonBuy,
} from "./styles";

interface IProp {
  item: Item;
}

const CardProduct: React.FC<IProp> = ({ item }) => {
  return (
    <Container>
      <Content>
        <ImageItem>
          <Image src={`${apiConfig.baseURL}/${item.image}`} />
        </ImageItem>

        <ProductName>
          <span>{item.name}</span>
        </ProductName>
        <Price>
          <span>R${item.price.toFixed(2).replace(".", ",")}</span>
        </Price>

        <ButtonBuy>Comprar</ButtonBuy>
      </Content>
    </Container>
  );
};

export default CardProduct;
