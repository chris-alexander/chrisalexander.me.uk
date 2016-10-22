import React from 'react';
import SafeLink from './SafeLink';
import social from '../consts/social';

const SocialLinks = props => (
  <div {...props}>
    { social.map(network => (
      <SafeLink
        className="link dim black-80 dib pa2 f3"
        key={network.name}
        title={network.name}
        href={network.link}
      >
        <network.icon />
      </SafeLink>
    )) }
  </div>
);

export default SocialLinks;
