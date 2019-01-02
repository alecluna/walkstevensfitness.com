import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import '../layouts/index.css'

const Layout = ({ children }) => (
  <div>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, user-scalable=no"
            />
            <meta name="format-detection" content="telephone=no" />
          </Helmet>
          <Header />
          <div>{children}</div>
          <Footer />
        </>
      )}
    />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
