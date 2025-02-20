import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "/public/Images/Services/1.png";
import img2 from "/public/Images/Services/2.png";
import img3 from "/public/Images/Services/3.png";
import img4 from "/public/Images/Services/4.png";
import { Button } from "../components/ui/button";
import { motion as m } from "framer-motion";
import { BulletPoint } from "../components/ui/bulletPoint";
import { useNavigate } from "react-router";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      img: img1,
      title: "Polyhouse Construction",
      description: [
        "Custom-built, climate-controlled structures for consistent high-yield farming.",
        "Customized Design: Built to suit different crops and climatic conditions.",
        "Weather Protection: Shields crops from excess heat, cold, and rain.",
        "Energy-Efficient & Cost-Effective: Reduces dependency on artificial heating/cooling."
      ],
      buttonText: "Request a Free Quote"
    },
    {
      img: img2,
      title: "Hydroponics & Aquaponics",
      description: [
        "Soil-free farming for the future of sustainable agriculture.",
        "Optimum Yield, Faster ROI.",
        "Minimal Water Usage: Uses only 10% of water compared to soil farming.",
        "Residue-free & Sustainably grown."
      ],
      buttonText: "Get a Free Consultation"
    },
    {
      img: img3,
      title: "Farm Automation",
      description: [
        "Smart tech for data-driven, precision agriculture.",
        "IoT-Enabled Smart Sensors: Monitor soil, temperature, and humidity in real-time.",
        "Automated Drip Irrigation: Reduces water usage while ensuring optimal hydration.",
        "Remote-Controlled Farm Management: Adjust settings from your phone or computer."
      ],
      buttonText: "Talk to Our Experts"
    },
    {
      img: img4,
      title: "Custom Projects & Consultation",
      description: [
        "Agri solutions tailored to your needs.",
        "Custom Hydroponic & Polyhouse Designs for different crops & business models.",
        "Feasibility Studies & Cost Optimization to ensure profitability.",
        "Agri-Tech Integration for smart, automated solutions."
      ],
      buttonText: "Schedule a Free Consultation"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden mt-20 px-6 lg:px-24 py-10">
        <m.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-logo-green-500 text-center"
        >
          Building the Future of Agriculture, Today.
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-logo-green-400 text-center my-6 max-w-3xl mx-auto"
        >
          At Zorp, we provide end-to-end agricultural solutions, from polyhouse construction to farm automation. 
          Our expertise ensures that your farm is not just functional—but optimized for maximum profitability and efficiency.
        </m.p>

        {/* Services Section */}
        <div className="flex flex-col gap-12 my-12">
          {services.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              <img src={service.img} alt={service.title} className=" max-w-md rounded-lg" />
              <div className="flex-1 text-left">
                <h5 className="text-xl font-semibold text-logo-green-500 mb-4">{service.title}</h5>
                <ul className="list-disc pl-5 text-logo-green-400">
                  {service.description.map((desc, i) => (
                    <li key={i} className="mb-2">{desc}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button buttonText={service.buttonText} onClick={() => navigate('/contact')} />
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Call to Action */}
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 flex flex-col items-center"
        >
          <h3 className="text-2xl font-semibold text-logo-green-500 font-poppins my-10">Let’s Build Your Smart Farm Today!</h3>
          <Button buttonText="Request a Free Quote" onClick={() => navigate('/contact')} />
        </m.div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
