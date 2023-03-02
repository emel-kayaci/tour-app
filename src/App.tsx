import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import OurTours from "@/scenes/ourTours";
import Contact from "@/scenes/contact";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <OurTours setSelectedPage={setSelectedPage}></OurTours>
      <Contact setSelectedPage={setSelectedPage}></Contact>
      <Footer setSelectedPage={setSelectedPage}></Footer>
    </div>
  );
}

export default App;
