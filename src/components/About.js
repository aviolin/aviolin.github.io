import React, { useState, useRef, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import Splitting from 'splitting';

const About = () => {
  const textRef = useRef(null);
  const [doAnim, setDoAnim] = useState(true);

  const onIntersection = (entries) => {

    const [ entry ] = entries;
    if (!entry.isIntersecting || !doAnim) return;

    let tl = gsap.timeline();
    tl.set(textRef.current, { visibility: "visible"});
    textRef.current.classList.add("shown");

    setDoAnim(false);
  }

  useIntersectionObserver(textRef, onIntersection);

  useEffect(() => {
    Splitting({ by: "lines" });
  }, [])

  return (
    <section className="about">
      <div className="anchor" id="about"></div>
      <h2>About me</h2>
      <div data-splitting="" ref={textRef}>
        <p>I am a web developer with experience building both the front and back-end of websites and applications. I love to solve problems, and programming allows me to tackle interesting problems each day.</p>
        <p>When I'm not programming, I work as a freelance violinist, performing in various ensembles throughout Colorado. With a musical background, I thoroughly enjoy creating applications that help make musicians’ lives easier.</p>
      </div>
    </section>
  );
}

export default About;