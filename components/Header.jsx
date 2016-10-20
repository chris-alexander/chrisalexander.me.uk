import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import { config } from '../config';

import Navigation from './Navigation';

const Header = () => (
  <header className="ph3 center tc">
    <h1 className="mt2 mb0 fw1 f1 lh-solid black">
      <Link className="link black" to={prefixLink('/')}>
        { config.blogTitle }
      </Link>
    </h1>
    <Navigation />
  </header>
);

export default Header;
