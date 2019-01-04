import React from 'react'
import TextContent from '../components/textcontent'
import Hero from '../components/hero'
import CardComponent from '../components/cardcomponent'
import Border from '../components/border'
import Layout from '../components/layout'
import clientImage from '../../assets/forClientsStock.jpeg'
import trainerImage from '../../assets/forTrainersImage.jpeg'

const HowTos = () => (
  <Layout>
    <div>
      <Hero text="How To's" />
      <section style={{ marginTop: '10%', fontSize: '2em', fontWeight: '200' }}>
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
          linkto="/ClientHowTos"
          image={clientImage}
        />
        <CardComponent
          text="For Trainers"
          linkto="/ForTrainersHowTos"
          image={trainerImage}
        />
      </div>
    </div>
  </Layout>
)

export default HowTos
