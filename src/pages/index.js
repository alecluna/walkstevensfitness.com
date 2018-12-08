import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PopUpDialogue from '../components/PopUpDialogue'
import Image from '../components/Image'
import Border from '../components/Border'
import Dialog from '@material-ui/core/Dialog'

const styles = {
  section: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
    this.state = {
      open: true
    }
    this._delayPopUp = this._delayPopUp.bind(this)
  }

  componentDidMount() {
    this._popUpDialogue()
  }

  _toggleHidden = () => {
    this.setState({ open: !open })
  }

  _popUpDialogue = () => {
    setTimeout(this._delayPopUp, 2000)
  }

  _delayPopUp = () => {
    // return (
    //   <div>
    //     <Dialog modal={true} open={open} contentStyle={{ width: 900 }}>
    //       Test
    //     </Dialog>
    //   </div>
    // )
    window.alert('test')
  }

  render() {
    return (
      <div>
        <Hero text="Welcome to WalkStevenFitness" />
        <section
          style={{ marginTop: '10%', fontSize: '2em', fontWeight: '200' }}
        >
          <TextContent text="What I Do" />
        </section>

        <Border />
        <section style={styles.section}>
          <div style={{ maxWidth: '50%' }}>
            <Image />
          </div>
          <div style={{ maxWidth: '50%', marginTop: '5%', marginRight: '5%' }}>
            <TextContent text={fillerText} />
          </div>
        </section>
        <Border />
        <section style={styles.section}>
          <div
            style={{
              maxWidth: '50%',
              marginTop: '5%',
              marginLeft: '5%',
              marginBottom: '5%'
            }}
          >
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
