import React from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'

const TitleComponent = props => (
  <Typography
    style={{ color: 'black', textAlign: 'center', marginTop: '5%' }}
    variant="display1"
  >
    {props.title}
  </Typography>
)

export default TitleComponent
