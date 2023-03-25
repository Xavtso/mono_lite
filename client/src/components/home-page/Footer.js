import '../../styles/home-page/Footer.css'

const Footer = function () {
    return (
      <div className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <i className="footer__link" >
              About
            </i>
          </li>
          <li className="footer__item">
            <i className="footer__link" >
              Pricing
            </i>
          </li>
          <li className="footer__item">
            <i className="footer__link" >
              Terms of Use
            </i>
          </li>
          <li className="footer__item">
            <i className="footer__link" >
              Privacy Policy
            </i>
          </li>
          <li className="footer__item">
            <i className="footer__link" >
              Careers
            </i>
          </li>
          <li className="footer__item">
            <i className="footer__link" >
              Blog
            </i>
          </li>
          <li className="footer__item">
            <i className="footer__link" >
              Contact Us
            </i>
          </li>
        </ul>
        <img  src="../../images/icon.png" alt="Logo" className="footer__logo" />
        <p className="footer__copyright">
                &copy; Copyright by -- 
                
          <a
            className="footer__link twitter-link"
            
            href="https://www.instagram.com/v_havrona/"
          >
             Vitaliy Havrona 
          </a>
          -- Use for learning. Don't claim as your own product.
        </p>
      </div>
    );
}

export default Footer;