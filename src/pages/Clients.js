import React from 'react'
import TextContent from '../components/textcontent'
import Hero from '../components/hero'
import Image from '../components/image'
import Border from '../components/border'
import styled from '../../node_modules/styled-components'
import Layout from '../components/layout'
import squatStockPhoto from '../../assets/squatStockPhoto.jpeg'
import stockFlex from '../../assets/stockFlexAthlete.jpeg'

const styles = {
  section: {
    margin: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  sectionHeaderText: {
    fontSize: '2em',
    fontWeight: '200'
  }
}

const TextContainer = styled.div`
  max-width: 50%;
  text-align: left;
  padding-bottom: 20px;

  @media screen and (max-width: 750px) {
    max-width: 75%;
  }

  @media screen and (min-width: 750px) {
    margin-top: 5%;
  }
`

const Clients = () => (
  <Layout>
    <div>
      <Hero text="Client Testimonials" />
      <section style={{ marginTop: '10%', fontSize: '2em', fontWeight: '200' }}>
        <TextContent text="What Clients Are Saying" />
      </section>
      <Border />
      <section style={styles.section}>
        <div style={{ maxWidth: '55%', marginBottom: '5%' }}>
          <Image image={squatStockPhoto} />
        </div>
        <TextContainer>
          <TextContent text="Walker is an amazing trainer, I've progressed extrememly rapidly through his programs - Jake Long" />
        </TextContainer>
      </section>
      <Border />
      <section style={styles.section}>
        <TextContainer>
          <TextContent text="I am seeing amazing results from the weekly diet plans and the amaaing advice   - Haley" />
        </TextContainer>
        <div style={{ maxWidth: '55%' }}>
          <Image image={stockFlex} />
        </div>
      </section>
    </div>
  </Layout>
)

export default Clients
