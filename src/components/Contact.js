import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

const Contact = ({

}) => {
  const clipboardRef = useRef(null);

  return (
    <section>
      <h2>Get in touch with me</h2>
      <div className="contact">
      <form>
        <div className="input-group">
          <input 
            type="text" 
            name="name" 
            id="name"
            autoComplete="off"
            required={true}
          />
          <label htmlFor="name">Your name</label>
        </div>
        <div className="input-group">
          <input 
            type="text"
            name="email"
            id="email"
            required={true}

            autoComplete="off"
          />
          <label htmlFor="email">Your email</label>
        </div>
        <div className="input-group textarea">
          <textarea 
            name="message"
            id="message"
            required={true}
          />
          <label htmlFor="message">Your message</label>
        </div>
        <Button 
          text={<><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Send!</>}
        />
      </form>
      <div className="email">
      <span>or email me directly at</span>
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