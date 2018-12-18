import React from 'react'
import Hero from '../components/hero'
import TextContent from '../components/textcontent'
import Footer from '../components/footer'
import Border from '../components/border'
import { Typography } from '@material-ui/core'

const styles = {
  sectionStyle: {
    marginTop: '10%',
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
          <ul style={{ listStyle: 'none', maxWidth: '50%' }}>
            <li>
              <TextContent
                text="How to communicate?"
                style={styles.sectionStyle}
              />
              <Typography> {fillerText} </Typography>
            </li>
            <li>
              <TextContent text="How do I teach?" style={styles.sectionStyle} />
              <Typography> {fillerText} </Typography>
            </li>
            <li>
              <TextContent text="What to expect?" style={styles.sectionStyle} />
              <Typography> {fillerText} </Typography>
            </li>
            <li>
              <TextContent
                text="How to schedule?"
                style={styles.sectionStyle}
              />
              <Typography> {fillerText} </Typography>
            </li>
            <li>
              <TextContent
                text="How to get clients?"
                style={styles.sectionStyle}
              />
              <Typography> {fillerText} </Typography>
            </li>
            <li>
              <TextContent
                text="How to assess clients?"
                style={styles.sectionStyle}
              />
              <Typography> {fillerText} </Typography>
            </li>
            <li>
              <TextContent
                text="What forms do I need to train?"
                style={styles.sectionStyle}
              />
              <Typography> {fillerText} </Typography>
            </li>
          </ul>
        </div>
      </section>
      <Border />

      <Footer />
    </div>
  )
}
