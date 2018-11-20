import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import CardComponent from '../components/CardComponent'
import TitleComponent from '../components/TitleComponent'

class HowTos extends Component {
  render() {
    return (
      <div>
        <TitleComponent title="How To's" />
        <TextContent />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <CardComponent text="Legs" linkto="/MuscleGroups/Legs/" />
          <CardComponent text="Biceps" linkto="/MuscleGroups/Biceps/" />
          <CardComponent text="Triceps" linkto="/MuscleGroups/Triceps" />
          <CardComponent text="Shoulders" linkto="/MuscleGroups/Shoulders" />
          <CardComponent text="Core" linkto="/MuscleGroups/Core" />
        </div>
      </div>
    )
  }
}

export default HowTos
