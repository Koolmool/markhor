import React, { useState } from "react";
import { Box, Heading, Text, IconButton, useToast } from "@chakra-ui/react";
import { FaLanguage } from "react-icons/fa";

const DisplayPage = () => {
  const [language, setLanguage] = useState("en");
  const toast = useToast();

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    toast({
      title: `Language switched to ${newLanguage.toUpperCase()}.`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <IconButton icon={<FaLanguage />} size="md" float="right" onClick={handleLanguageChange} aria-label="Change Language" />
      <Heading mb={4}>Welcome to Tiجارت where gulf comes to shop</Heading>
      <Text>This is the main display of our website. Here you can find all the features and information about our services.</Text>
      {/* Additional content for display page goes here */}
    </Box>
  );
};

export default DisplayPage;
