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
        <header className="mb4">
          <h1 className="mt0 mb1 f2 lh-title">{post.title}</h1>
          <div className="mb2">
            { (!post.date) ? '' : <time dateTime={post.date}>
              {moment(post.date).format('DD MMM YYYY')}
            </time>}
          </div>
        </header>
        <section
          className="mb6 lh-copy"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </main>
  );
};

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
};

export default MarkdownWrapper;
