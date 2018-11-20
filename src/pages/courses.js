import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import CardComponent from '../components/CardComponent'
import TitleComponent from '../components/TitleComponent'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Border from '../components/Border'

class Courses extends Component {
  render() {
    return (
      <div>
        <Hero text="Plans" />
        <section
          style={{ marginTop: '5%', fontSize: '3em', fontWeight: '200' }}
        >
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
          <CardComponent text="Work Out Plans" linkto="/workoutplans" />
          <CardComponent text="Nutrition Plans" linkto="/nutritionplans" />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Courses
