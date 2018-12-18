import React from 'react'
import TitleComponent from '../components/titlecomponent'
import Footer from '../components/footer'

const NotFoundPage = () => (
  <div>
    <TitleComponent title="NOT FOUND" />
    <p>Woops! You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer />
  </div>
)

export default NotFoundPage
