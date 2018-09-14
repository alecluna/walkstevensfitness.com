import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import TitleComponent from '../components/TitleComponent'
class Clients extends Component {
  render() {
    return (
      <div>
        <TitleComponent title="Client Testimonies" />
        <TextContent />
      </div>
    )
  }
}

export default Clients
