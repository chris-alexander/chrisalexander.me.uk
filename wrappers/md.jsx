import React, { PropTypes } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { config } from '../config';

import '../css/highlight.css';

const MarkdownWrapper = ({ route }) => {
  const post = route.page.data;
  return (
    <main className="markdown">
      <Helmet
        title={`${post.title} | ${config.blogTitle}`}
      />
      <article className="center measure-wide f5 pv5 lh-copy ph2">
        <h1 className="f1 lh-title">{post.title}</h1>
        { (!post.date) ? '' : <time>
          {moment(post.date).format('MMMM D, YYYY')}
        </time>}
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </main>
  );
};

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
};

export default MarkdownWrapper;
