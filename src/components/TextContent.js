import React, { Component } from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'

export default class TextContent extends Component {
  render() {
    return (
      <div>
        <Typography
          style={{ textAlign: 'center', fontSize: '1em', fontWeight: '200' }}
          variant="body2"
        >
          {this.props.text}
        </Typography>
      </div>
    )
  }
}
