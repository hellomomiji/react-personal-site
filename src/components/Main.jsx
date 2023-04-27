import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience"
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import "../static/css/Main.css"


function Main({setPage, page}) {
  
  return (
    <main className="main" id="main">
      {(page === "Home" && <Home setPage={setPage}/>)}
      {(page === "About" && <About />)}
      {(page === "Experience" && <Experience />)}
      {(page === "Projects" && <Projects />)}
      {(page === "Contact" && <Contact />)}

    </main>
    )
}

export default Main