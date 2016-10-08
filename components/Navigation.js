import React from 'react';
import {Link, IndexLink} from 'react-router';
import {prefixLink} from 'gatsby-helpers';

const Navigation = () => (
  <nav className="nav" role="navigation">
    <ul className="nav__list">
      <li className="nav__item">
        <IndexLink
          activeClassName="nav__item--selected"
          to={prefixLink('/')}
          >Home</IndexLink>
      </li>
      <li className="nav__item">
        <Link
          activeClassName="nav__item--selected"
          to={prefixLink('/about')}
          >About</Link>
      </li>
      <li className="nav__item">
        <Link
          activeClassName="nav__item--selected"
          to={prefixLink('/Blog')}
          >Blog</Link>
      </li>
      <li className="nav__item">
        <Link
          activeClassName="nav__item--selected"
          to={prefixLink('/portfolio')}
          >Portfolio</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
