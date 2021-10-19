import React from 'react';
import { faFacebook , faGithub, faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
        <div className="container-fluid">
         <div className="contract pt-5 text-center fs-1">
           <h3>Contract Us</h3>
           <FontAwesomeIcon className="m-4" icon={faFacebook} />
           <FontAwesomeIcon className="m-4" icon={faGithub} />
           <FontAwesomeIcon className="m-4" icon={faInstagram} />
           <FontAwesomeIcon className="m-4" icon={faTwitter} />

         </div>
         <h5>Providing app and web based medical assistance services at customers’ fingertip. We, with the help of state of art technology & expert professional of relevant fields, strive to serve you in your medical necessities aiming to ensure better lives of our senior citizen and you, of course</h5>
      </div>
      <div className="copyright pt-5">
        <p>Copyright 2021. All Right Reserved</p>
      </div>
        </div>
    );
};

export default Footer;