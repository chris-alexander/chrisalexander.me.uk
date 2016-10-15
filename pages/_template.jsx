import React, { PropTypes } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import 'tachyons';

const Template = props => (
  <div>
    <Header />
    { props.children }
    <Footer />
  </div>
);

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
