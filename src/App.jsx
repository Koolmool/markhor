import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import DisplayPage from "./pages/DisplayPage";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import LoginPage from "./pages/LoginPage";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import AccountMenu from "./components/AccountMenu";
import RegisterPage from "./pages/RegisterPage";
import ServicesPage from "./pages/ServicesPage";
import WebsitePage from "./pages/WebsitePage";
import VideoPage from "./pages/VideoPage";
import ProfilePage from "./pages/ProfilePage"; // Correctly placed import for ProfilePage

import { useScrollContext } from "./contexts/ScrollContext"; // Import useScrollContext

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showBot } = useScrollContext(); // Consume the showBot state

  return (
    <Router>
      {showBot && (
        <>
          <IconButton icon={<FaUserCircle />} position="fixed" top="4" right="16" colorScheme="teal" variant="outline" size="lg" onClick={onOpen} zIndex="tooltip" />
          <IconButton icon={<FaBars />} position="fixed" top="4" right="4" bg="maroon" color="white" variant="outline" size="lg" onClick={onOpen} zIndex="tooltip">
            Options
          </IconButton>
        </>
      )}
      <AccountMenu isOpen={isOpen} onClose={onClose} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/website" element={<WebsitePage />} />
        <Route path="/video" element={<VideoPage />} /> {/* This is the new route */}
      </Routes>
      {/* The ProfilePage route has been removed. Access to the profile is now through an icon button in the Navigation component. */}
    </Router>
  );
}

export default App;
