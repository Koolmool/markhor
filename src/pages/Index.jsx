import React, { useState } from "react";
import { ChakraProvider, Button, Flex, Heading, Text, IconButton, Stack, useToast, Link } from "@chakra-ui/react";
import ProtectedRoute from "../components/ProtectedRoute";
import PaymentMethods from "../components/PaymentMethods";
import SocialLinks from "../components/SocialLinks";
import CustomerServiceBot from "../components/CustomerServiceBot";
import Categories from "../components/Categories";
import { FaShoppingCart, FaLanguage, FaPlus, FaMinus } from "react-icons/fa";
import Logo from "../components/Logo";

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
        <Logo />
        <Heading mb={4}>{language === "en" ? "Welcome to Tiجarat, where the gulf comes to shop" : "مرحبا بكم في تيجارات، حيث يأتي الخليج للتسوق"}</Heading>
        <Button colorScheme="teal" size="lg" my={2} as="a" href="/login">
          {language === "en" ? "Login / Create Account" : "تسجيل الدخول / إنشاء حساب"}
        </Button>
        <SocialLinks />
        <Button leftIcon={<FaLanguage />} variant="solid" onClick={handleLanguageChange}>
          {language === "en" ? "العربية" : "English"}
        </Button>
        <Categories />
        <Flex my={6} align="center">
          <IconButton icon={<FaMinus />} aria-label="Remove from cart" mr={2} />
          <Text fontSize="2xl" mx={3}>
            {language === "en" ? "Items in Cart" : "العناصر في السلة"}: 0
          </Text>
          <IconButton icon={<FaPlus />} aria-label="Add to cart" />
        </Flex>

        <Stack spacing={4} direction="row" align="center" my={4}>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            {language === "en" ? "View Cart" : "عرض السلة"}
          </Button>
          <ProtectedRoute>
            <Button colorScheme="blue" variant="outline">
              {language === "en" ? "Checkout" : "الدفع"}
            </Button>
          </ProtectedRoute>
        </Stack>
        <PaymentMethods />
        <CustomerServiceBot />
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
