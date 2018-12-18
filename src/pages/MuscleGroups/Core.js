import React, { Component } from 'react'
import TextContent from '../../components/textcontent'
import Footer from '../../components/footer'

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
