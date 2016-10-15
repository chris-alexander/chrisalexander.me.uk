import React, { PropTypes } from 'react';

const SafeLink = props => (
  <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>
);

SafeLink.propTypes = {
  children: PropTypes.node,
};

export default SafeLink;
