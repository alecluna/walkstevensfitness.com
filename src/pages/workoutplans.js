import React, { Component } from 'react'
import Link from 'gatsby-link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
//import CardActions from '@material-ui/core/CardActions'

export default class Workoutplans extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography>
              <Link to="/courses"> Back Button here </Link>
            </Typography>
            <Typography src="https://docs.google.com/forms/d/e/1FAIpQLScEu6GAJ4UE1FWpzKhJ03nVHckp1b0bRPKHonkG7WQWIlqS9Q/viewform?embedded=true">
              Complete this quick survey so i can larn more about youn
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
