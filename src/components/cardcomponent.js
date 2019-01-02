import React, { Component } from 'react'
import Card from '../../node_modules/@material-ui/core/Card'
import Typography from '../../node_modules/@material-ui/core/Typography'
import CardContent from '../../node_modules/@material-ui/core/CardContent'
import { Link } from 'gatsby'

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
const image = 'https://picsum.photos/394/394'

export default class CardComponent extends Component {
  render() {
    return (
      <div style={styles.card}>
        <Link to={this.props.linkto} style={styles.links}>
          <Card className="grow">
            <img src={image} alt="Fitness Card Component" />

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
