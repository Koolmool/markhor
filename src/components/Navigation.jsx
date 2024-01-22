import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Link as={RouterLink} to="/" p="2">
        Home
      </Link>
      <Link as={RouterLink} to="/display" p="2">
        Display
      </Link>
      {/* Add more navigation links as needed */}
    </Flex>
  );
};

export default Navigation;