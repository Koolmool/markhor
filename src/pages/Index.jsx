import React from "react";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaLanguage } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";
import Categories from "../components/Categories";
import CustomerServiceBot from "../components/CustomerServiceBot";
import Logo from "../components/Logo";

const Index = () => (
  <Flex direction="column" align="center" justify="center" minH="100vh" p={4} position="relative" zIndex="docked">
    <video
      autoPlay
      loop
      muted
      style={{
        position: "fixed",
        right: "0",
        bottom: "0",
        minWidth: "100%",
        minHeight: "100%",
        zIndex: "-1",
      }}
    >
      <source src="path_to_your_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <IconButton icon={<FaLanguage />} size="md" position="absolute" top="4" right="4" aria-label="Change Language" />
    <Logo />
    <Heading my={6}>Welcome to Tiجارت</Heading>
    <Categories />
    <CustomerServiceBot />
    <SocialLinks />
  </Flex>
);

export default Index;
