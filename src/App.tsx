import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./components/Contact";
import Branches from "./pages/Branches";
import Footer from "./components/Footer";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // observe any animated elements currently in the DOM
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale",
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // re-run when path changes so newly rendered sections get observed
  }, [path]);

  // when navigating back to home, ensure we scroll to top so sections are visible
  useEffect(() => {
    if (path === "/") {
      window.scrollTo({ top: 0 });
    }
  }, [path]);

  if (path === "/gallery") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <GalleryPage />
        <Footer />
      </div>
    );
  }

  if (path === "/branches") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Branches />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
