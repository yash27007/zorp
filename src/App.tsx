
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import FUMPage from "./pages/FUMPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path="/farm-under-management" element={<FUMPage/>}/>
      <Route path="/blog/:id" element={<BlogPage/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
