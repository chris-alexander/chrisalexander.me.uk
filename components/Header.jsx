import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import { config } from '../config';

import Navigation from './Navigation';

const Header = () => (
  <header className="tc pv4 pv5-ns">
    <h1 className="mt2 mb0 fw1 f1">
      <Link className="link black-80" to={prefixLink('/')}>
        { config.blogTitle }
      </Link>
    </h1>
    <h2 className="mt2 mb0 f6 fw4 ttu tracked">{ config.subTitle }</h2>
    <Navigation />
  </header>
);

export default Header;
