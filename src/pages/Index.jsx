import React from "react";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaLanguage } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";
import Categories from "../components/Categories";
import CustomerServiceBot from "../components/CustomerServiceBot";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";

const Index = () => (
  <Flex direction="column" align="center" justify="center" minH="100vh" p={4} position="relative" zIndex="docked">
    <div
      style={{
        position: "fixed",
        right: "0",
        top: "0",
        bottom: "0",
        left: "0",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
      }}
    />
    <Logo />
    <Heading my={6}>Welcome to Tiجارت</Heading>
    <Categories />
    <CustomerServiceBot />
    <SocialLinks />
    <SearchBar
      onSearch={(searchTerm) => {
        /* Logic to handle search */
      }}
    />
    <IconButton icon={<FaLanguage />} size="md" position="absolute" top="4" right="4" aria-label="Change Language" />
    <Categories />
    <CustomerServiceBot />
    <SocialLinks />
  </Flex>
);

export default Index;
