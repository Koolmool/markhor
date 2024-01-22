import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const DisplayPage = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Our Display Page</Heading>
      <Text>This is the main display of our website. Here you can find all the features and information about our services.</Text>
      {/* Additional content for display page goes here */}
    </Box>
  );
};

export default DisplayPage;
