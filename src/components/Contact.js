import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap';

const Contact = ({

}) => {
  const clipboardRef = useRef(null);
  const submitRef = useRef(null);

  const [successAnim, setSuccessAnim] = useState(gsap.timeline({ paused: true}));
  const [errorAnim, setErrorAnim] = useState(gsap.timeline({ paused: true}));

  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState(null);

  const handleInput = (e) => {
    const name = e.target.name;
    setInputs(prev => ({
      ...prev,
      [name]: e.target.value
    }));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!successAnim.isActive()) {
      successAnim.restart();
    }
  }

  const submitAnim = () => {
    let btnText = submitRef.current.querySelector(".text");
    let btnCheck = submitRef.current.querySelector(".checkmark");
    let btnEnvelope = submitRef.current.querySelector(".envelope");

    successAnim.to(btnEnvelope, {duration: .8, x: -10, transform: "rotate(-20deg)", ease: "ease-in-out"});
    successAnim.to(btnEnvelope, {duration: 1, opacity: 0, x: 1000, y: -200, transform: "rotate(0deg)", ease: "ease-out"});
    successAnim.to(btnText, {duration: 1, opacity: 0}, "=-1");
    successAnim.to(btnCheck, {duration: 1, opacity: 1}, "=0");
    successAnim.to(btnCheck, {duration: 1, opacity: 0, delay: 1}, "=0");
    successAnim.to(btnText, {duration: 1, opacity: 1}, "=0");
    successAnim.set(btnEnvelope, {x: 0, y: 0, transform: "rotate(0deg)"}, "=-1");
    successAnim.to(btnEnvelope, {opacity: 1}, "=-1");
  }

  useEffect(() => {
    submitAnim();
  }, []);

  return (
    <section>
      <div className="anchor" id="contact"></div>

      <h2>Get in touch with me</h2>

      <div className="contact">
        <form onSubmit={(e) => sendEmail(e)}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              id="name"
              value={inputs.name}
              autoComplete="off"
              required={true}
              onChange={handleInput}
            />
            <label htmlFor="name">Your name</label>
          </div>
          <div className="input-group">
            <input 
              type="text"
              name="email"
              id="email"
              value={inputs.email}
              required={true}
              onChange={handleInput}
              autoComplete="off"
            />
            <label htmlFor="email">Your email</label>
          </div>
          <div className="input-group textarea">
            <textarea 
              name="message"
              id="message"
              value={inputs.message}
              required={true}
              onChange={handleInput}
            />
            <label htmlFor="message">Your message</label>
          </div>
          <button className="contact-btn" ref={submitRef}>
            <div className="envelope"><FontAwesomeIcon icon={faEnvelope}/></div>
            <span className="text">&nbsp;&nbsp;Send</span>
            <span className="checkmark"><FontAwesomeIcon icon={faCheck}/>&nbsp;&nbsp;Success</span>
          </button>
          {
            errors ? <p>{errors}</p> : null
          }
        </form>
        <div className="email">
        <span>Or email me directly at:</span>
        <button className="copy-btn"
          onClick={() => {
            navigator.clipboard.writeText("arlo.s.adams@gmail.com");
            clipboardRef.current.classList.add("animate");
            setTimeout(() => {
              clipboardRef.current.classList.remove("animate");
            }, 1000);
          }}
          ref={clipboardRef}
        >arlo.s.adams@gmail.com</button>
        </div>
      </div>
    </section>
  )
}

export default Contact;