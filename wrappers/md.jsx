import React, { PropTypes } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { config } from '../config';

import '../css/zenburn.css';

const MarkdownWrapper = ({ route }) => {
  const post = route.page.data;
  return (
    <article className="pa3 pa5-ns markdown">
      <Helmet
        title={`${post.title} | ${config.blogTitle}`}
      />
      <h1>{post.title}</h1>
      <section className="f5 lh-copy measure" dangerouslySetInnerHTML={{ __html: post.body }} />
      <em>
        {`Posted ${moment(post.date).format('MMMM D, YYYY')}`}
      </em>
    </article>
  );
};

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
};

export default MarkdownWrapper;
