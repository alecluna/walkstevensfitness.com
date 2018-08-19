import React from 'react'
import Link from 'gatsby-link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => (
  <div
    style={{
      background: '#2e2e2d',
      marginBottom: '1.45rem'
    }}
  >
    <AppBar
      position="static"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <Toolbar variant="dense">
        <Typography variant="title" color="#2196f3">
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            WalkStevensFit
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
