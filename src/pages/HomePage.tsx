import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-16">
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default HomePage;
