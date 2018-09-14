import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import CardComponent from '../components/CardComponent'
class HowTos extends Component {
  render() {
    return (
      <div>
        <h1>How To Page</h1>
        <TextContent />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <CardComponent text="Legs" />
          <CardComponent text="Biceps" />
          <CardComponent text="Triceps" />
          <CardComponent text="Shoulders" />
          <CardComponent text="Core" />
        </div>
      </div>
    )
  }
}

export default HowTos
