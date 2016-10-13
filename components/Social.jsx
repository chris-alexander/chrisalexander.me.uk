import React, { PropTypes } from 'react';
import { config } from '../config';

const SafeLink = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>
);

SafeLink.propTypes = {
  children: PropTypes.node,
};

const Social = () => (
  <ul>
    <li><SafeLink href={`//twitter.com/${config.social.twitter}`}>Twitter</SafeLink></li>
  </ul>
);

export default Social;


// li.nav__item
//  a(href="//twitter.com/#{ social.twitter }", target="_blank"): i.fa.fa-twitter
// li.nav__item
//  a(href="//github.com/#{ social.github }", target="_blank"): i.fa.fa-github
// li.nav__item
//  a(href="//codepen.io/#{ social.codepen }", target="_blank"): i.fa.fa-codepen
// li.nav__item
//  a(href="//www.linkedin.com/in/#{ social.linkedin}", target="_blank"): i.fa.fa-linkedin-square
