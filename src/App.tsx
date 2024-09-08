import { Toaster } from "sonner";
import { About } from "./components/About";
import { Companies } from "./components/Companies";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="bg-primary font-main min-h-screen flex flex-col">
        <Toaster richColors />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Companies />
      <Footer />
    </div>
  );
}
