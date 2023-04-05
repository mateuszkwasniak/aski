import Navbar from "./components/navbar/Navbar";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Services from "./components/sections/services/Services";
import Gallery from "./components/sections/gallery/Gallery";
import Footer from "./components/sections/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
