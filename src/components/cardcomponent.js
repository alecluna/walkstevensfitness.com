import React from 'react'
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

const CardComponent = ({ linkto, image, text }) => (
  <div style={styles.card}>
    <Link to={linkto} style={styles.links}>
      <Card className="grow">
        <img src={image} alt="Fitness Card Component" />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </div>
)

export default CardComponent
