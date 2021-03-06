import React from 'react'
import { Link } from 'gatsby'
import CardContent from '../../node_modules/@material-ui/core/CardContent'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Paper from '../../node_modules/@material-ui/core/Paper'
import Hero from '../components/hero'
import Layout from '../components/layout'

const styles = {
  paperStyle: {
    height: '60%',
    width: '50%',
    marginTop: '3%'
  }
}

const Nutritionplans = () => (
  <Layout>
    <div style={{ height: '100%' }}>
      <Hero text="Nutrition" />
      <div
        style={{
          marginTop: '10%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Paper style={styles.paperStyle} elevation={20}>
          <CardContent>
            <Typography>
              <Link style={{ textDecoration: 'none' }} to="/Courses">
                Go Back
              </Link>
            </Typography>
            <Typography>
              Complete this quick survey so I can learn more about you.
            </Typography>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScEu6GAJ4UE1FWpzKhJ03nVHckp1b0bRPKHonkG7WQWIlqS9Q/viewform?embedded=true">
              Survey
            </a>
          </CardContent>
        </Paper>
      </div>
    </div>
  </Layout>
)

export default Nutritionplans
