import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import LoginPage from "./pages/LoginPage";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import AccountMenu from "./components/AccountMenu";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
      <IconButton icon={<FaUserCircle />} position="fixed" top="4" right="16" colorScheme="teal" variant="outline" size="lg" onClick={onOpen} zIndex="tooltip" />
      <IconButton icon={<FaBars />} position="fixed" top="4" right="4" colorScheme="teal" variant="outline" size="lg" onClick={onOpen} zIndex="tooltip" />
      <AccountMenu isOpen={isOpen} onClose={onClose} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
