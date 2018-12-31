import React, { Component } from 'react'
import TextContent from '../components/textcontent'
import Hero from '../components/hero'
import Image from '../components/image'
import Border from '../components/border'

const styles = {
  section: {
    margin: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  imageText: {
    maxWidth: '50%',
    textAlign: 'left',
    paddingBottom: '20px'
  },
  sectionHeaderText: {
    fontSize: '2em',
    fontWeight: '200'
  }
}

class Clients extends Component {
  render() {
    return (
      <div>
        <Hero text="Client Testimonials" />
        <section
          style={{ marginTop: '10%', fontSize: '2em', fontWeight: '200' }}
        >
          <TextContent text="What Clients Are Saying" />
        </section>
        <Border />
        <section style={styles.section}>
          <div style={{ maxWidth: '55%', marginBottom: '5%' }}>
            <Image />
          </div>
          <div style={styles.imageText} className="textBreakpoint">
            <TextContent text="Walker is an amazing trainer, I've progressed extrememly rapidly through his programs - Jake Long" />
          </div>
        </section>
        <Border />
        <section style={styles.section}>
          <div style={styles.imageText}>
            <TextContent text="I am seeing amazing results from the weekly diet plans and the amaaing advice   - Haley" />
          </div>
          <div style={{ maxWidth: '55%' }}>
            <Image />
          </div>
        </section>
      </div>
    )
  }
}

export default Clients
