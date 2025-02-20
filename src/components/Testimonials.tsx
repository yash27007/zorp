import { motion as m } from "framer-motion";
import { Testimonials as testimonialsData } from "../constants/data";

const Testimonials = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center pt-14 px-4 lg:px-24">
      {/* Title */}
      <m.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-h4 font-semibold text-logo-green-700 mb-10 text-center font-poppins"
      >
        Let’s Hear it From Our Clients
      </m.h4>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {testimonialsData.map((testimonial) => (
          <m.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: testimonial.id * 0.2 }}
            viewport={{ once: true }}
            className="p-6  rounded-2xl shadow-md border border-logo-green-600 text-center"
          >
            <p className="text-body text-logo-green-500 mb-4">
              "{testimonial.content}"
            </p>
            <h5 className="text-h6 font-semibold text-logo-green-700">
              {testimonial.author}
            </h5>
            <span className="text-sm text-logo-green-400">{testimonial.location}</span>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
