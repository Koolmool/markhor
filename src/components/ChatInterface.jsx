import React, { useState } from "react";
import { Box, Input, Button, VStack, useToast } from "@chakra-ui/react";

const ChatInterface = () => {
  const [userInput, setUserInput] = useState("");
  const toast = useToast();

  const handleSend = () => {
    // This is a mock function to simulate sending a message
    // In a real application, you would connect to a chat service
    toast({
      title: "Raju",
      description: `You said: "${userInput}" - Our answer: "Thank you for reaching out. We will assist you shortly."`,
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
    setUserInput(""); // Clear the input after sending a message
  };

  return (
    <VStack position="fixed" bottom="16" right="4" p={4} bg="white" boxShadow="lg" borderRadius="md" zIndex="tooltip" spacing={4}>
      <Input placeholder="Ask me anything..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSend()} />
      <Button colorScheme="teal" onClick={handleSend}>
        Send
      </Button>
    </VStack>
  );
};

export default ChatInterface;
