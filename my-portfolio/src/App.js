import React from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Skillbar from "./components/Skillbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <ProjectCard />
      <Skillbar />
      <Contact />
    </div>
  );
}

export default App;
