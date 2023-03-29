import React from "react";
import '../../styles/home-page/Footer.css'
import icon from '../../images/icon.png'

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="#">
            About
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Pricing
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Terms of Use
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Privacy Policy
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Careers
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Blog
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <img src={icon} alt="Logo" className="footer__logo" />
      <p className="footer__copyright">
        © Copyright by
        <a
          className="footer__link twitter-link"
          target="_blank"
          href="https://www.instagram.com/v_havrona/"
        >
          Vitaliy Havrona
        </a>
        . Don't claim as your own product.
      </p>
    </footer>
  );
}

export default Footer;
