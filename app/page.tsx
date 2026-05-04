import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechCards from './components/TechCards';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <TechCards />
      <Footer />
    </div>
  );
}