import React from "react";
import { Box, Image, Text, Wrap, WrapItem, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Product from "./Product";

const categories = ["Fashion", "Home", "Toys", "Electronics", "Car Accessories", "Games", "Sports", "Bags", "Lights and Lighting", "Office Supplies"];

const Categories = () => {
  return (
    <Wrap spacing="20px" justify="center" my={8} align="stretch">
      {categories.map((category) => {
        const imageName = category.toLowerCase().replace(/ /g, "-") + ".jpg";
        return (
          <WrapItem key={category} w="150px" h="150px">
            <Box as={Link} to={`/category/${category.toLowerCase().replace(/ /g, "-")}`} textAlign="center" shadow="md" borderWidth="1px" borderRadius="md" overflow="hidden" style={{ textDecoration: "none" }}>
              <Image src={`/assets/categories/${imageName}`} alt={category} boxSize="150px" objectFit="cover" />
              <Text mt={2}>{category}</Text>
            </Box>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default Categories;
