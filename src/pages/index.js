import React, { useState, useEffect, useRef } from "react"
import '../styles/normalize.css';
import '../styles/main.scss';

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skills from '../components/Skills';

import useIntersectionObserver from "../hooks/useIntersectionObserver";

import { gsap } from 'gsap';

import { projects } from '../data';

const IndexPage = () => {
  const containerRef = useRef(null);
  useIntersectionObserver(containerRef, () => console.log("BLAH"));

  return (
    <div className="wrapper">
      <Header />
     {/*  <main> */}
        <Hero />
        <Skills />
        <section className="full-bleed">
          <h2 ref={containerRef}>Check out some of my projects</h2>

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
  )
}

export default IndexPage
