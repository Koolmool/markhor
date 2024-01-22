import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function RegisterPage() {
  return (
    <Box p={8}>
      <VStack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button width="full" mt={4} type="submit" colorScheme="teal">
          Register
        </Button>
      </VStack>
    </Box>
  );
}

export default RegisterPage;
