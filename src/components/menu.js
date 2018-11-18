import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Border from '../components/Border'

class Menu extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '90px',
          marginLeft: '20px',
          marginRight: '20px',
          fontColor: 'black'
        }}
      >
        <Typography
          variant="display3"
          style={{
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: '700',
            color: 'hsl(0,0%,13%)',
            marginBottom: '10px'
          }}
        >
          Menu
        </Typography>
        <Border />
        <ul
          style={{
            fontFamily: 'Roboto',
            listStyleType: 'none',
            marginTop: '20px'
          }}
        >
          <li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="/clients"
            >
              Client Testimonies
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="/howtos"
            >
              How To's
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="courses"
            >
              Courses
            </Link>
          </li>
        </ul>
        <Border />
      </div>
    )
  }
}

export default Menu
