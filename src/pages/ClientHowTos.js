import React from 'react'
import Layout from '../components/layout'
import CardComponent from '../components/cardcomponent'

import Biceps from '../../assets/Biceps.jpeg'
import Core from '../../assets/Core.jpeg'
import Shoulders from '../../assets/Shoulders.jpg'
import Legs from '../../assets/Legs.jpg'
import Triceps from '../../assets/Triceps.jpeg'

const ClientHowTos = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row'
      }}
    >
      <CardComponent
        text="Biceps"
        linkto="/musclegroups/Biceps/"
        className="grow"
        image={Biceps}
      />
      <CardComponent
        text="Core"
        linkto="/musclegroups/Core/"
        className="grow"
        image={Core}
      />
      <CardComponent
        text="Shoulders"
        linkto="/musclegroups/Shoulders/"
        className="grow"
        image={Shoulders}
      />
      <CardComponent
        text="Legs"
        linkto="/musclegroups/Legs/"
        className="grow"
        image={Legs}
      />
      <CardComponent
        text="Triceps"
        linkto="/musclegroups/Triceps/"
        className="grow"
        image={Triceps}
      />
    </div>
  </Layout>
)

export default ClientHowTos
