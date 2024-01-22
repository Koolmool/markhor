import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Product = ({ name, image, price }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3} textAlign="center">
      <Image src={image} alt={name} boxSize="100px" objectFit="cover" mb={2} />
      <Text fontWeight="bold">{name}</Text>
      <Text color="gray.600">{price}</Text>
    </Box>
  );
};

export default Product;
