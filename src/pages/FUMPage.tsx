import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "/public/Images/FUM/1.png";
import img2 from "/public/Images/FUM/2.png";
import img3 from "/public/Images/FUM/3.png";
import { Button } from "../components/ui/button";
import { motion as m } from "framer-motion";
import { BulletPoint } from "../components/ui/bulltetPoint";
import { useNavigate } from "react-router";

const FUMPage = () => {
  const navigate = useNavigate();
  
  const bulletPoints = [
    "Access to the latest agri-tech innovations for optimized farming.",
    "Personalized consultation & end-to-end implementation support.",
    "Nationwide service—no matter where your farm is located, we can help.",
    "Proven expertise in designing and managing high-yield farms.",
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden mt-32 px-6 lg:px-24 py-10">
        {/* Heading */}
        <m.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-logo-green-500 text-center"
        >
          Farming isn’t just about growing crops,<br /> it’s about growing business.
        </m.h1>

        {/* Paragraph */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-logo-green-400 text-center my-6 max-w-2xl mx-auto"
        >
          At Zorp, we don’t just consult; we actively partner with farms to revolutionize their operations using cutting-edge technology and sustainable practices.
        </m.p>

        {/* How We Help Section */}
        <m.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-h4 font-medium text-logo-green-500 text-center mt-12"
        >
          How we help
        </m.h3>

        {/* Features Section */}
        <div className="flex flex-col gap-12 my-12">
          {[
            {
              img: img1,
              title: "Yield Optimization & Cost Reduction Strategies",
              description:
                "With real-time monitoring, data-driven insights, and precision farming techniques, we help you maximize yield while reducing input costs, ensuring sustainable profitability.",
            },
            {
              img: img2,
              title: "Customized Hydroponic & Polyhouse Setups",
              description:
                "Designing and constructing high-efficiency polyhouses and hydroponic systems tailored to your needs and climatic conditions. Our expertise ensures year-round production with minimal resource wastage.",
            },
            {
              img: img3,
              title: "Automation for Precision Agriculture",
              description:
                "From IoT-based climate control to automated nutrient delivery, we integrate smart technology for optimized farm visualization, water conservation, and high-yield automation.",
            },
          ].map((item, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              <img
                src={item.img}
                alt={item.title}
              />
              <div className="flex-1 text-left">
                <h5 className="font-poppins text-h6 text-logo-green-500 text-center font-semibold">{item.title}</h5>
                <p className="text-logo-green-400 mt-2 text-center">{item.description}</p>
              </div>
            </m.div>
          ))}
        </div>

        {/* Why Partner with Zorp */}
        <h3 className="text-h4 font-poppins font-medium text-center text-logo-green-500">Why partner with Zorp?</h3>
        
        {/* Animated Bullet Points */}
        <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row md:flex-wrap md:gap-3">
          {bulletPoints.map((point, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <BulletPoint content={point} />
            </m.div>
          ))}
        </div>

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-12"
        >
          <h5 className="text-2xl font-medium text-logo-green-500 text-center">
            Ready to scale your farm?
          </h5>
          <p className="text-logo-green-400 text-center max-w-lg">
            Let’s discuss how we can transform your farming business with technology and sustainability.
          </p>
          <Button buttonText="Transform your farm"
            onClick={() => navigate('/contact')}
          />
        </m.div>
      </main>
      <Footer />
    </>
  );
};

export default FUMPage;
