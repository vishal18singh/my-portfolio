import { profile, skills, projects } from "./components/data";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Skills from "./components/Skills";
import Project from "./components/Projects";
function App() {
  return (
    <>
    <Navbar profile = {profile}/>
      <Hero profile={profile} />
      <About skills={skills}/>
    <Skills skills={skills}/>
    <Project projects={projects}/>
    </>
  );
}

export default App;