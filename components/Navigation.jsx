import React from 'react';
import {Link, IndexLink} from 'react-router';
import {prefixLink} from 'gatsby-helpers';

const Navigation = () => (
  <nav className="bt bb tc mw7 center mt4">
    <IndexLink
      className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l"
      activeClassName="active"
      to={prefixLink('/')}
      >Home</IndexLink>
    <Link
      className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l"
      activeClassName="active"
      to={prefixLink('/portfolio/')}
      >Portfolio</Link>
    <Link
      className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l"
      activeClassName="active"
      to={prefixLink('/articles/')}
      >Articles</Link>
    <Link
      className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l"
      activeClassName="active"
      to={prefixLink('/about/')}
      >About</Link>
  </nav>
);

export default Navigation;
