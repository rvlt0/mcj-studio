import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sites from './components/Sites';
import AboutUs from './components/AboutUs';
import Project from './components/Project';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { SyntheticEvent } from 'react';

function App() {
  const handleShowIcon = (e: Event) => {
    const scrollTop = document.documentElement.scrollTop;
    const icon = document.getElementById("arrowBtn");

    if (icon) {
      // If the user passes the hero component when scrolling then it will show the arrow button at the bottom
      if (scrollTop > 300) {
        icon.style.display = "block";
        console.log("era pra ta block");

      } else {
        icon.style.display = "none";
      }
    }

  }

  window.addEventListener("scroll", handleShowIcon)

  const handleScrollWeb = (e: SyntheticEvent) => {
    const header = document.getElementById("inicio");
    const hero = document.getElementById("hero");

    const windowWidth = document.documentElement.clientWidth;

    // If clientWidth of Window is less than xs responsive design provide by tailwind
    // The header will be fixed, so we can't scroll to that component but to Hero
    if (windowWidth < 640) {
      hero?.scrollIntoView({ block: "end", behavior: "smooth" });
    } else {
      header?.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }

  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Sites />
      <AboutUs />
      <Project />
      <Footer />
      <FontAwesomeIcon id="arrowBtn" onClick={handleScrollWeb} icon={faArrowUp} className="ease-in duration-300 animate-bounce hidden fa-xl fixed right-5 bottom-5 px-3 py-2 hover:bg-indigo-400 cursor-pointer hover:text-white dark:bg-white bg-black rounded-full text-white dark:text-black" />
    </div>
  );
}

export default App;
