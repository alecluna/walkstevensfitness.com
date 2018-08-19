import React, { Component } from 'react'
import Link from 'gatsby-link'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default class Workoutplans extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography>Word of the Day</Typography>
            <Link to="/courses"> Back Button here </Link>

            <Typography
              className={classes.pos}
              color="textSecondary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqwzno2zsHwmDlBiuz2VTnamKoX92AEk4v3U9fpwzH0rJ7ng/viewform?embedded=true"
            >
              Click here to fill out a custom workout plan survey
            </Typography>
            <Typography component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}
