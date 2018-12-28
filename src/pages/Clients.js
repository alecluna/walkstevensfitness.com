import React, { Component } from 'react'
import TextContent from '../components/textcontent'
import Hero from '../components/hero'
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
  }
}

const fillerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum - Ally White`

class Clients extends Component {
  render() {
    return (
      <div>
        <Hero text="Client Testimonials" />
        <section
          style={{
            marginTop: '10%',
            fontSize: '2em',
            fontWeight: '200'
          }}
        >
          <TextContent text="What Clients Are Saying" />
        </section>
        <Border />
        <section style={styles.section}>
          <div style={{ maxWidth: '50%' }}>
            <Image />
          </div>
          <div style={{ maxWidth: '50%', marginTop: '5%', marginRight: '5%' }}>
            <TextContent text="Walker is an amazing trainer, I've progressed extrememly rapidly through his programs - Jake Long" />
          </div>
        </section>
        <Border />

        <section style={styles.section}>
          <div style={{ maxWidth: '50%', marginTop: '5%' }}>
            <TextContent text={fillerText} />
          </div>
          <div style={{ maxWidth: '50%', marginRight: '5%' }}>
            <Image />
          </div>
        </section>
      </div>
    )
  }
}

export default Clients
