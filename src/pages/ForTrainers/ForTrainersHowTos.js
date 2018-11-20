import React from 'react'
import Hero from '../../components/Hero'
import TextContent from '../../components/TextContent'
import Footer from '../../components/Footer'
import Border from '../../components/Border'

export default function ForTrainersHowTos() {
  return (
    <div>
      <Hero text="For Trainers" />
      <section style={{ marginTop: '10%', fontSize: '3em', fontWeight: '200' }}>
        <TextContent text="Where do I Start?" />
      </section>
      <Border />

      <Footer />
    </div>
  )
}
