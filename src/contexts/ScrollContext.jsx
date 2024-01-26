import { createContext, useContext, useState } from "react";

export const ScrollContext = createContext(null);

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [showBot, setShowBot] = useState(true);

  return <ScrollContext.Provider value={{ showBot, setShowBot }}>{children}</ScrollContext.Provider>;
};
