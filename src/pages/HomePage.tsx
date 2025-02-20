import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from '../components/Testimonials.tsx'
import Footer from '../components/Footer.tsx'
const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-16">
        <Hero />
        <Features />
        <About />
        <Testimonials/>
        <Footer/>
      </main>
    </>
  );
};

export default HomePage;
