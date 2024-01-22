import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (localStorage.getItem(email)) {
      toast({
        title: "Error",
        description: "Email already registered",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    localStorage.setItem(email, password);
    toast({
      title: "Account created",
      description: "You can now log in",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box as="form" p={8} onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </FormControl>
        <Button width="full" mt={4} type="submit" colorScheme="teal">
          Register
        </Button>
      </VStack>
    </Box>
  );
}

export default RegisterPage;
