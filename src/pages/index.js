import React, { Component } from 'react'
import TextContent from '../components/textcontent'
import Footer from '../components/footer'
import Hero from '../components/hero'
import PopUpDialogue from '../components/popupdialogue'
import Image from '../components/image'
import Border from '../components/border'

const styles = {
  section: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: '5%'
  },
  imageText: {
    maxWidth: '80%',
    marginTop: '5%',
    marginBottom: '5%'
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
        <PopUpDialogue />
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
          <div style={styles.imageText}>
            <TextContent text={fillerText} />
          </div>
        </section>
        <Border />
        <section style={styles.section}>
          <div style={styles.imageText}>
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
