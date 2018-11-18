import React, { Component } from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Paper from '../../node_modules/@material-ui/core/Paper'

const styles = {
  background: {
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paperStyle: {
    height: '60%',
    width: '80%'
  }
}

export default class Hero extends Component {
  render() {
    return (
      <div style={styles.background}>
        <Paper style={styles.paperStyle} elevation={11}>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography
              variant="display2"
              style={{ color: 'black', fontWeight: '200' }}
            >
              {this.props.text}
            </Typography>
          </div>
        </Paper>
      </div>
    )
  }
}
