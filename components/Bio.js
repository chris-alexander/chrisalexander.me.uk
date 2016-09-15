import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}>
        <span dangerouslySetInnerHTML={{__html: config.authorBio}}/>
      </p>
    )
  }
}

export default Bio
