import React from 'react'
import Layout from '../components/layout'
import CardComponent from '../components/cardcomponent'

import Biceps from '../../assets/Biceps.jpeg'
import Core from '../../assets/Core.jpeg'
import Shoulders from '../../assets/Shoulders.jpg'
import Legs from '../../assets/Legs.jpg'
import Triceps from '../../assets/Triceps.jpeg'

const muscleGroups = [`Biceps`, `Core`, `Shoulders`, `Legs`]

const styles = {
  card: {
    maxWidth: 500,
    alignSelf: 'center',
    margin: '30px'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  links: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '28px'
  }
}

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
