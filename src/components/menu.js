import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

class Menu extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: '20px',
          marginRight: '20px'
        }}
      >
        <ul
          style={{
            fontFamily: 'Roboto',
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            borderBottom: '.5px solid slategrey'
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clients">Client Testimonies</Link>
          </li>
          <li>
            <Link to="/howtos">How To's</Link>
          </li>
          <li>
            <Link to="courses">Courses </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
