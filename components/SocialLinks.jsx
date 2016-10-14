import React, { PropTypes } from 'react';
import social from '../consts/social';

const SafeLink = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>
);

SafeLink.propTypes = {
  children: PropTypes.node,
};

const SocialLinks = () => (
  <ul>
    { social.map((item, index) => (
      <li><SafeLink key={index} href={item.link}>{item.name}</SafeLink></li>
    )) }
  </ul>
);

export default SocialLinks;
