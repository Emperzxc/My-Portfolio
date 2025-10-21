import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Experience from './components/Experience'
import CustomCursor from "./components/CustomCursor";
import Certificates from "./components/Certificates";
import BackgroundParticles from "./components/BackgroundParticles.jsx";

function App() {
  return (
    <div className="relative bg-gray-900 text-white overflow-x-hidden">
      <BackgroundParticles />
      <Navbar />
      <main className="pt-16">
        <CustomCursor/>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App
