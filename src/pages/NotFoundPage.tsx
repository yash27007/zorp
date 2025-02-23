import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

const NotFoundPage = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          className="text-[150px] font-poppins "
          initial={{ scale: 0 }}
          animate={{ scale: [0.5, 1.2, 1] }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl mb-4 text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Oops! The page you’re looking for can’t be found.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <Button
            buttonText="Return to Home"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NotFoundPage;
