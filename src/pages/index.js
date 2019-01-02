import React, { Component } from 'react'
import Hero from '../components/hero'
import PopUpDialogue from '../components/popupdialogue'
import TextContent from '../components/textcontent'
import Border from '../components/border'
import Image from '../components/image'
import styled from '../../node_modules/styled-components'
import Layout from '../components/layout'

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
    margin-top: 5%;
    margin-bottom: 5%;
  }

  @media screen and (min-width: 750px) {
    margin-top: 5%;
  }
`

const fillerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.`

const IndexPage = () => (
  <Layout>
    <PopUpDialogue />
    <Hero text="Welcome to WalkStevenFitness" />
    <section style={{ marginTop: '10%', fontSize: '2em', fontWeight: '200' }}>
      <TextContent text="What I Do" />
    </section>
    <Border />
    <section style={styles.section}>
      <div style={{ maxWidth: '55%' }}>
        <Image />
      </div>
      <TextContainer>
        <TextContent text={fillerText} />
      </TextContainer>
    </section>
    <section style={styles.sectionHeaderText}>
      <TextContent text="What I Offer" />
    </section>
    <Border />
    <section style={styles.section}>
      <TextContainer>
        <TextContent text={fillerText} />
      </TextContainer>
      <div style={{ maxWidth: '55%' }}>
        <Image />
      </div>
    </section>
  </Layout>
)

export default IndexPage
