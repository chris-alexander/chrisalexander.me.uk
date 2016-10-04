import React, {Component} from 'react';
import {config} from 'config';

class Bio extends Component {
  render() {
    return (
      <p>
        <span dangerouslySetInnerHTML={{__html: config.authorBio}}/>
      </p>
    );
  }
}

export default Bio;
