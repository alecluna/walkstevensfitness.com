import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Card from '../../node_modules/@material-ui/core/Card'
import CardContent from '../../node_modules/@material-ui/core/CardContent'
import Hero from '../components/Hero'
import PopUpDialogue from '../components/PopUpDialogue'
import Image from '../components/Image'

//const clientTestimonies = 'This is a client Testimony'
export default class IndexPage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    setInterval(this._popUpDialogue(), 5000)
  }

  _popUpDialogue() {
    setTimeout(() => {
      this._delayPopUp()
    }, 2000)
  }

  _delayPopUp() {
    console.log('pop up fired at 2 seconds')
    return (
      <div>
        <PopUpDialogue open="true" />
      </div>
    )
  }

  render() {
    return (
      <div>
        <Hero text="Welcome to WalkStevenFitness" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin: '10%'
          }}
        >
          <div
            style={{
              maxWidth: '50%',
              marginRight: '20px'
            }}
          >
            <Image />
          </div>
          <div
            style={{
              maxWidth: '50%',
              marginTop: '5%'
            }}
          >
            <TextContent />
          </div>
        </div>
      </div>
    )
  }
}
