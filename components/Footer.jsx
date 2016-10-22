import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="pv4 ph3 ph5-ns tc">
    <SocialLinks />
    <p>
      &copy; { new Date().getFullYear() } Chris Alexander
    </p>
  </footer>
);

export default Footer;
