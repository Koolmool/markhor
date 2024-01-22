import React from "react";
import { IconButton, useToast, Box } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const CustomerServiceBot = () => {
  const toast = useToast();

  const handleBotClick = () => {
    toast({
      title: "Customer Service Bot",
      description: "Hello! How can I assist you today?",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
  };

  return (
    <Box position="fixed" bottom="4" right="4" zIndex="tooltip">
      <IconButton icon={<FaRobot />} colorScheme="teal" variant="solid" size="lg" isRound onClick={handleBotClick} aria-label="Customer Service Bot" />
    </Box>
  );
};

export default CustomerServiceBot;
