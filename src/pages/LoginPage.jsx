import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
      toast({
        title: "Login Successful",
        description: "You are now logged in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Redirect to home page or dashboard after login
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect email or password",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" p={8} onSubmit={handleSubmit}>
      <VStack spacing={4} align="center" justify="center" minH="100vh">
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Sign In
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginPage;
