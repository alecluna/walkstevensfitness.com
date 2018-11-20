import React from 'react'
import Hero from '../../components/Hero'
import CardComponent from '../../components/CardComponent'

export default function ClientHowTos() {
  const muscleGroups = ['biceps', 'triceps', 'shoulders', 'core', 'legs']
  return (
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
            />
          </li>
        )
      })}
    </div>
  )
}
