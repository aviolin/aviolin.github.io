import React, { useState, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { gsap } from 'gsap';

const About = () => {
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const [doAnim, setDoAnim] = useState(true);

  const onIntersection = (entries) => {

    const [ entry ] = entries;
    if (!entry.isIntersecting || !doAnim) return;

    let tl = gsap.timeline();
    tl.set(pRef1.current, { visibility: "visible"});
    tl.set(pRef2.current, { visibility: "visible"});
    tl.from(pRef1.current, {duration: 2, autoAlpha: 0, delay: .2});
    tl.from(pRef2.current, {duration: 2, autoAlpha: 0}, "=-1.8");

    setDoAnim(false);
  }

  useIntersectionObserver(pRef1, onIntersection);

  return (
    <section className="about">
      <div className="anchor" id="about"></div>
      <h2>About me</h2>
      <div>
        <p ref={pRef1}>I am a web developer with experience building both the front and back-end of websites and applications. I love to solve problems, and programming allows me to tackle interesting problems each day.</p>
        <p ref={pRef2}>When I'm not programming, I work as a freelance violinist, performing in various ensembles throughout Colorado. With a musical background, I thoroughly enjoy creating applications that help make musicians’ lives easier.</p>
      </div>
    </section>
  );
}

export default About;