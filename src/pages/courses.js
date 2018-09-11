import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import CardComponent from '../components/CardComponent'
class Courses extends Component {
  render() {
    const styles = {
      card: {
        maxWidth: 345,
        alignSelf: 'center',
        margin: '30px'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
      },
      pos: {
        marginBottom: 12
      },
      links: {
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontSize: '28px'
      }
    }
    return (
      <div>
        <h1>Courses Page</h1>
        <TextContent />
        <div
          className="card-container"
          style={{
            display: 'inline-flex'
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
