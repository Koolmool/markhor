import React from "react";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AccountMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Account</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4}>
            <Button w="full" as={Link} to="/login">
              Login / Create Account
            </Button>
            {/* More options can be added here */}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AccountMenu;
