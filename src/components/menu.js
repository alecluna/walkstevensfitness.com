import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#f4f4f4',
          paddingTop: '10px'
        }}
      >
        <ul
          style={{
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          <li>Home</li>
          <li>Client Testimonies</li>
          <li>How To's</li>
          <li>Courses</li>
        </ul>
      </div>
    )
  }
}

export default Menu
