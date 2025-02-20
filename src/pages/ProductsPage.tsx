import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "/public/Images/Products/1.png";
import img2 from "/public/Images/Products/2.png";
import img3 from "/public/Images/Products/3.png";
import { Button } from "../components/ui/button";
import { motion as m } from "framer-motion";
import { BulletPoint } from "../components/ui/bulltetPoint";
import { useNavigate } from "react-router";
import { VeggieData } from "../constants/data";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="overflow-hidden mt-32 px-6 lg:px-24 py-10">
        <m.h1
          className="text-h3 font-poppins text-logo-green-500 font-medium text-center lg:text-h2"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Smart Agri Infrastructure & Quality Produce
        </m.h1>

        <m.p
          className="text-para text-logo-green-500 my-10 text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          At Zorp, we specialize in cutting-edge agricultural infrastructure solutions and premium-quality fresh produce for B2B clients across India.
        </m.p>

        <m.h3 
          className="text-center text-h5 font-poppins font-medium text-logo-green-500"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Infrastructure Solutions
        </m.h3>

        <ul className="flex flex-col gap-10 items-center justify-center my-10 w-full max-w-6xl mx-auto">
          {[{ img: img1, title: "Polyhouse Construction", description: "Custom-built, climate-controlled structures for consistent high-yield farming.", bullets: ["Precision Engineering: Designed to withstand diverse climatic conditions.", "Optimal Climate Control: Reduces temperature fluctuations and external environmental impacts.", "Year-Round Farming: Grow high-value crops irrespective of the season.", "Nationwide service—no matter where your farm is located, we can help."] },
            { img: img2, title: "Hydroponic & Aquaponic Farming", description: "Soil-free, high-nutrient farming for superior-quality produce.", bullets: ["Water-Efficient Cultivation: Uses 90% less water than traditional methods.", "Higher Yield, Faster Growth: Plants grow 30-50% faster in controlled environments.", "Pesticide-Free & Sustainable: No soil contamination, no chemical fertilizers.", "Scalable Solutions: Custom setups for urban, commercial, and rural farms."] },
            { img: img3, title: "Automation & Smart Farming", description: "Data-driven technology for precision farming and higher profitability.", bullets: ["IoT-Based Monitoring: Real-time tracking of temperature, humidity, soil moisture, and nutrients.", "Automated Irrigation Systems: Smart sensors to reduce water wastage and boost efficiency.", "Remote-Controlled Operations: Monitor and adjust settings from anywhere.", "Data-Driven Farming: Data-driven insights for yield prediction and crop optimization."] }].map((item, index) => (
              <m.li
                key={index}
                className="flex flex-col lg:flex-row items-center gap-10 mt-10 w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <img src={item.img} alt={item.title} className="w-full max-w-[400px] h-[300px] rounded-2xl object-cover" />
                <div className="text-left max-w-xl">
                  <h4 className="font-poppins text-h6 font-medium my-2 text-logo-green-500">{item.title}</h4>
                  <p className="font-para text-logo-green-500">{item.description}</p>
                  {item.bullets.map((bullet, i) => (
                    <BulletPoint key={i} content={bullet} />
                  ))}
                </div>
              </m.li>
            ))}
        </ul>

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="font-poppins font-medium text-logo-green-500">
            Looking to build a smart farm? Let’s discuss your project.
          </h3>
          <Button onClick={() => navigate("/contact")} buttonText="Get a free consultation" />
        </div>

        <h3 className="text-center text-h6 font-poppins font-medium text-logo-green-500 my-20">
          Fresh Produce (B2B Supply)
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {VeggieData.map((item) => (
            <m.div
              key={item.id}
              className="flex flex-col items-center gap-4 p-4 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img src={item.image} alt={item.name} className="w-full max-w-[200px] h-[200px] rounded-lg object-cover" />
              <h4 className="font-poppins text-h6 font-medium text-logo-green-500">{item.name}</h4>
            </m.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;