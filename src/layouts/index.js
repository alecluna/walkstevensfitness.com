import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>

    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
