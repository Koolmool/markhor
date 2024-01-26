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
            <Button w="full" as="a" href="https://preview-62cafd36--login-authenticator.gptengineer.run/" target="_blank" colorScheme="black">
              Login / Create Account
            </Button>
            <Button w="full" as="a" href="https://preview-62cafd36--login-authenticator.gptengineer.run/" target="_blank" colorScheme="black">
              Register
            </Button>
            <Button w="full" as={Link} to="/services" colorScheme="black">
              Services
            </Button>
            {/* More options can be added here */}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AccountMenu;
