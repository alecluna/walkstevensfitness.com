import React from 'react'
import TitleComponent from '../components/titlecomponent'
import TextContent from '../components/textcontent'

const NotFoundPage = () => (
  <div style={{ margin: '20%' }}>
    <TitleComponent title="NOT FOUND" />
    <TextContent text="Woops! You just hit a route that doesn&#39;t exist... the sadness." />
  </div>
)

export default NotFoundPage
