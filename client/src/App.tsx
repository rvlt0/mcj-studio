import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
