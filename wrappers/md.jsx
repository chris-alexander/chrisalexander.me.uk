import React, { PropTypes } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import ReadNext from '../components/ReadNext';
import { config } from '../config';

import '../css/zenburn.css';

const MarkdownWrapper = ({ route }) => {
  const post = route.page.data;
  return (
    <div className="markdown">
      <Helmet
        title={`${post.title} | ${config.blogTitle}`}
      />
      <h1 style={{ marginTop: 0 }}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
      <em>
        Posted {moment(post.date).format('MMMM D, YYYY')}
      </em>
      <hr />
      <ReadNext post={post} pages={route.pages} />
    </div>
  );
};

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
};

export default MarkdownWrapper;
