import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Link from 'gatsby-link'

const styles = {
  card: {
    maxWidth: 500,
    alignSelf: 'center',
    margin: '30px'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  links: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '28px'
  }
}

export default class CardComponent extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.linkto} style={styles.links}>
          <Card style={styles.card}>
            <CardMedia
              component="img"
              image={'https://picsum.photos/400/400'}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.props.text}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    )
  }
}
