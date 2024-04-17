import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Awards from "./components/Awards"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Awards/>
      <Skills/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
