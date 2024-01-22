import React from "react";
import { Image } from "@chakra-ui/react";

const Logo = () => {
  return <Image src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Tiجarat Logo" boxSize="150px" objectFit="contain" />;
};

export default Logo;
