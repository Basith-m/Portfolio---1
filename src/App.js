import Header from './components/header/Header'
import Home from './components/home/Home';
import './App.css';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonial from './components/testimonials/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/scrollup';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
