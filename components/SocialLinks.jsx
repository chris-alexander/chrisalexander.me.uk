import React from 'react';
import SafeLink from './SafeLink';
import social from '../consts/social';

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
