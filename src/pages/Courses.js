import React from 'react'
import TextContent from '../components/textcontent'
import CardComponent from '../components/cardcomponent'
import Hero from '../components/hero'
import Border from '../components/border'
import Layout from '../components/layout'
import foodImage from '../../assets/foodimage.jpg'
import fitnessPlansImage from '../../assets/fitnessPlansImag.jpeg'

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
          image={fitnessPlansImage}
        />
        <CardComponent
          text="Nutrition Plans"
          linkto="/nutritionplans"
          className="grow"
          image={foodImage}
        />
      </div>
    </div>
  </Layout>
)

export default Courses
