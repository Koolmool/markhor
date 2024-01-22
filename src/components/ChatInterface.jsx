import React, { useState, useEffect } from "react";
import { Input, Button, VStack, useToast } from "@chakra-ui/react";

const ChatInterface = ({ isOpen }) => {
  const [userInput, setUserInput] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const toast = useToast();

  const userGender = "male"; // Mock user gender, replace with actual logic to determine the user's gender

  useEffect(() => {
    const welcomeMessage = userGender === "male" ? "Salam baba" : "Salam mama";
    if (isOpen && isFirstMessage) {
      toast({
        title: "Raju",
        description: welcomeMessage,
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setIsFirstMessage(false);
    }
  }, [isOpen, isFirstMessage, toast]);

  const handleSend = () => {
    if (isFirstMessage) {
      setIsFirstMessage(false);
    }
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
      <Input placeholder="Ask me anything..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSend()} autoFocus />
      <Button colorScheme="teal" onClick={handleSend}>
        Send
      </Button>
    </VStack>
  );
};

export default ChatInterface;
