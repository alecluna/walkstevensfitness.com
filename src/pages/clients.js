import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import TitleComponent from '../components/TitleComponent'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Image from '../components/Image'
import Border from '../components/Border'

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
        <Hero text="Client Testimonies" />
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
        <Footer />
      </div>
    )
  }
}

export default Clients
