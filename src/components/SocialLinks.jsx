import React from "react";
import { IconButton, Flex } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <Flex direction="row" justifyContent="center" mt={4}>
      <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" isRound mx={2} />
      <IconButton as="a" href="https://whatsapp.com" aria-label="WhatsApp" icon={<FaWhatsapp />} size="lg" colorScheme="green" isRound mx={2} />
    </Flex>
  );
};

export default SocialLinks;
