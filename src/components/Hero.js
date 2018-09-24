import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import TitleComponent from '../components/TitleComponent'
import Typography from '../../node_modules/@material-ui/core/Typography'

export default class Hero extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: '1410px',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#fafafe'
        }}
      >
        <TitleComponent title="Welcome to WalkStevensFitness" />
        <Typography>This is the home page</Typography>
        <TextContent />
      </div>
    )
  }
}
