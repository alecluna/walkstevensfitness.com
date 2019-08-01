import React from 'react'
import { Link } from 'gatsby'
import AppBar from '../../node_modules/@material-ui/core/AppBar'
import Toolbar from '../../node_modules/@material-ui/core/Toolbar'
import Typography from '../../node_modules/@material-ui/core/Typography'
import IconButton from '../../node_modules/@material-ui/core/IconButton'
import MenuIcon from '../../node_modules/@material-ui/icons/Menu'
import Drawer from '../../node_modules/@material-ui/core/Drawer'
import Menu from '../components/menu'

class Header extends React.Component {
  state = { open: false }

  toggleDrawer = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div>
        <AppBar position="static" color="inherit">
          <Toolbar variant="dense">
            <IconButton color="primary" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer} />
            </IconButton>
            <Drawer open={this.state.open} onClose={this.toggleDrawer}>
              <div
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
              >
                <Menu />
              </div>
            </Drawer>
            <Typography
              variant="title"
              style={{
                color: 'black',
                textDecoration: 'none',
                marginLeft: '20px'
              }}
            >
              <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                Custom Fitness Template
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
