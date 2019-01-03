import React from 'react'
import Hero from '../components/hero'
import TextContent from '../components/textcontent'
import Border from '../components/border'
import TrainerHowTo from '../components/trainerhowto'
import Layout from '../components/layout'

const styles = {
  sectionStyle: {
    marginTop: '10%',
    fontSize: '2em',
    fontWeight: '200'
  }
}

const ForTrainersHowTos = () => (
  <Layout>
    <div>
      <Hero text="For Trainers" />
      <section style={styles.sectionStyle}>
        <TextContent text="Where do I Start?" />
      </section>
      <Border />
      <section>
        <TrainerHowTo />
      </section>
      <Border />
    </div>
  </Layout>
)

export default ForTrainersHowTos
