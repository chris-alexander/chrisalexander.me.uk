import React, { PropTypes } from 'react';

import Header from '../components/Header';
import 'tachyons';

const Template = props => (
  <div>
    <Header />
    { props.children }
  </div>
);

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
