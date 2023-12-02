import './App.css';
import Capabilities from './components/Capabilities';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Productivity from './components/Productivity';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <Productivity />
    </>
  );
}

export default App;
