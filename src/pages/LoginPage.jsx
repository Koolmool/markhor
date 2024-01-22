import React from 'react';
import { Box, Button, ChakraProvider, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <ChakraProvider>
      <VStack spacing={4} align="center" justify="center" minH="100vh">
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Sign In
          </Button>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default LoginPage;