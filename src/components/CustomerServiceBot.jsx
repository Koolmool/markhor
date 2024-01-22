import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import ChatInterface from "./ChatInterface"; // Import the ChatInterface component

const CustomerServiceBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showBot, setShowBot] = useState(true); // State to manage chat visibility and bot appearance based on scroll

  const handleBotClick = () => {
    setIsChatOpen(!isChatOpen); // Toggle the chat interface visibility
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50; // Check if the scroll position is near the top of the page
      setShowBot(isTop);
    };

    // Add the event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position="fixed" bottom="4" right="4" zIndex="tooltip">
      {showBot && <IconButton icon={<FaRobot />} colorScheme="teal" variant="solid" size="lg" isRound onClick={handleBotClick} aria-label="Customer Service Bot" />}
      {isChatOpen && <ChatInterface isOpen={isChatOpen} />}
    </Box>
  );

  return (
    <Box position="fixed" bottom="4" right="4" zIndex="tooltip">
      <IconButton icon={<FaRobot />} colorScheme="teal" variant="solid" size="lg" isRound onClick={handleBotClick} aria-label="Customer Service Bot" />
    </Box>
  );
};

export default CustomerServiceBot;
