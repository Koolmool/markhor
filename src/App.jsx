import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import LoginPage from "./pages/LoginPage";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import AccountMenu from "./components/AccountMenu";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
      <IconButton icon={<FaUserCircle />} position="fixed" top="4" right="4" colorScheme="teal" variant="outline" size="lg" onClick={onOpen} zIndex="tooltip" />
      <AccountMenu isOpen={isOpen} onClose={onClose} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
