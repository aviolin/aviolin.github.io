import React, { useState } from "react"
import '../styles/normalize.css';
import '../styles/main.scss';

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skills from '../components/Skills';

import { projects } from '../data';

const IndexPage = () => {
  const [theme, setTheme] = useState("theme-dark");

  const toggleTheme = () => {
    setTheme(prev => prev === "theme-dark" ? "theme-light" : "theme-dark");
  }

  return (
    <div className={"theme-wrapper " + theme}>
      <div className="wrapper">
        <Header theme={theme} toggleTheme={toggleTheme}/>
      {/*  <main> */}
          <Hero />
          <Skills />
          <About />
          <div className="anchor" id="my-work"></div>
          <section className="full-bleed">

            <h2>Check out some of my work</h2>

            {projects.map((project, id) => {
              return (
                <Project 
                  key={project.title}
                  title={project.title}
                  screenshotType={project.screenshotType}
                  imageSrc={project.imageSrc}
                  description={project.description}
                  subdescription={project.technologies}
                  projectLink={project.liveLink}
                  repoLink={project.repoLink}
                  id={id}
                />
              );
            })}

          </section>
          <Contact />
        {/* </main> */}
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
