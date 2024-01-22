import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
