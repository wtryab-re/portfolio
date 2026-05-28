import Header from "./components/Header";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background_GIF from "./components/Background_GIF";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  const [isCanvasReady, setisCanvasReady] = useState(false);
  const [render, setrender] = useState(false);

  useEffect(() => {
    const handleLoadingSequence = () => {
      if (isCanvasReady) {
        setTimeout(() => setrender(true), 200);
        setTimeout(() => setisLoading(false), 500); // Triggers the fade-out
      }
    };

    if (document.readyState === "complete") {
      handleLoadingSequence();
    } else {
      const handleWindowLoad = () => handleLoadingSequence();
      window.addEventListener("load", handleWindowLoad);
      return () => window.removeEventListener("load", handleWindowLoad);
    }
  }, [isCanvasReady]);

  return (
    <>
      <Loader isLoading={isLoading} />

      <div className="fixed inset-0 z-[-100]">
        <Toaster position="top-right" reverseOrder={false} />
        <Background_GIF setisCanvasReady={setisCanvasReady} />
      </div>

      {render && (
        <div
          className={`transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}
        >
          <Header />
          <Home />
          <hr className="mx-10 my-10" />
          <Technologies />
          <hr className="mx-10 my-10 mt-15" />
          <Projects />
          <hr className="mx-10 my-10" />
          <About />
          <hr className="mx-10 my-10" />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
