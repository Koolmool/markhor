import React from "react";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AccountMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" bg="black" color="white">
          Account
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing={4}>
            <Button w="full" as={Link} to="/login" colorScheme="black" color="black">
              Login / Create Account
            </Button>
            <Button w="full" as={Link} to="/register" colorScheme="black" color="black">
              Register
            </Button>
            <Button w="full" as={Link} to="/services" colorScheme="black" color="black">
              Services
            </Button>
            <Button w="full" as={Link} to="/profile" colorScheme="black" color="black">
              Profile
            </Button>
            {/* More options can be added here */}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AccountMenu;
