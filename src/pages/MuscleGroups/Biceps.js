import React, { Component } from 'react'
import Hero from '../../components/hero'
import Footer from '../../components/footer'

export default class Biceps extends Component {
  render() {
    return (
      <div>
        <Hero text="Biceps" />
        <Footer />
      </div>
    )
  }
}
