import React from "react";
import { Button, Wrap, WrapItem } from "@chakra-ui/react";

const categories = ["Fashion", "Home", "Toys", "Electronics", "Car Accessories", "Games", "Sports", "Bags", "Lights and Lighting", "Office Supplies"];

const Categories = () => {
  return (
    <Wrap spacing="20px" justify="center" my={8}>
      {categories.map((category) => (
        <WrapItem key={category}>
          <Button variant="outline">{category}</Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Categories;
