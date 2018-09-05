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
        maxWidth: 345,
        alignSelf: 'center',
        margin: '30px'
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
      },
      links: {
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontSize: '28px'
      }
    }
    return (
      <div>
        <h1>Courses Page</h1>
        <TextContent />
        <div
          class="card-container"
          style={{
            display: 'inline-flex'
          }}
        >
          <Card style={styles.card}>
            <CardMedia
              component="img"
              image={'https://picsum.photos/345/345'}
            />
            <CardContent>
              <Typography style={styles.title}>
                <Link to="/workoutplans" style={styles.links}>
                  Workout Plans
                </Link>
              </Typography>
            </CardContent>
          </Card>
          <Card style={styles.card}>
            <CardMedia
              component="img"
              image={'https://picsum.photos/344/345'}
            />
            <CardContent>
              <Typography style={styles.title}>
                <Link to="/nutritionplans" style={styles.links}>
                  Nutrition Plans
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default Courses
