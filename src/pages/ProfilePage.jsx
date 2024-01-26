import React, { useEffect, useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import PurchaseHistory from "../components/PurchaseHistory";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setProfile(currentUser);
    }
  }, []);

  return (
    <Box p={4}>
      {profile ? (
        <VStack spacing={4} align="start">
          <Text fontWeight="bold">Name: {profile.name}</Text>
          <Text fontWeight="bold">Email: {profile.email}</Text>
          {/* Since phone number wasn't previously stored, we'll use a placeholder */}
          <Text fontWeight="bold">Phone Number: (Placeholder for actual phone number)</Text>
          <PurchaseHistory purchases={profile.purchases || []} />
        </VStack>
      ) : (
        <Text>No user profile found.</Text>
      )}
    </Box>
  );
};

export default ProfilePage;
