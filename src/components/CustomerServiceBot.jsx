import React, { useState } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import ChatInterface from "./ChatInterface"; // Import the ChatInterface component

const CustomerServiceBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chat visibility

  const handleBotClick = () => {
    setIsChatOpen(!isChatOpen); // Toggle the chat interface visibility
  };

  return (
    <Box position="fixed" bottom="4" right="4" zIndex="tooltip">
      <IconButton icon={<FaRobot />} colorScheme="teal" variant="solid" size="lg" isRound onClick={handleBotClick} aria-label="Customer Service Bot" />
      {isChatOpen && <ChatInterface isOpen={isChatOpen} />} // Pass down the isChatOpen state as a prop to ChatInterface
    </Box>
  );

  return (
    <Box position="fixed" bottom="4" right="4" zIndex="tooltip">
      <IconButton icon={<FaRobot />} colorScheme="teal" variant="solid" size="lg" isRound onClick={handleBotClick} aria-label="Customer Service Bot" />
    </Box>
  );
};

export default CustomerServiceBot;
