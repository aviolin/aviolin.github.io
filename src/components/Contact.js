import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faParagraph } from '@fortawesome/free-solid-svg-icons';
import { faClone } from '@fortawesome/free-regular-svg-icons';

import Button from './Button';

const Contact = ({

}) => {
  return (
    <section>
      <h2>Get in touch with me</h2>
      <div className="contact">
      <p>Reach out via <FontAwesomeIcon icon={faClone} /> <b>arlo.s.adams@gmail.com</b> or use the contact form below:</p>
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
      </div>
    </section>
  )
}

export default Contact;