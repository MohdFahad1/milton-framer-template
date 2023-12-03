import './App.css';
import Accordian from './components/Accordian';
import Capabilities from './components/Capabilities';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Productivity from './components/Productivity';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <Productivity />
      <Accordian />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
