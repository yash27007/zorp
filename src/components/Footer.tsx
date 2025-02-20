import { NavLink } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" text-logo-green-800 py-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center md:items-start"
          >
            <img src="/ZorpLogo.svg" alt="Zorp Logo" className="h-16 w-16" />
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="text-lg font-semibold text-logo-green-900 mb-3">Useful Links</h4>
            <ul className="space-y-2 flex items-center flex-col">
              <li><NavLink to="/" className="text-logo-green-700 hover:text-logo-green-900 transition">Home</NavLink></li>
              <li><NavLink to="/services" className="text-logo-green-700 hover:text-logo-green-900 transition">Services</NavLink></li>
              <li><NavLink to="/products" className="text-logo-green-700 hover:text-logo-green-900 transition">Products</NavLink></li>
              <li><NavLink to="/farm-under-management" className="text-logo-green-700 hover:text-logo-green-900 transition">Farm Under Management</NavLink></li>
              <li><NavLink to="/blog" className="text-logo-green-700 hover:text-logo-green-900 transition">Blog</NavLink></li>
              <li><NavLink to="/contact" className="text-logo-green-700 hover:text-logo-green-900 transition">Contact</NavLink></li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-lg font-semibold text-logo-green-900 mb-3">Contact Us</h4>
            <p className="flex items-center gap-2 text-logo-green-700"><MapPin size={18} />The 
Nilgiris
, India</p>
            <p className="flex items-center gap-2 text-logo-green-700"><Phone size={18} /> +91 98765 43210</p>
            <p className="flex items-center gap-2 text-logo-green-700"><Mail size={18} /> contact@zorp.in</p>
          </motion.div>

        </div>

        {/* Copyright & WebCre8 Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center border-t border-logo-green-300 pt-4"
        >
          <p className="text-logo-green-600 text-sm">&copy; {new Date().getFullYear()} Zorp. All Rights Reserved.</p>
          <p className="text-logo-green-700 text-sm mt-1">
            Designed & Developed by{" "}
            <a
              href="https://webcrea8teach.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-green-900 font-semibold hover:underline"
            >
              WebCre8
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
