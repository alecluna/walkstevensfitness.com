import React, { Component } from 'react'
import TextContent from '../components/textcontent'
import CardComponent from '../components/cardcomponent'
import Hero from '../components/hero'
import Border from '../components/border'
import Layout from '../components/layout'

const Courses = () => (
  <Layout>
    <div>
      <Hero text="Plans" />
      <section style={{ marginTop: '10%', fontSize: '2em', fontWeight: '200' }}>
        <TextContent text="Workout and Nutritional Plans" />
      </section>
      <Border />
      <TextContent />
      <div
        className="card-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <CardComponent
          text="Work Out Plans"
          linkto="/workoutplans"
          className="grow"
        />
        <CardComponent
          text="Nutrition Plans"
          linkto="/nutritionplans"
          className="grow"
        />
      </div>
    </div>
  </Layout>
)

export default Courses
