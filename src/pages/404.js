import React from 'react'
import TitleComponent from '../components/titlecomponent'
import TextContent from '../components/textcontent'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div style={{ margin: '20%' }}>
      <TitleComponent title="NOT FOUND" />
      <TextContent text="Woops! You just hit a route that doesn&#39;t exist... the sadness." />
    </div>
  </Layout>
)

export default NotFoundPage
