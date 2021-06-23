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

    //let tl = gsap.timeline();
    gsap.from(pRef1.current, {duration: 2, autoAlpha: 0, delay: .2});
    gsap.from(pRef2.current, {duration: 2, autoAlpha: 0, delay: .4});

    setDoAnim(false);
  }

  useIntersectionObserver(pRef1, onIntersection);

  return (
    <section className="about">
      <h2>About me</h2>
      <div>
        <p ref={pRef1}>I am a self taught programmer, with expertise building both the front and back-end of websites and applications. I love to solve problems, and programming allows me to tackle new and interesting problems each day.</p>
        <p ref={pRef2}>When I'm not programming, I work as a freelance violinist, performing in various ensembles throughout Colorado. With a musical background, I thoroughly enjoy creating products that help make musicians’ lives easier.</p>
      </div>
    </section>
  );
}

export default About;