import React, { useState } from "react";
import { ChakraProvider, Box, Button, Flex, Heading, Text, Input, IconButton, Stack, useToast } from "@chakra-ui/react";
import { FaShoppingCart, FaRobot, FaLanguage, FaPlus, FaMinus } from "react-icons/fa";

const Index = () => {
  const [language, setLanguage] = useState("en");
  const toast = useToast();

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "ar" : "en");
    toast({
      title: `Language switched to ${language === "en" ? "Arabic" : "English"}.`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  // The handleQuestionSubmit function has been removed as AI functionality is no longer needed.

  return (
    <ChakraProvider>
      <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
        <Heading mb={6}>{language === "en" ? "Welcome to Tiجarat" : "مرحبا بكم في تيجارات"}</Heading>
        <Button leftIcon={<FaLanguage />} variant="solid" onClick={handleLanguageChange}>
          {language === "en" ? "العربية" : "English"}
        </Button>

        <Flex my={6} align="center">
          <IconButton icon={<FaMinus />} aria-label="Remove from cart" mr={2} />
          <Text fontSize="2xl" mx={3}>
            {language === "en" ? "Items in Cart" : "العناصر في السلة"}: 0
          </Text>
          <IconButton icon={<FaPlus />} aria-label="Add to cart" />
        </Flex>

        <Stack spacing={4} direction="row" align="center" my={6}>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            {language === "en" ? "View Cart" : "عرض السلة"}
          </Button>
          <Button colorScheme="blue" variant="outline">
            {language === "en" ? "Checkout" : "الدفع"}
          </Button>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
