import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sites from './components/Sites';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Sites />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
