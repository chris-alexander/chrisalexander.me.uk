import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';

import Navigation from './Navigation';

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <h1>
        <Link to={prefixLink('/')}>
          {config.blogTitle}
        </Link>
      </h1>
      <p className="tagline">{config.subTitle}</p>
      <Navigation/>
    </div>
  </header>
);

export default Header;
