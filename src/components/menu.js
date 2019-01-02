import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../layouts/index.css'
import Typography from '../../node_modules/@material-ui/core/Typography'
import ListItem from '../../node_modules/@material-ui/core/ListItem'
import List from '../../node_modules/@material-ui/core/List'
import Divider from '../../node_modules/@material-ui/core/Divider'

const styles = {
  boldType: {
    fontWeight: 'bold'
  },
  subListStyles: {
    marginTop: 'none',
    marginLeft: '20px'
  }
}
export default class Menu extends Component {
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
            <Link style={{ textDecoration: 'none' }} to="/Clients">
              <Typography style={styles.boldType}>
                Client Testimonies
              </Typography>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link style={{ textDecoration: 'none' }} to="/Howtos">
              <Typography style={styles.boldType}> How To's</Typography>
            </Link>
          </ListItem>
          <ListItem button style={{ marginLeft: '20px' }}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/ClientHowTos"
            >
              <Typography> For Clients </Typography>
            </Link>
          </ListItem>
          <ListItem button style={{ marginLeft: '20px' }}>
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
              to="/Courses"
            >
              <Typography style={styles.boldType}> Plans </Typography>
            </Link>
          </ListItem>
          <ListItem button style={{ marginLeft: '20px' }}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/nutritionplans"
            >
              <Typography> Nutrition Plans </Typography>
            </Link>
          </ListItem>
          <ListItem button style={{ marginLeft: '20px' }}>
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
