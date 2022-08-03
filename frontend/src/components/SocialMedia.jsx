
import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a rel="Linkendin" href="https://www.linkedin.com/in/david-vera-developer/" target="_blank">
      <BsLinkedin />
      </a>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
    <a rel="Linkendin" href="https://www.instagram.com/killyvera/" target="_blank">
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;

//<a rel="noopener noreferrer" href="http://url.com" target="_blank">Link Here</a>