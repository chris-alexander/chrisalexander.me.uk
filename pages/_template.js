import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Container} from 'react-responsive-grid';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';

class Template extends Component {
  render() {
    const {location, children} = this.props;
    let header;
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1>
          <Link to={prefixLink('/')}>
            {config.blogTitle}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3>
          <Link to={prefixLink('/')}>
            {config.blogTitle}
          </Link>
        </h3>
      );
    }
    return (
      <Container>
        {header}
        {children}
      </Container>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
};

export default Template;
