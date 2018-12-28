import React, { Component } from 'react'
import Hero from '../components/hero'
import PopUpDialogue from '../components/popupdialogue'
import TextContent from '../components/textcontent'
import Border from '../components/border'
import Image from '../components/image'

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
    textAlign: 'left'
  },
  sectionHeaderText: {
    marginTop: '5%',
    fontSize: '2em',
    fontWeight: '200'
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
        <section style={styles.sectionHeaderText}>
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
        <section style={styles.sectionHeaderText}>
          <TextContent text="What I Offer" />
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
      </div>
    )
  }
}
