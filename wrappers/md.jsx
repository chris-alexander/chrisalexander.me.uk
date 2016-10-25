import React, { PropTypes } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { config } from '../config';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line

import '../css/markdown.css';
import '../css/zenburn.css';

const MarkdownWrapper = (props) => {
  const { route } = props;
  const post = route.page.data;
  const postUrl = config.blogUrl.slice(0, -1) + prefixLink(post.path);
  const summary = post.summary; // need to write function to extract
  const feature = post.feature; // featured image, full URL
  return (
    <main>
      <Helmet
        meta={[
          { property: 'description', content: 'summary' },
          { property: 'og:title', content: post.title },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: postUrl },
          { property: 'og:image', content: feature },
          { property: 'og:description', content: summary },
          { property: 'og:site_name', content: config.blogTitle },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:site', content: config.authorTwitter },
          { property: 'twitter:title', content: post.title },
          { property: 'twitter:description', content: summary },
          { property: 'twitter:creator', content: config.authorTwitter },
          { property: 'twitter:image', content: feature },
        ]}
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
          className="mb6 lh-copy markdown"
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
