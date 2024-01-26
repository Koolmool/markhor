import React from "react";
import { Flex, Link, IconButton } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="maroon" color="white">
      <Link as={RouterLink} to="/" p="2">
        Home
      </Link>
      <Link as={RouterLink} to="/display" p="2">
        Display
      </Link>
      <Link as={RouterLink} to="/website" p="2">
        About
      </Link>
      <Link as={RouterLink} to="/videos" p="2">
        Videos
      </Link>
      <IconButton as={RouterLink} to="/profile" icon={<FaUserCircle />} size="lg" variant="ghost" position="absolute" top="2" right="2" aria-label="Profile" />
      {/* Add more navigation links as needed */}
    </Flex>
  );
};

export default Navigation;
