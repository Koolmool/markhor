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
        color: "black",
      });
      setIsFirstMessage(false);
    }
  }, [isOpen, isFirstMessage, toast]);

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("products")) {
      return "You can browse our products by visiting the categories section.";
    } else if (lowerInput.includes("categories")) {
      return "We have a wide range of categories like Fashion, Electronics, Games, and more.";
    } else if (lowerInput.includes("login")) {
      return "You can log in by clicking on the account icon and entering your credentials.";
    } else if (lowerInput.includes("registration")) {
      return "Registering is easy! Just go to the registration page and fill in your details.";
    } else if (lowerInput.includes("order")) {
      return "Your order is being processed. You can expect delivery within the next few days.";
    } else {
      return "I'm not sure how to answer that. Can you try asking something else?";
    }
  };

  const handleSend = () => {
    const botResponse = getBotResponse(userInput);
    toast({
      title: "Raju",
      description: botResponse,
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
      color: "black",
    });
    setUserInput(""); // Clear the input after sending a message
  };

  return (
    <VStack position="fixed" bottom="16" right="4" p={4} bg="white" boxShadow="lg" borderRadius="md" zIndex="tooltip" spacing={4}>
      <Input placeholder="Ask me anything..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSend()} autoFocus />
      <Button colorScheme="black" onClick={handleSend}>
        Send
      </Button>
    </VStack>
  );
};

export default ChatInterface;
