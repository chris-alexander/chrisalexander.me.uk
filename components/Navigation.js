import React from 'react';
import {Link, IndexLink} from 'react-router';
import {prefixLink} from 'gatsby-helpers';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <IndexLink
          activeClassName="active"
          to={prefixLink('/')}
          >Home</IndexLink>
      </li>
      <li>
        <Link
          activeClassName="active"
          to={prefixLink('/about')}
          >About</Link>
      </li>
      <li>
        <Link
          activeClassName="active"
          to={prefixLink('/Blog')}
          >Blog</Link>
      </li>
      <li>
        <Link
          activeClassName="active"
          to={prefixLink('/portfolio')}
          >Portfolio</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
