import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SimplifySection from "./components/Simplify";
import Testimonials from "./components/Tesremoinals";
import ScrollToTop from "../images/icons8-scroll-up-50.png";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        (document.querySelector(".To-top") as HTMLDivElement).style.display =
          "block";
      } else {
        (document.querySelector(".To-top") as HTMLDivElement).style.display =
          "none";
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <SimplifySection />
      <Footer />
      <div className="overlay"></div>
      <div className="To-top">
        <img
          src={ScrollToTop}
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
