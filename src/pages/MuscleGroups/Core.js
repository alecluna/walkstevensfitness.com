import React, { Component } from 'react'
import Hero from '../../components/hero'
import Footer from '../../components/footer'

export default class Core extends Component {
  render() {
    return (
      <div>
        <Hero text="Core" />
        <Footer />
      </div>
    )
  }
}
