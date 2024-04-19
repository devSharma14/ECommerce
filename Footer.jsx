import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <FontAwesomeIcon icon={faGooglePlay} />
        <FontAwesomeIcon icon={faApple} />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; Dev Sharma</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/dev_s14/">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="https://www.facebook.com/profile.php?id=100021563930551">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
