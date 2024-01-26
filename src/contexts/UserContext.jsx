import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Placeholder for user profile update logic
  const updateUserProfile = (profile) => {
    setUser(profile);
  };

  return <UserContext.Provider value={{ user, updateUserProfile }}>{children}</UserContext.Provider>;
};
