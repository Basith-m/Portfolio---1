import Header from './components/header/Header'
import Home from './components/home/Home';
import './App.css';
import About from './components/about/About';
import Skill from './components/skills/Skill';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
      </main>
    </>
  );
}

export default App;
