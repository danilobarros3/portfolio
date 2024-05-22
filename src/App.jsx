import Navbar from "./components/Navbar"
import Info from "./components/Info";
import About from "./components/About";
import Tecnologies from "./components/Tecnologies";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
// import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Info />
        <About />
        <Tecnologies />
        <Skills />
        <Projects/>
        {/* <Register/> */}
        <Footer />
      </div>
    </div>
  )
}

export default App;
