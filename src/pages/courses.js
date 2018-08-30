import React, { Component } from 'react'
import TextContent from '../components/TextContent'
import Link from 'gatsby-link'
import Card from '../../node_modules/@material-ui/core/Card'
import Typography from '../../node_modules/@material-ui/core/Typography'
import CardContent from '../../node_modules/@material-ui/core/CardContent'
import CardMedia from '../../node_modules/@material-ui/core/CardMedia'

class Courses extends Component {
  render() {
    const styles = {
      card: {
        minWidth: 275
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
      },
      title: {
        marginBottom: 16,
        fontSize: 14
      },
      pos: {
        marginBottom: 12
      }
    }
    return (
      <div>
        <h1>Courses Page</h1>
        <TextContent />
        <CardMedia image="https://picsum.photos/200/300" />
        <Card style={styles.card}>
          <CardContent>
            <Typography style={styles.title}>
              <Link
                to="/workoutplans"
                style={{
                  color: 'blue',
                  textDecoration: 'none',
                  fontFamily: 'Roboto'
                }}
              >
                Workout Plans
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card style={styles.card}>
          <CardContent>
            <Typography style={styles.title}>
              <Link
                to="/nutritionplans"
                style={{
                  color: 'blue',
                  textDecoration: 'none',
                  fontFamily: 'Roboto'
                }}
              >
                Nutrition Plans
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Courses
