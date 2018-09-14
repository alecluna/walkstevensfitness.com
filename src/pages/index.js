import React from 'react'
import TextContent from '../components/TextContent'
import TitleComponent from '../components/TitleComponent'
import Typography from '../../node_modules/@material-ui/core/Typography'

const IndexPage = () => (
  <div>
    <TitleComponent title="Welcome to WalkStevensFitness" />
    <Typography>This is the home page</Typography>
    <TextContent />
  </div>
)

export default IndexPage
