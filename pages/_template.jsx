import React, { PropTypes } from 'react';

import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import 'tachyons';

const Template = props => (
  <div>
    <Header />
    { props.children }
    <SocialLinks />
  </div>
);

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
