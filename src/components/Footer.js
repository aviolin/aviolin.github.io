import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

const singleYears = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]

const decades = [
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]

const getYear = () => {
  const year = new Date().getYear() + 1900;
  const decade = year.toString().slice(2, 3);
  const lastDigit = year.toString().slice(3, 4);
  return 'twenty' + decades[+decade - 2] + '' + (lastDigit > 0 ? singleYears[+lastDigit] : '');
}

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/arlo-adams/" target="_blank" rel="noreferrer" className="link"><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/aviolin/" target="_blank" rel="noreferrer" className="link"><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github</a>
        </li>
        <li>
          <a href="https://codepen.io/arlo-adams" target="_blank" rel="noreferrer" className="link"><FontAwesomeIcon icon={faCodepen} />&nbsp;&nbsp;Codepen</a>
        </li>
      </ul>
      <p className="copyright">&copy; Arlo Adams, {getYear()}</p>
    </footer>
  );
}

export default Footer;