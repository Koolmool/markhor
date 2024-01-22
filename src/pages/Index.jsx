import React, { useState } from "react";
import { ChakraProvider, Button, Flex, Heading, Text, IconButton, Stack, useToast, Link } from "@chakra-ui/react";
import ProtectedRoute from "../components/ProtectedRoute";
import PaymentMethods from "../components/PaymentMethods";
import SocialLinks from "../components/SocialLinks";
import CustomerServiceBot from "../components/CustomerServiceBot";
import Categories from "../components/Categories";
import { FaShoppingCart, FaLanguage, FaPlus, FaMinus, FaUserCircle, FaBars } from "react-icons/fa";
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
        <Heading my={6}>Welcome to Tiجارت</Heading>
        <Categories />
        <CustomerServiceBot />
        <SocialLinks />
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
