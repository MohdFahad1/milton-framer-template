import './App.css';
import Accordian from './components/Accordian';
import Capabilities from './components/Capabilities';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Productivity from './components/Productivity';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <Productivity />
      <Accordian />
      <Pricing />
    </>
  );
}

export default App;
