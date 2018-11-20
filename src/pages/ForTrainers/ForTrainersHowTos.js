import React from 'react'
import Hero from '../../components/Hero'
import TextContent from '../../components/TextContent'
import Footer from '../../components/Footer'
import Border from '../../components/Border'

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
      <TextContent text="How to communicate" style={{ marginTop: '10%' }} />
      <section>
        <li>How to teach</li>
        <li>What to expect</li>
        <li>How to schedule</li>
        <li>How to get clients</li>
        <li>How to assess clients</li>
        <li>What forms do I need to train?</li>
      </section>

      <Footer />
    </div>
  )
}
