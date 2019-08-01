import React from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'

const TextContent = props => (
  <div>
    <Typography
      style={{ textAlign: 'center', fontSize: '1em', fontWeight: '200' }}
    >
      {props.text}
    </Typography>
  </div>
)

export default TextContent
