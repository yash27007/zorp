import { BulletPoint } from "./ui/bulltetPoint";
import { Button } from "./ui/button";
import { Warehouse, Leaf, Sprout } from "lucide-react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router";

const Features = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="min-h-screen w-screen flex flex-col items-center pt-14 px-4">
      <m.h2 
        className="font-poppins text-h3 font-medium text-logo-green-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Why Zorp ?
      </m.h2>

      <m.div 
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Grid 1 */}
        <m.div 
          className="border-logo-blue-900 border rounded-[40px] p-6 flex flex-col items-center flex-1"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="text-h5 text-logo-green-500 text-center font-poppins font-semibold mb-4">
            Why Choose us ?
          </h4>
          <BulletPoint content="India’s Trusted Partner for Advanced Agri Infrastructure" />
          <BulletPoint content="End-to-End Polyhouse, Hydroponics & Automation Solutions" />
          <BulletPoint content="Helping Farms Scale with Technology & Expertise" />
        </m.div>

        {/* Grid 2 */}
        <m.div 
          className="border-logo-blue-900 border rounded-[40px] p-6 flex flex-col items-center justify-center flex-1"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h4 className="text-h5 text-logo-green-500 text-center font-poppins font-semibold mb-2">
            Fresh Produce
          </h4>
          <p className="text-logo-green-900 text-center mb-4">
            25+ Premium Vegetables, Grown Sustainably in the Nilgiris & Beyond.
          </p>
          <Button variant="primary" 
          onClick={()=>{
            navigate('/products');
          }}
          buttonText="Check out Our Products" />
        </m.div>

        {/* Grid 3 (Spanning 2 Columns) */}
        <m.div 
          className="border-logo-blue-900 border rounded-[40px] p-6 flex flex-col items-center justify-center flex-1 md:col-span-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h4 className="text-h5 text-logo-green-500 text-center font-poppins font-semibold mb-4">
            Featured Infrastructure
          </h4>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center">
            <BulletPoint content="Polyhouse Construction.">
              <Warehouse color="#051700" size={20} />
            </BulletPoint>
            <BulletPoint content="Hydroponic & Aquaponic Systems.">
              <Leaf color="#051700" size={20} />
            </BulletPoint>
            <BulletPoint content="Smart Farm Automation.">
              <Sprout color="#051700" size={20} />
            </BulletPoint>
          </div>
        </m.div>
      </m.div>
    </section>
  );
};

export default Features;
