import React from 'react'
import CardComponent from '../components/cardcomponent'
import Footer from '../components/footer'

export default function ClientHowTos() {
  const muscleGroups = ['biceps', 'triceps', 'shoulders', 'core', 'legs']
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
                linkto={`/musclegroups/${muscles}/`}
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
