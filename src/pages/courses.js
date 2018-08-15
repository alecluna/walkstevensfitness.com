import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import Link from 'gatsby-link'

class Courses extends Component {
  render() {
    return (
      <div>
        <h1>Courses Page</h1>
        <TextContent />
        <li>
          <Link
            to="/workoutplans"
            style={{
              color: 'blue',
              textDecoration: 'none',
              fontFamily: 'Roboto'
            }}
          >
            Workout Plans
          </Link>
        </li>
        <li>
          <Link
            to="/nutritionplans"
            style={{
              color: 'blue',
              textDecoration: 'none',
              fontFamily: 'Roboto'
            }}
          >
            Nutrition Plans
          </Link>
        </li>
      </div>
    )
  }
}

export default Courses
