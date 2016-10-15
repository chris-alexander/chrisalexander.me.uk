import React, { PropTypes } from 'react';
import social from '../consts/social';

const SafeLink = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>
);

SafeLink.propTypes = {
  children: PropTypes.node,
};

const SocialLinks = props => (
  <div {...props}>
    { social.map(item => (
      <SafeLink
        className="link dim black-80 dib pa2"
        key={item.name}
        href={item.link}
      >
        {item.name}
      </SafeLink>
    )) }
  </div>
);

export default SocialLinks;
