import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "/public/Images/Contact.png";

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className=" mt-12 min-h-screen flex flex-col items-center px-4 md:px-10 py-8 md:py-12">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 font-['Poppins']">
            Let's Grow Together
          </h1>
          <p className="text-xl md:text-2xl text-green-800 mt-4 font-medium">
            Have a Question? Need a Quote?
          </p>
          <p className="text-lg text-green-800 mt-4">
            Fill out the form, and our team will respond within 24 hours.
          </p>
        </motion.section>

        {/* Contact Form and Image Container */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-between">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <img
              src={img1}
              alt="Hydroponic plants"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 px-4 border border-gray-200 rounded-md  text-center"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-4 border border-gray-200 rounded-md text-center"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 px-4 border border-gray-200 rounded-md  text-center"
              />
              <input
                type="text"
                placeholder="Business Type"
                className="w-full py-3 px-4 border border-gray-200 rounded-md text-center"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-900 text-white font-medium rounded-md hover:bg-green-800 transition-colors mt-2"
              >
                Submit your Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;