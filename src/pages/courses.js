import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import CardComponent from '../components/CardComponent'
import TitleComponent from '../components/TitleComponent'
import Footer from '../components/Footer'

class Courses extends Component {
  render() {
    return (
      <div>
        <TitleComponent title="Courses" />
        <TextContent />
        <div
          className="card-container"
          style={{
            display: 'inline-flex',
            justifyContent: 'space-around',
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
