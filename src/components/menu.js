import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Border from './Border'
import List from '../../node_modules/@material-ui/core/List'
import ListItem from '../../node_modules/@material-ui/core/ListItem'
import Collapse from '../../node_modules/@material-ui/core/Collapse'
import ExpandLess from '../../node_modules/@material-ui/icons/ExpandLess'
import ExpandMore from '../../node_modules/@material-ui/icons/ExpandMore'
import Divider from '../../node_modules/@material-ui/core/Divider'

const styles = {
  boldType: {
    fontWeight: 'bold'
  },
  subListStyles: {
    marginTop: 'none',
    marginLeft: '20px',
    height: '20px',
    marginBottom: '10px'
  }
}
class Menu extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    return (
      <div
        style={{
          marginTop: '90px',
          marginLeft: '20px',
          marginRight: '20px',
          fontColor: 'black'
        }}
      >
        <Typography
          variant="display3"
          style={{
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'hsl(0,0%,13%)',
            marginBottom: '10px',
            marginLeft: '1em'
          }}
        >
          Menu
        </Typography>
        <Divider />
        <List style={{ fontFamily: 'Roboto', listStyleType: 'none' }}>
          <ListItem button>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Typography style={styles.boldType}>Home</Typography>
            </Link>
          </ListItem>
          <ListItem button>
            <Link style={{ textDecoration: 'none' }} to="/clients">
              <Typography style={styles.boldType}>
                Client Testimonies
              </Typography>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link style={{ textDecoration: 'none' }} to="/howtos">
              <Typography style={styles.boldType}> How To's</Typography>
            </Link>
          </ListItem>
          <ListItem button style={styles.subListStyles}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/ClientHowTos"
            >
              <Typography> For Clients </Typography>
            </Link>
          </ListItem>
          <ListItem button style={styles.subListStyles}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/ForTrainersHowTos"
            >
              <Typography> For Trainers </Typography>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/courses"
            >
              <Typography style={styles.boldType}> Plans </Typography>
            </Link>
          </ListItem>
          <ListItem button style={styles.subListStyles}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/nutritionplans"
            >
              <Typography> Nutrition Plans </Typography>
            </Link>
          </ListItem>
          <ListItem button style={styles.subListStyles}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/workoutplans"
            >
              <Typography> Fitness Plans </Typography>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </div>
    )
  }
}

export default Menu
