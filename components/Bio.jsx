import React from 'react';
import { config } from '../config';

const Bio = () => (
  <p>
    <span dangerouslySetInnerHTML={{ __html: config.authorBio }} />
  </p>
);

export default Bio;
