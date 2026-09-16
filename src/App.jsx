import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Experience from './components/Experience';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">A</span>
          <span className="brand-name">Amos Samuel</span>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="https://wa.me/2349157818089" target="_blank" rel="noreferrer">
          Let&apos;s Talk
        </a>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Experience />
        <GitHubSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;
