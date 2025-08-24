import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Equipment } from "./components/sections/Equipment";
import { Games } from "./components/sections/Games";
import Watched from "./components/sections/Watched";
import { Projects } from "./components/sections/Projects";
import Footer from "./components/sections/Footer";

import "./index.css";
import "./App.scss";
import './assets/fonts/fonts.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Equipment />
        <Games />
        <Watched />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;