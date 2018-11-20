import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import TitleComponent from '../components/TitleComponent'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

class Clients extends Component {
  render() {
    return (
      <div>
        <Hero text="Client Testimonies" />
        <TitleComponent title="Client Testimonies" />
        <TextContent />
        <Footer />
      </div>
    )
  }
}

export default Clients
