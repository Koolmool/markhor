import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <Box p={4}>
      <Heading mb={6}>{category}</Heading>
      {/* Here you can add content specific to each category */}
    </Box>
  );
};

export default CategoryPage;
