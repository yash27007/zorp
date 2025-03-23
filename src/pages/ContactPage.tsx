import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "/public/Images/Contact.png";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://email-service-quxb.onrender.com/send-email",
        {
          from: formData.email,
          to: "vedanth.s.1209@gmail.com",
          name: formData.name,
          phone: formData.phone,
          businessType: formData.businessType,
        }
      );

      if (response.data.success) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="mt-12 min-h-screen flex flex-col items-center px-4 md:px-10 py-8 md:py-12">
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full py-3 px-4 border border-gray-200 rounded-md text-center"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full py-3 px-4 border border-gray-200 rounded-md text-center"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full py-3 px-4 border border-gray-200 rounded-md text-center"
              />
              <input
                type="text"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="Business Type"
                required
                className="w-full py-3 px-4 border border-gray-200 rounded-md text-center"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-green-900 text-white font-medium rounded-md hover:bg-green-800 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit your Inquiry"}
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