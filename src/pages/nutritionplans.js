import React, { Component } from 'react'
import Link from 'gatsby-link'
import Card from '@material-ui/core/Card'
import CardContent from '../../node_modules/@material-ui/core/CardContent'
import Typography from '../../node_modules/@material-ui/core/Typography'

export default class Nutritionplans extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '354' }}>
          <CardContent>
            <Typography>
              <Link to="/courses"> Back Button here </Link>
            </Typography>
            <Typography src="https://docs.google.com/forms/d/e/1FAIpQLScEu6GAJ4UE1FWpzKhJ03nVHckp1b0bRPKHonkG7WQWIlqS9Q/viewform?embedded=true">
              Complete this quick survey so i can larn more about you
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
