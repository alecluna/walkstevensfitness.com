import React, { Component } from 'react'
import TextContent from '../../components/TextContent'
import Footer from '../../components/Footer'

export default class Core extends Component {
  render() {
    return (
      <div>
        <TextContent />
        <Footer />
      </div>
    )
  }
}
