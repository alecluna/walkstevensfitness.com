import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import Footer from '../components/Footer'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Card from '../../node_modules/@material-ui/core/Card'
import CardContent from '../../node_modules/@material-ui/core/CardContent'
import Hero from '../components/Hero'
import PopUpDialogue from '../components/PopUpDialogue'
import Image from '../components/Image'

const styles = {
  section: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    borderBottom: '1px solid #A0A0A0',
    paddingBottom: '5%'
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

  componentDidMount() {
    setInterval(this._popUpDialogue(), 5000)
  }

  _popUpDialogue() {
    setTimeout(() => {
      this._delayPopUp()
    }, 2000)
  }

  _delayPopUp() {
    console.log('pop up fired at 2 seconds')
    return (
      <div>
        <PopUpDialogue open="true" />
      </div>
    )
  }

  render() {
    return (
      <div>
        <Hero text="Welcome to WalkStevenFitness" />
        <section
          style={{ marginTop: '5%', fontSize: '3em', fontWeight: '200' }}
        >
          <TextContent text="What I Do" />
        </section>
        <section style={styles.section}>
          <div style={{ maxWidth: '50%', marginRight: '5%' }}>
            <Image />
          </div>
          <div style={{ maxWidth: '50%', marginTop: '5%' }}>
            <TextContent text={fillerText} />
          </div>
        </section>
        <section style={styles.section}>
          <div style={{ maxWidth: '50%', marginTop: '5%', marginRight: '5%' }}>
            <TextContent text={fillerText} />
          </div>
          <div style={{ maxWidth: '50%' }}>
            <Image />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
