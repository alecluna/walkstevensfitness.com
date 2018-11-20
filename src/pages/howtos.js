import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import Hero from '../components/Hero'
import CardComponent from '../components/CardComponent'
import Border from '../components/Border'
import Footer from '../components/Footer'

class HowTos extends Component {
  render() {
    return (
      <div>
        <Hero text="How To's" />
        <section
          style={{ marginTop: '10%', fontSize: '3em', fontWeight: '200' }}
        >
          <TextContent text="For Clients and Trainers" />
        </section>
        <Border />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <CardComponent
            text="For Clients"
            linkto="/ForClients/ClientHowTos/"
          />
          <CardComponent
            text="For Trainers"
            linkto="/ForTrainers/ForTrainersHowTos/"
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default HowTos
