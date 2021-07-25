import React from "react";
import CardProduct from "../../components/CardProduct";
import { Container } from "./styles";

const ProductsList: React.FC = () => {
  return (
    <Container>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </Container>
  );
};

export default ProductsList;