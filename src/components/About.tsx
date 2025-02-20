import { Button } from "./ui/button";
import AboutImage from "/public/Images/About.png";
import { useNavigate } from "react-router";
import { motion as m } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="min-h-screen flex flex-col items-center px-4 lg:px-24">
      {/* Animated Heading */}
      <m.h5 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className="text-logo-green-600 mt-10 text-h5 font-medium mb-10"
      >
        About Zorp
      </m.h5>

      <m.h6 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        viewport={{ once: true }}
        className="text-h6 text-logo-green-500 text-center"
      >
        Innovating Agriculture, Empowering Businesses
      </m.h6>

      <m.p 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }} 
        viewport={{ once: true }}
        className="text-center text-body text-logo-green-400 mt-4 mb-6 max-w-3xl"
      >
        Zorp is redefining modern farming by merging innovation with sustainability. Whether you’re a farmer, chef, or agri-entrepreneur, our solutions are designed to elevate your business.
      </m.p>

      {/* What do we do? Section */}
      <m.h5 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }} 
        viewport={{ once: true }}
        className="text-h5 text-logo-green-700 my-10 font-medium"
      >
        What do we do?
      </m.h5>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image with animation */}
        <m.img 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.8 }} 
          viewport={{ once: true }}
          className="w-full max-w-lg mx-auto md:h-auto"
          src={AboutImage} 
          alt="Collage Image"
        />

        {/* List Items */}
        <m.ul 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 1 }} 
          viewport={{ once: true }}
          className="flex flex-col gap-6 text-center lg:text-left px-4"
        >
          <li className="text-para text-logo-green-500">
            <strong>Agri Infrastructure</strong> – We build cutting-edge polyhouses, hydroponic systems & automated farms.
          </li>
          <li className="text-para text-logo-green-500">
            <strong>Fresh Produce</strong> – Supplying high-quality vegetables from Nilgiris & partner farms across India.
          </li>
          <li className="text-para text-logo-green-500">
            <strong>Consultation & Custom Projects</strong> – Tailored solutions for scaling agribusinesses.
          </li>

          {/* Button with animation */}
          <m.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 1.2 }} 
            viewport={{ once: true }}
          >
            <Button
              buttonText="Farms We Have Transformed"
              onClick={() => navigate('/farm-under-management')}
            />
          </m.div>
        </m.ul>
      </div>
    </section>
  );
};

export default About;
