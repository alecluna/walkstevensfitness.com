import React from 'react'
import CardComponent from '../components/CardComponent'
import Footer from '../components/Footer'

export default function ClientHowTos() {
  const muscleGroups = ['Biceps', 'Triceps', 'Shoulders', 'Core', 'Legs']
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
        {muscleGroups.map((muscles, index) => {
          return (
            <li style={{ listStyle: 'none' }} key={index.toString()}>
              <CardComponent
                text={muscles}
                linkto={`/MuscleGroups/${muscles}/`}
                className="grow"
              />
            </li>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
