import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import CardComponent from '../components/CardComponent'
class Courses extends Component {
  render() {
    return (
      <div>
        <h1>Courses</h1>
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
      </div>
    )
  }
}

export default Courses
