import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import Helmet from 'react-helmet';
import access from 'safe-access';
import { config } from '../config';
import include from 'underscore.string/include'; // eslint-disable-line

const MainIndex = (props) => {
  const pageLinks = [];
  // Sort pages.
  const sortedPages = sortBy(props.route.pages, page => access(page, 'data.date')
  ).reverse();
  sortedPages.forEach((page) => {
    if (access(page, 'file.ext') === 'md' && include(page.path, '/articles')) {
      const title = access(page, 'data.title') || page.path;
      pageLinks.push(
        <li key={page.path}>
          <Link className="link black-80" to={prefixLink(page.path)}>{title}</Link>
        </li>
      );
    }
  });
  return (
    <div className="center">
      <Helmet
        title={config.blogTitle}
        meta={[
          { name: 'description', content: 'Sample blog' },
          { name: 'keywords', content: 'blog, articles' },
        ]}
      />
      <ul>
        {pageLinks}
      </ul>
    </div>
  );
};

MainIndex.propTypes = {
  route: PropTypes.object,
};

export default MainIndex;
