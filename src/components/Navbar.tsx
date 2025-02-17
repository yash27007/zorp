// import { NavLink, useNavigate } from "react-router";
// import { useState } from "react";
// import { Button } from "./ui/button";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex justify-between items-center mb-4 mt-4 px-3 md:px-10 relative overflow-hidden">
//       {/* Logo (Left) */}
//       <div className="h-12 w-12">
//         <a href="/">
//           <img src="/ZorpLogo.svg" alt="Zorp Logo" />
//         </a>
//       </div>

//       {/* Desktop Navigation Links (Centered) */}
//       <div className="hidden lg:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
//         <NavLink className="nav-hover-btn text-logo-green-300" to="/">Home</NavLink>
//         <NavLink className="nav-hover-btn text-logo-green-300" to="/services">Services</NavLink>
//         <NavLink className="nav-hover-btn text-logo-green-300" to="/products">Products</NavLink>
//         <NavLink className="nav-hover-btn text-logo-green-300" to="/farm-under-management">Farm Under Management</NavLink>
//         <NavLink className="nav-hover-btn text-logo-green-300" to="/blog">Blog</NavLink>
//         <NavLink className="nav-hover-btn text-logo-green-300" to="/contact">Contact</NavLink>
//       </div>

//       {/* Desktop Get in Touch Button (Right) */}
//       <div className="hidden lg:flex">
//         <Button buttonText="Get in Touch" onClick={() => navigate("/contact")} />
//       </div>

//       {/* Mobile Menu Button */}
//       <button className="lg:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X /> : <Menu />}
//       </button>

//       {/* Mobile Navigation Menu with Blur Effect */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-beige/50 backdrop-blur-md flex flex-col items-center justify-center gap-6 lg:hidden z-40 transition-opacity duration-300 ease-in-out">
//           <NavLink className="nav-hover-btn text-logo-green-300" to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
//           <NavLink className="nav-hover-btn text-logo-green-300" to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
//           <NavLink className="nav-hover-btn text-logo-green-300" to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
//           <NavLink className="nav-hover-btn text-logo-green-300" to="/farm-under-management" onClick={() => setIsOpen(false)}>Farm Under Management</NavLink>
//           <NavLink className="nav-hover-btn text-logo-green-300" to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
//           <NavLink className="nav-hover-btn text-logo-green-300" to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

//           {/* Mobile Get in Touch Button */}
//           <Button
//             buttonText="Get in Touch"
//             onClick={() => {
//               navigate("/contact");
//               setIsOpen(false);
//             }}
//           />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-3 md:px-10 py-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="h-12 w-12">
        <a href="/">
          <img src="/ZorpLogo.svg" alt="Zorp Logo" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
        <NavLink className="nav-hover-btn text-logo-green-500" to="/">Home</NavLink>
        <NavLink className="nav-hover-btn text-logo-green-500" to="/services">Services</NavLink>
        <NavLink className="nav-hover-btn text-logo-green-500" to="/products">Products</NavLink>
        <NavLink className="nav-hover-btn text-logo-green-500" to="/farm-under-management">Farm Under Management</NavLink>
        <NavLink className="nav-hover-btn text-logo-green-500" to="/blog">Blog</NavLink>
        <NavLink className="nav-hover-btn text-logo-green-500" to="/contact">Contact</NavLink>
      </div>

      {/* Desktop Get in Touch Button */}
      <div className="hidden lg:flex">
        <Button buttonText="Get in Touch" onClick={() => navigate("/contact")} />
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-beige/90 backdrop-blur-lg flex flex-col items-center justify-center gap-6 lg:hidden z-40 transition-opacity duration-300 ease-in-out">
          <NavLink className="nav-hover-btn text-logo-green-600 text-lg font-medium" to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink className="nav-hover-btn text-logo-green-600 text-lg font-medium" to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink className="nav-hover-btn text-logo-green-600 text-lg font-medium" to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink className="nav-hover-btn text-logo-green-600 text-lg font-medium" to="/farm-under-management" onClick={() => setIsOpen(false)}>Farm Under Management</NavLink>
          <NavLink className="nav-hover-btn text-logo-green-600 text-lg font-medium" to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink className="nav-hover-btn text-logo-green-600 text-lg font-medium" to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

          {/* Mobile Get in Touch Button */}
          <Button
            buttonText="Get in Touch"
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
