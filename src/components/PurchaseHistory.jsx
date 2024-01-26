import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const PurchaseHistory = ({ purchases }) => {
  return (
    <Box>
      <Heading size="md" my="4">
        Purchase History
      </Heading>
      <List spacing={3}>
        {purchases.map((purchase, index) => (
          <ListItem key={index}>{purchase}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PurchaseHistory;
