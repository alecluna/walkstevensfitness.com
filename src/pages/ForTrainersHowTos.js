import React from 'react'
import Hero from '../components/Hero'
import TextContent from '../components/TextContent'
import Footer from '../components/Footer'
import Border from '../components/Border'

const styles = {
  sectionStyle: {
    marginTop: '10%',
    fontSize: '3em',
    fontWeight: '200'
  }
}
export default function ForTrainersHowTos() {
  return (
    <div>
      <Hero text="For Trainers" />
      <section style={styles.sectionStyle}>
        <TextContent text="Where do I Start?" />
      </section>
      <Border />
      <section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            listStyle: 'none'
          }}
        >
          <ul style={{ listStyle: 'none' }}>
            <li>
              <TextContent
                text="How to communicate?"
                style={styles.sectionStyle}
              />
            </li>
            <li>
              <TextContent text="How do I teach?" style={styles.sectionStyle} />
            </li>
            <li>
              <TextContent text="What to expect?" style={styles.sectionStyle} />
            </li>
            <li>
              <TextContent
                text="How to schedule?"
                style={styles.sectionStyle}
              />
            </li>
            <li>
              <TextContent
                text="How to get clients?"
                style={styles.sectionStyle}
              />
            </li>
            <li>
              <TextContent
                text="How to assess clients?"
                style={styles.sectionStyle}
              />
            </li>
            <li>
              <TextContent
                text="What forms do I need to train?"
                style={styles.sectionStyle}
              />
            </li>
          </ul>
        </div>
      </section>
      <Border />

      <Footer />
    </div>
  )
}
