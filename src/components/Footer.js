import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href=""><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;LinkedIn</a>
        </li>
        <li>
          <a href=""><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github</a>
        </li>
        <li>
          <a href=""><FontAwesomeIcon icon={faCodepen} />&nbsp;&nbsp;Codepen</a>
        </li>
      </ul>
      <p className="copyright">&copy; Arlo Adams, twentytwentyone</p>
    </footer>
  );
}

export default Footer;