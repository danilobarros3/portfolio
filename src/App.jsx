import Navbar from "./components/Navbar"
import Info from "./components/Info";
import About from"./components/About";
import Tecnologies from "./components/Tecnologies";
import Skills from "./components/Skills";
import Register from "./components/Register";
import Footer from "./components/Footer";
function App() {
  return(
    <div className="App">
        <Navbar/>
      <div className="container">
        <Info/>
        <About/>
        <Tecnologies/>
        <Skills/>
        <Register/>
        <Footer/>
        </div>
    </div>
  )
}

export default App;
