import "./App.css";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const randomNumber = Math.floor(Math.random() * 5);
  return (
    <div className="App">
      <Navbar number={randomNumber} />
      <Landing number={randomNumber} />
      <About />
      <Projects number={randomNumber} />
      <ContactForm number={randomNumber} />
    </div>
  );
}

export default App;
