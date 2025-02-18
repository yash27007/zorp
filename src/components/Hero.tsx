import { motion } from "motion/react";
import { Button } from './ui/button'; 
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen w-screen overflow-hidden flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">

        {/* Left Section: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-logo-green-500 leading-tight">
            Transforming Agriculture with <br className="hidden md:block" /> Smart Infrastructure.
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            From Hydroponic Farms to Automated Polyhouses—We Build, Innovate, and Supply Fresh Vegetables Across India.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button buttonText="Get a Free Consultation" variant="primary" 
            onClick={()=>{
              navigate('/contact');
            }}/>
            <Button buttonText="Explore our Products" variant="outline"
            onClick={()=>{
              navigate('/products');
            }} />
          </div>
        </motion.div>

        {/* Right Section: Image Layout */}
        <div className="flex justify-center md:justify-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="grid grid-cols-2 grid-rows-2 gap-4 items-center pl-5 justify-center w-full max-w-md md:max-w-none md:w-max md:h-max md:items-center md:justify-center"
          >
            {/* Large Image on Left */}
            <motion.img
              src="public/Images/Hero/1.png"
              alt="Hero Image 1"
              className="h-64 w-max row-span-2 lg:h-max"
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            />
            {/* Two Stacked Small Images on Right */}
            <motion.img
              src="public/Images/Hero/2.png"
              alt="Hero Image 2"
              className="h-30 w-max lg:h-max"
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            />
            <motion.img 
              src="public/Images/Hero/3.png"
              alt="Hero Image 3"
              className="h-30 w-max lg:h-max"
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;