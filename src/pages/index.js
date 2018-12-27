import React, { Component } from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Header from '../components/header'

const styles = {
  section: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: '5%'
  },
  imageText: {
    maxWidth: '80%',
    marginTop: '5%',
    marginBottom: '2%',
    textAlign: 'left'
  }
}
const fillerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.`

export default class IndexPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Typography
          style={{ color: 'blue', textAlign: 'center', marginTop: '50px' }}
        >
          Test Page was deployed!!
        </Typography>
      </div>
    )
  }
}
