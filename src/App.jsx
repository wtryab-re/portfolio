import Header from "./components/Header";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import CinematicBackground from "./components/CinematicBackground";
import Background_GIF from "./components/Background_GIF";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  {
    /*
    
    warda-dev
    sticky floating header with a glass background, only text
    has home, technologies, projects, about me, contact sections

    technologies section with icons and names of technologies used in projects

    projects ive made with descriptions, tech stack, and links to github repos and live demos

    about me section with a short bio and my interests on the left and work experience on the right and profile picture
    
    say hello section that has a contact me form -- shows that ik backend-- link it to my email

    footer with email, github, linkedin, and twitter icons that link to the respective profiles
    
    made with love
    
    load after all assets are loaded
    
    
    */
  }
  return (
    <>
      <div className="fixed inset-0 z-[-100] ">
        <Toaster />
        {/* <CinematicBackground></CinematicBackground> */}
        <Background_GIF />
      </div>
      <Header />

      <Home></Home>
      <Technologies></Technologies>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
