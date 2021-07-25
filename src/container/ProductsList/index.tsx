import React, { useContext, useEffect } from "react";
import ContextCategories from "../../contexts/context";
import { Item } from "../../model/item";
import CardProduct from "../../components/CardProduct";
import { Container } from "./styles";

interface IProp {
  items: Item[];
}

const ProductsList: React.FC<IProp> = ({ items }) => {
  const { filter } = useContext(ContextCategories);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const handleFilter = (pattern: any): Item[] => {
    if (pattern) {
      return items.filter(function (item) {
        return item.name.toLowerCase().includes(pattern.toLowerCase());
      });
    }
    return items;
  };

  return (
    <Container>
      {handleFilter(filter).map((item) => (
        <CardProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default ProductsList;
